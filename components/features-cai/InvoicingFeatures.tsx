"use client"

import { motion } from "framer-motion"
import { Users, Zap, FileCheck, HeartHandshake } from "lucide-react"
import { cn } from "@/lib/utils"

const FeatureSection = ({ 
  title, 
  description, 
  icon: Icon, 
  align = "left", 
  imageContent 
}: { 
  title: string, 
  description: string, 
  icon: any, 
  align?: "left" | "right",
  imageContent?: React.ReactNode
}) => {
  return (
    <section className="py-24 lg:py-40 overflow-hidden border-b border-neutral-100 last:border-0">
      <div className="container max-w-screen-xl mx-auto px-6 lg:px-20">
        <div className={cn(
          "flex flex-col lg:flex-row items-center gap-20 lg:gap-32",
          align === "right" ? "lg:flex-row-reverse" : ""
        )}>
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2"
          >
            <div className="mb-8 inline-flex">
              <Icon className="w-8 h-8 text-black stroke-[1.5]" />
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-black mb-8 leading-[1.15] tracking-tight">
              {title}
            </h2>
            <p className="text-xl text-neutral-500 font-light leading-relaxed max-w-md">
              {description}
            </p>
          </motion.div>

          {/* Visual Content - Minimalist */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:w-1/2 w-full flex justify-center"
          >
            <div className="bg-white p-0 md:p-8 flex items-center justify-center relative w-full max-w-md">
               {imageContent}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export function InvoicingFeatures() {
  return (
    <div className="bg-white">
      {/* Feature 1: Base de Clientes */}
      <FeatureSection
        title="Tu base de clientes, siempre lista."
        description="Olvídate de digitar RTN y nombres cada vez. Guarda hasta 100 clientes frecuentes en el plan Premium y selecciónalos con un solo toque."
        icon={Users}
        align="left"
        imageContent={
          <div className="w-full bg-white shadow-xl border border-neutral-100 overflow-hidden">
            <div className="p-4 border-b border-neutral-100 flex justify-between items-center bg-white">
              <span className="text-[10px] font-semibold tracking-widest text-neutral-400 uppercase">Seleccionar Cliente</span>
            </div>
            <div className="divide-y divide-neutral-100">
              {['Inversiones del Norte', 'Constructora Sula', 'Farmacias El Ahorro'].map((client, i) => (
                <div key={i} className="p-5 flex items-center gap-4 hover:bg-neutral-50 transition-colors cursor-pointer group">
                  <div className="w-8 h-8 bg-neutral-100 flex items-center justify-center text-xs font-normal group-hover:bg-black group-hover:text-white transition-colors">{client[0]}</div>
                  <div className="flex-1">
                    <div className="text-sm font-normal text-neutral-900">{client}</div>
                    <div className="text-xs text-neutral-400 font-mono mt-0.5">0801-1990-1234{i}</div>
                  </div>
                  {i === 0 && <div className="w-2 h-2 bg-black rounded-full"></div>}
                </div>
              ))}
            </div>
          </div>
        }
      />

      {/* Feature 2: Inventario Rápido */}
      <FeatureSection
        title="Inventario Favorito al instante."
        description="Configura tus productos o servicios más vendidos como favoritos. No busques en listas interminables; encuéntralos al principio."
        icon={Zap}
        align="right"
        imageContent={
          <div className="grid grid-cols-2 gap-4 w-full">
            {['Consultoría', 'Mantenimiento', 'Licencia Anual', 'Soporte'].map((item, i) => (
              <div key={i} className="bg-white p-6 border border-neutral-200 hover:border-black transition-all cursor-pointer text-center group aspect-square flex flex-col items-center justify-center">
                <Zap className="w-6 h-6 mb-4 text-neutral-300 group-hover:text-black transition-colors stroke-[1.5]" />
                <div className="text-sm font-normal">{item}</div>
                <div className="text-xs text-neutral-400 mt-2 font-mono">L 1,500.00</div>
              </div>
            ))}
          </div>
        }
      />

      {/* Feature 3: Exoneraciones */}
      <FeatureSection
        title="Manejo de Exoneraciones Fiscales."
        description="¿Tienes clientes exonerados? MANU lo maneja nativamente. Registra su número de orden de compra exenta directamente en la ficha del cliente."
        icon={FileCheck}
        align="left"
        imageContent={
          <div className="w-full bg-white p-8 shadow-xl border border-neutral-100 space-y-6">
             <div className="flex items-center gap-3 mb-2">
               <div className="w-2 h-2 bg-green-500 rounded-full"></div>
               <span className="text-xs font-bold tracking-widest uppercase text-neutral-900">Cliente Exonerado</span>
             </div>
             <div className="space-y-4">
               <div>
                 <label className="block text-[10px] tracking-widest uppercase text-neutral-400 mb-2">Orden de Compra Exenta</label>
                 <div className="w-full border-b border-neutral-300 py-2 text-sm font-mono text-black">
                   OC-EX-2026-8892
                 </div>
               </div>
               <div>
                 <label className="block text-[10px] tracking-widest uppercase text-neutral-400 mb-2">Constancia Registro</label>
                 <div className="w-full border-b border-neutral-300 py-2 text-sm font-mono text-black">
                   CRE-9928-11
                 </div>
               </div>
             </div>
          </div>
        }
      />

      {/* Feature 4: Descuentos */}
      <FeatureSection
        title="Descuento 3ra y 4ta Edad."
        description="Cumple con la Ley Integral de Protección al Adulto Mayor sin cálculos manuales. Un botón dedicado aplica automáticamente los descuentos."
        icon={HeartHandshake}
        align="right"
        imageContent={
          <div className="w-full flex flex-col items-center justify-center gap-6">
            <div className="w-full flex items-center justify-between py-4 border-b border-neutral-100">
              <span className="text-sm font-light text-neutral-500">Subtotal</span>
              <span className="font-mono text-sm">L 1,000.00</span>
            </div>
            
            <motion.button 
              whileTap={{ scale: 0.98 }}
              className="w-full bg-black text-white py-4 text-sm font-normal hover:bg-neutral-800 transition-colors flex items-center justify-center gap-3"
            >
              <HeartHandshake className="w-4 h-4" />
              Aplicar Descuento Ley
            </motion.button>

            <div className="w-full flex items-center justify-between py-4 border-b border-neutral-100">
              <span className="text-sm font-medium text-black">Descuento Aplicado</span>
              <span className="font-mono text-sm text-black">- L 250.00</span>
            </div>
          </div>
        }
      />
    </div>
  )
}
