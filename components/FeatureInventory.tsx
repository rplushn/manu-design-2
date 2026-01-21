"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { ArrowRight } from "lucide-react"

export function FeatureInventory() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, -20])

  return (
    <section ref={ref} className="bg-[#111111] py-32 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-semibold tracking-widest text-neutral-400 uppercase mb-4 block">
              INVENTARIO EN TIEMPO REAL
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight">
              Tu inventario se actualiza solo.
            </h2>
            <p className="text-lg text-neutral-400 mb-8 leading-relaxed">
              Conecta tus ventas y compras en un solo flujo. Al facturar, el producto se descuenta. Al escanear una compra, se suma. Así de simple.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="bg-white/5 border border-white/10 p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold text-white mb-1">100%</div>
                <div className="text-sm text-neutral-400">Automatizado</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold text-white mb-1">0</div>
                <div className="text-sm text-neutral-400">Errores manuales</div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 text-white border-b border-white pb-1 hover:opacity-80 transition-opacity"
            >
              Ver demo de inventario <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            style={{ y }}
            className="relative mx-auto w-[12.5rem] sm:w-[18.75rem]"
          >
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/hero108/iphone.png"
              alt="iPhone frame"
              className="relative z-20 block w-full"
            />
            {/* Pantalla del iPhone con imagen */}
            <div
              className="
                absolute
                top-[2.5%]
                left-[4.5%]
                right-[5%]
                bottom-[6%]
                z-10
                rounded-[2.4rem]
                overflow-hidden
                bg-black
              "
            >
              <img
                src="/inventario.png"
                alt="Pantalla Inventario MANU"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
