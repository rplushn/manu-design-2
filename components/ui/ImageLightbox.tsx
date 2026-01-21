"use client"

import { useState, useEffect, ReactNode } from "react"
import Image from "next/image"
import { X } from "lucide-react"

interface ImageLightboxProps {
  thumbnailSrc: string
  fullSrc: string
  alt: string
  className?: string
  trigger?: ReactNode // Permite un trigger personalizado (botón, etc.)
}

export function ImageLightbox({ thumbnailSrc, fullSrc, alt, className = "", trigger }: ImageLightboxProps) {
  const [isOpen, setIsOpen] = useState(false)

  // Prevenir scroll del body cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  // Cerrar con tecla Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [isOpen])

  return (
    <>
      {/* Thumbnail clickeable o trigger personalizado */}
      {trigger ? (
        <div onClick={() => setIsOpen(true)} className="cursor-pointer">
          {trigger}
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className={`block w-full cursor-pointer transition-opacity hover:opacity-90 ${className}`}
          aria-label={`Ver ${alt} en grande`}
        >
          <Image
            src={thumbnailSrc}
            alt={alt}
            width={800}
            height={600}
            className="w-full h-auto block"
            unoptimized
          />
        </button>
      )}

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setIsOpen(false)}
        >
          {/* Contenedor de la imagen - previene que el clic cierre el modal */}
          <div
            className="relative max-w-5xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón cerrar */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-neutral-300 transition-colors z-10"
              aria-label="Cerrar"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Imagen grande */}
            <div className="bg-white rounded-none shadow-2xl overflow-hidden">
              <Image
                src={fullSrc}
                alt={alt}
                width={1200}
                height={900}
                className="w-full h-auto max-h-[90vh] object-contain block rounded-none"
                unoptimized
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
