"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export function HeroInvoicingCAI() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-[#d9d9d9] via-[#d9d9d9] to-white">
      <div className="container max-w-screen-2xl mx-auto px-6 lg:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Text Content */}
          <div className="lg:w-1/2 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-3 px-0 py-1 text-xs font-semibold tracking-[0.2em] uppercase mb-8 text-neutral-500">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                Certificado por SAR Honduras
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black tracking-tight leading-[1.1] mb-8">
                Facturación CAI <br/>
                <span className="text-black">
                  en segundos.
                </span>
              </h1>
              <p className="text-xl text-neutral-600 font-light leading-relaxed max-w-xl">
                Cumple con todas las normativas de la SAR. Gestiona clientes, exoneraciones y descuentos de 3ra edad con una elegancia y rapidez que nunca has visto.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" className="rounded-none text-base px-10 h-14 bg-black text-white hover:bg-neutral-800 transition-all font-normal">
                Empezar prueba gratis
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-none text-base px-10 h-14 border-black text-black hover:bg-neutral-50 transition-all font-normal bg-transparent">
                Ver demo en vivo
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-8 text-sm font-normal text-neutral-500 mt-6"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-black stroke-[1.5]" />
                Rango CAI Validado
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-black stroke-[1.5]" />
                Base de Datos Segura
              </div>
            </motion.div>
          </div>

          {/* Visual Content - Minimalist */}
          <motion.div 
            className="lg:w-1/2 relative flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          >
            <div className="relative z-10 bg-white shadow-2xl border border-neutral-100 p-8 md:p-10 w-full max-w-md mx-auto">
              {/* Mockup Header */}
              <div className="flex justify-between items-start mb-10 border-b border-neutral-100 pb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-neutral-100 flex items-center justify-center font-light text-lg">M</div>
                  <div>
                    <div className="text-[10px] tracking-widest text-neutral-400 uppercase mb-1">Factura #001-001-01-00002589</div>
                    <div className="font-medium text-base">Inversiones HN S. de R.L.</div>
                  </div>
                </div>
                <div className="text-right hidden sm:block">
                  <div className="text-[10px] tracking-widest text-neutral-400 uppercase mb-1">Vence</div>
                  <div className="font-mono text-sm text-neutral-600">20/12/2026</div>
                </div>
              </div>

              {/* Mockup Body Items */}
              <div className="space-y-6 mb-10">
                <div className="flex justify-between items-start group">
                  <div>
                    <div className="font-normal text-sm mb-1">Consultoría de Software</div>
                    <div className="text-xs text-neutral-400 font-light">Servicios Profesionales</div>
                  </div>
                  <div className="font-mono text-sm font-light">L 15,000.00</div>
                </div>
                <div className="flex justify-between items-start group opacity-50">
                  <div>
                    <div className="font-normal text-sm mb-1">Mantenimiento Mensual</div>
                    <div className="text-xs text-neutral-400 font-light">Soporte Técnico</div>
                  </div>
                  <div className="font-mono text-sm font-light">L 2,500.00</div>
                </div>
              </div>

              {/* Mockup Summary */}
              <div className="space-y-3 pt-6 border-t border-neutral-100">
                <div className="flex justify-between text-sm font-light text-neutral-500">
                  <span>Subtotal</span>
                  <span className="font-mono">L 17,500.00</span>
                </div>
                <div className="flex justify-between text-sm font-light text-neutral-500">
                  <span>Descuento (3ra Edad)</span>
                  <span className="font-mono">- L 0.00</span>
                </div>
                <div className="flex justify-between text-sm font-light text-neutral-500">
                  <span>ISV (15%)</span>
                  <span className="font-mono">L 2,625.00</span>
                </div>
                <div className="flex justify-between text-lg font-medium mt-4 pt-4 border-t border-black">
                  <span>Total</span>
                  <span className="font-mono">L 20,125.00</span>
                </div>
              </div>
              
              {/* Floating Badge Minimal */}
              <motion.div 
                className="absolute -right-3 -top-3 bg-black text-white px-4 py-1.5 text-xs font-medium tracking-wide shadow-none"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                CAI VÁLIDO
              </motion.div>
            </div>

            {/* Background Decor Minimal */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-tr from-neutral-200/30 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
