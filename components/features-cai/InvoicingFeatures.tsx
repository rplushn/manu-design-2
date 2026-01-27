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
    <section className="py-20 lg:py-32 overflow-hidden">
      <div className="container max-w-screen-xl mx-auto px-6">
        <div className={cn(
          "flex flex-col lg:flex-row items-center gap-16 lg:gap-24",
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
            <div className="w-14 h-14 rounded-2xl bg-neutral-100 flex items-center justify-center mb-8">
              <Icon className="w-7 h-7 text-black" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
              {title}
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed">
              {description}
            </p>
          </motion.div>

          {/* Visual Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:w-1/2 w-full"
          >
            <div className="bg-neutral-50 rounded-3xl p-8 border border-neutral-100 shadow-sm min-h-[300px] flex items-center justify-center relative overflow-hidden group hover:shadow-md transition-shadow">
               {/* Background Pattern */}
               <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />
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
        description="Olvídate de digitar RTN y nombres cada vez. Guarda hasta 100 clientes frecuentes en el plan Premium y selecciónalos con un solo toque. La facturación recurrente nunca fue tan rápida."
        icon={Users}
        align="left"
        imageContent={
          <div className="w-full max-w-sm bg-white rounded-xl shadow-lg border border-neutral-100 overflow-hidden">
            <div className="p-4 border-b border-neutral-100 bg-neutral-50/50 flex justify-between items-center">
              <span className="text-xs font-semibold text-neutral-500 uppercase">Seleccionar Cliente</span>
              <Users className="w-4 h-4 text-neutral-400" />
            </div>
            <div className="divide-y divide-neutral-100">
              {['Inversiones del Norte', 'Constructora Sula', 'Farmacias El Ahorro'].map((client, i) => (
                <div key={i} className="p-4 flex items-center gap-3 hover:bg-neutral-50 transition-colors cursor-pointer">
                  <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-xs font-bold">{client[0]}</div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">{client}</div>
                    <div className="text-xs text-neutral-400">0801-1990-1234{i}</div>
                  </div>
                  {i === 0 && <div className="text-xs bg-black text-white px-2 py-1 rounded">Seleccionado</div>}
                </div>
              ))}
            </div>
          </div>
        }
      />

      {/* Feature 2: Inventario Rápido */}
      <FeatureSection
        title="Inventario Favorito al instante."
        description="Configura tus productos o servicios más vendidos como favoritos. Al momento de facturar, no busques en listas interminables; encuéntralos al principio y agrégalos a la factura en segundos."
        icon={Zap}
        align="right"
        imageContent={
          <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
            {['Consultoría', 'Mantenimiento', 'Licencia Anual', 'Soporte'].map((item, i) => (
              <div key={i} className="bg-white p-4 rounded-xl border border-neutral-200 shadow-sm hover:border-black transition-colors cursor-pointer text-center group">
                <div className="w-10 h-10 mx-auto rounded-full bg-neutral-50 flex items-center justify-center mb-3 group-hover:bg-black group-hover:text-white transition-colors">
                  <Zap className="w-5 h-5" />
                </div>
                <div className="text-sm font-medium">{item}</div>
                <div className="text-xs text-neutral-400 mt-1">L 1,500.00</div>
              </div>
            ))}
          </div>
        }
      />

      {/* Feature 3: Exoneraciones */}
      <FeatureSection
        title="Manejo de Exoneraciones Fiscales."
        description="¿Tienes clientes exonerados? MANU lo maneja nativamente. Registra su número de orden de compra exenta y constancia de registro exonerado directamente en la ficha del cliente. Cumplimiento total con la SAR."
        icon={FileCheck}
        align="left"
        imageContent={
          <div className="w-full max-w-sm bg-white p-6 rounded-xl shadow-lg border border-neutral-100 space-y-4">
             <div className="flex items-center gap-2 text-green-600 mb-2">
               <FileCheck className="w-5 h-5" />
               <span className="text-sm font-bold uppercase">Cliente Exonerado</span>
             </div>
             <div>
               <label className="block text-xs font-medium text-neutral-500 mb-1">No. Orden de Compra Exenta</label>
               <div className="w-full bg-neutral-50 border border-neutral-200 rounded px-3 py-2 text-sm font-mono text-neutral-700">
                 OC-EX-2026-8892
               </div>
             </div>
             <div>
               <label className="block text-xs font-medium text-neutral-500 mb-1">Constancia Registro Exonerado</label>
               <div className="w-full bg-neutral-50 border border-neutral-200 rounded px-3 py-2 text-sm font-mono text-neutral-700">
                 CRE-9928-11
               </div>
             </div>
          </div>
        }
      />

      {/* Feature 4: Descuentos */}
      <FeatureSection
        title="Descuento 3ra y 4ta Edad."
        description="Cumple con la Ley Integral de Protección al Adulto Mayor sin cálculos manuales. Un botón dedicado aplica automáticamente los descuentos de ley correspondientes al subtotal de la factura."
        icon={HeartHandshake}
        align="right"
        imageContent={
          <div className="w-full max-w-sm flex flex-col items-center justify-center gap-6">
            <div className="w-full bg-white rounded-xl border border-neutral-200 p-4 flex items-center justify-between shadow-sm">
              <span className="text-sm font-medium">Subtotal</span>
              <span className="font-mono">L 1,000.00</span>
            </div>
            
            <motion.button 
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2 shadow-xl hover:bg-neutral-800 transition-colors"
            >
              <HeartHandshake className="w-4 h-4" />
              Aplicar Descuento 3ra Edad
            </motion.button>

            <div className="w-full bg-green-50 rounded-xl border border-green-100 p-4 flex items-center justify-between">
              <span className="text-sm font-medium text-green-700">Descuento Aplicado</span>
              <span className="font-mono text-green-700">- L 250.00</span>
            </div>
          </div>
        }
      />
    </div>
  )
}
