"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function PortalTeaser() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="bg-white py-24 border-b border-black/10"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <span className="inline-block py-1 px-3 border border-black/10 bg-neutral-50 text-xs font-bold tracking-[0.2em] uppercase mb-6 text-neutral-600">
              PRÓXIMAMENTE · FEBRERO 2026
            </span>
            
            <h2 className="text-4xl md:text-5xl font-semibold text-neutral-900 mb-6 leading-tight">
              Pronto también en la web.
            </h2>
            
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              Muy pronto tendrás un portal web ultra moderno para controlar inventarios masivos, facturación electrónica y reportes avanzados desde tu navegador.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Dashboard en tiempo real para tus gastos e ingresos.",
                "Importa y exporta miles de productos para inventario.",
                "Reportes listos para tu contador y socios."
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-neutral-700">
                  <div className="w-5 h-5 bg-black flex items-center justify-center shrink-0 rounded-full">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <Button 
              asChild 
              variant="outline"
              className="rounded-none border-black/20 text-black hover:bg-neutral-50 text-base px-8 py-6 h-auto"
            >
              <Link href="/portal">
                Ver portal en detalle
              </Link>
            </Button>
          </motion.div>

          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="order-1 lg:order-2"
          >
            <div className="relative bg-neutral-50 border border-neutral-100 p-2 shadow-xl shadow-neutral-200/50 transform hover:-translate-y-2 transition-transform duration-500">
              <Image 
                src="/Dashboard-Panel-Portal.png"
                alt="Portal Web MANU"
                width={800}
                height={600}
                className="w-full h-auto block"
                unoptimized
              />
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  )
}
