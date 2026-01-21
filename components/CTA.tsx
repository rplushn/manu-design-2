"use client"

import { motion } from "framer-motion"

export function CTA() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      id="contacto"
      className="border-b border-black/10 bg-black"
    >
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-light text-white mb-6"
          >
            Deja de perder tiempo en Excel.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg font-light text-neutral-400 mb-8"
          >
            Únete a cientos de negocios hondureños que ya gestionan sus facturas con MANU.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3 bg-white text-black text-sm font-light border-0 hover:bg-neutral-100 transition-colors relative overflow-hidden group"
            >
              <span className="relative z-10">Comenzar gratis</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1200" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3 bg-transparent text-white text-sm font-light border border-white/30 hover:border-white/60 transition-colors"
            >
              Agendar demo
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
