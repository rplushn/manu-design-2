"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export function HeroInvoicingCAI() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-[#d9d9d9] via-[#d9d9d9] to-white">
      <div className="container max-w-screen-2xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="lg:w-1/2 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 text-xs font-bold tracking-widest uppercase mb-6">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Certificado por SAR Honduras
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black tracking-tight leading-[1.1] mb-6">
                Facturación CAI <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-600 to-black">
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
              <Button size="lg" className="rounded-full text-base px-8 h-14 bg-black text-white hover:bg-neutral-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
                Empezar prueba gratis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-full text-base px-8 h-14 border-neutral-300 hover:bg-neutral-50 transition-all">
                Ver demo en vivo
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-6 text-sm font-medium text-neutral-500 mt-4"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-black" />
                Rango CAI Validado
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-black" />
                Base de Datos Segura
              </div>
            </motion.div>
          </div>

          {/* Visual Content - Abstract representation of speed/compliance */}
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          >
            <div className="relative z-10 bg-white rounded-3xl shadow-2xl border border-neutral-100 p-6 md:p-8 max-w-md mx-auto rotate-3 hover:rotate-0 transition-all duration-500">
              {/* Mockup Header */}
              <div className="flex justify-between items-center mb-8 border-b border-neutral-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center font-bold">M</div>
                  <div>
                    <div className="text-xs text-neutral-400">FACTURA #001-001-01-00002589</div>
                    <div className="font-bold text-sm">Inversiones HN S. de R.L.</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-neutral-400">FECHA LIMITE</div>
                  <div className="font-mono text-xs font-medium">20/12/2026</div>
                </div>
              </div>

              {/* Mockup Body Items */}
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center p-3 bg-neutral-50 rounded-xl">
                  <div>
                    <div className="font-medium text-sm">Consultoría de Software</div>
                    <div className="text-xs text-neutral-500">Servicios Profesionales</div>
                  </div>
                  <div className="font-mono font-medium">L 15,000.00</div>
                </div>
                <div className="flex justify-between items-center p-3 bg-neutral-50 rounded-xl opacity-60">
                  <div>
                    <div className="font-medium text-sm">Mantenimiento Mensual</div>
                    <div className="text-xs text-neutral-500">Soporte Técnico</div>
                  </div>
                  <div className="font-mono font-medium">L 2,500.00</div>
                </div>
              </div>

              {/* Mockup Summary */}
              <div className="space-y-2 pt-4 border-t border-dashed border-neutral-200">
                <div className="flex justify-between text-xs text-neutral-500">
                  <span>Subtotal</span>
                  <span>L 17,500.00</span>
                </div>
                <div className="flex justify-between text-xs text-green-600 font-medium">
                  <span>Descuento (3ra Edad)</span>
                  <span>- L 0.00</span>
                </div>
                <div className="flex justify-between text-xs text-neutral-500">
                  <span>ISV (15%)</span>
                  <span>L 2,625.00</span>
                </div>
                <div className="flex justify-between text-xl font-bold mt-2 pt-2 border-t border-neutral-100">
                  <span>Total</span>
                  <span>L 20,125.00</span>
                </div>
              </div>
              
              {/* Floating Badge */}
              <motion.div 
                className="absolute -right-4 -top-4 bg-black text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                CAI Válido ✓
              </motion.div>
            </div>

            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-neutral-200/50 to-transparent rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
