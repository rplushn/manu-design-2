"use client"

import { MessageCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface HeroClientProps {
  whatsappUrl: string
}

export function HeroClient({ whatsappUrl }: HeroClientProps) {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Fondo animado sutil (Blobs) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-neutral-100 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-neutral-50 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-[500px] h-[500px] bg-neutral-100 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-black mb-6 animate-fade-in-up">
          ¿Necesitas ayuda con Manu?
        </h1>
        <p className="text-lg md:text-xl text-neutral-500 mb-12 max-w-2xl mx-auto animate-fade-in-up animation-delay-100">
          Encuentra guías rápidas, tutoriales y soporte personalizado para tu negocio.
        </p>

        {/* Número de soporte destacado */}
        <div className="mb-12 animate-fade-in-up animation-delay-200 overflow-x-auto">
          <a 
            href="tel:+50489502917" 
            className="inline-block text-4xl md:text-6xl font-thin tracking-tighter hover:text-neutral-600 transition-colors duration-300 whitespace-nowrap"
          >
            +504 8950 2917
          </a>
          <span className="text-sm font-medium text-neutral-400 mt-2 block uppercase tracking-widest">
            Línea Directa de Soporte
          </span>
        </div>

        {/* CTA Principal */}
        <div className="animate-fade-in-up animation-delay-300">
          <Button 
            asChild
            size="lg" 
            className="bg-black text-white hover:bg-neutral-800 rounded-full px-8 h-12 text-base shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Link href={whatsappUrl} target="_blank">
              <MessageCircle className="mr-2 h-5 w-5" />
              Escríbenos por WhatsApp
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
