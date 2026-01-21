"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Check } from "lucide-react"

export function FeatureOCR() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, -20])

  return (
    <section id="funcionalidades" className="bg-white py-24 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Mockup celular */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            style={{ y }}
            className="order-2 lg:order-1"
          >
            <div className="relative mx-auto w-[12.5rem] sm:w-[18.75rem]">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/hero108/iphone.png"
                alt="iPhone frame"
                className="relative z-20 block w-full"
              />

              {/* Pantalla del iPhone con video */}
              <div
                className="
                  absolute
                  top-[1.5%]
                  left-[5%]
                  right-[5%]
                  bottom-[4%]
                  z-10
                  rounded-[2.4rem]
                  overflow-hidden
                  bg-black
                "
              >
                <video
                  src="/Historial-video.MP4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-2"
          >
            <span className="text-sm font-semibold tracking-widest text-neutral-500 uppercase mb-4 block">
              CONTROL DE GASTOS
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold text-neutral-900 mb-6 leading-tight">
              Adiós a las facturas perdidas.
            </h2>
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              El motor OCR de MANU lee cada detalle de tus facturas físicas. Olvídate de digitar manualmente.
            </p>

            <ul className="space-y-4">
              {[
                "Reconocimiento inteligente de texto",
                "Búsqueda por proveedor, fecha o monto",
                "Historial seguro por meses",
                "Detección automática de duplicados",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-3 text-neutral-700"
                >
                  <div className="w-6 h-6 bg-black flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
