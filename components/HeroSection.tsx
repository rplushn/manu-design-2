"use client"

import { motion } from "framer-motion"
import { Maximize2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ImageLightbox } from "@/components/ui/ImageLightbox"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('/hero-bg.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center text-white pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block py-1.5 px-4 border border-white/20 bg-white/10 backdrop-blur-md text-xs font-bold tracking-[0.2em] uppercase mb-8"
          >
            Próximamente · Febrero 2026
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight leading-tight"
          >
            Tu negocio, <br className="hidden md:block" />
            a otro nivel.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xl md:text-2xl text-neutral-200 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Muy pronto tendrás un portal web ultra moderno para controlar inventarios masivos, 
            facturación electrónica y reportes avanzados desde tu navegador.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                asChild
                size="lg" 
                className="rounded-none bg-white text-black hover:bg-neutral-200 text-lg px-10 py-7 h-auto transition-all duration-300 relative overflow-hidden group"
              >
                <a href="#inventario-portal">
                  Ver lo que viene
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1200" />
                </a>
              </Button>
            </motion.div>

            <ImageLightbox
              thumbnailSrc="/Dashboard-Panel-Portal.png"
              fullSrc="/Dashboard-Panel-Portal.png"
              alt="Dashboard del portal web MANU"
              trigger={
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-none border-white/30 text-white hover:bg-white/10 text-lg px-10 py-7 h-auto transition-all duration-300"
                  >
                    Ver dashboard en grande <Maximize2 className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
              }
            />
          </motion.div>
        </motion.div>

        {/* Floating Dashboard Card with 3D Perspective */}
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: 15 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ 
            duration: 1,
            delay: 0.9,
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
          className="hidden md:block mt-16 perspective-1000"
        >
          <motion.div
            whileHover={{ 
              rotateY: 5,
              rotateX: -5,
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
            className="relative mx-auto w-full max-w-4xl transform-gpu"
            style={{ 
              transformStyle: "preserve-3d",
            }}
          >
            <div className="relative bg-white/95 backdrop-blur-sm border border-white/20 shadow-2xl p-4 rounded-none overflow-hidden">
              <ImageLightbox
                thumbnailSrc="/Dashboard-Panel-Portal.png"
                fullSrc="/Dashboard-Panel-Portal.png"
                alt="Dashboard del portal web MANU - Vista previa"
                trigger={
                  <div className="cursor-pointer relative group">
                    <Image
                      src="/Dashboard-Panel-Portal.png"
                      alt="Dashboard preview"
                      width={1200}
                      height={800}
                      className="w-full h-auto block transition-opacity group-hover:opacity-90"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm px-6 py-3 rounded-none flex items-center gap-2">
                        <Maximize2 className="w-5 h-5 text-black" />
                        <span className="text-sm font-medium text-black">Ver en grande</span>
                      </div>
                    </div>
                  </div>
                }
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* CSS for 3D perspective */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        @media (max-width: 768px) {
          .perspective-1000 {
            perspective: none;
          }
        }
      `}</style>
    </section>
  )
}
