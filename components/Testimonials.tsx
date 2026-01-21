"use client"

import { motion } from "framer-motion"

export function Testimonials() {
  const testimonials = [
    {
      quote: 'Antes perdía horas buscando facturas. Ahora todo está en mi celular, organizado automáticamente.',
      author: 'María González',
      role: 'Dueña, Cafetería Central'
    },
    {
      quote: 'Mi contador me lo agradeció. Los reportes que genera MANU son exactamente lo que necesita.',
      author: 'Carlos Mejía',
      role: 'Arquitecto independiente'
    },
    {
      quote: 'La mejor inversión para mi negocio. Me ahorro un empleado solo en organización de documentos.',
      author: 'Ana Rodríguez',
      role: 'Ferretería El Progreso'
    }
  ]

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="border-b border-black/10"
    >
      <div className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-neutral-900 mb-6 leading-tight">Lo que dicen nuestros usuarios.</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="transition-shadow duration-200 hover:shadow-lg"
            >
              <p className="text-base font-light text-black mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-black/10 pt-4">
                <div className="text-sm font-normal text-black">{testimonial.author}</div>
                <div className="text-xs font-light text-neutral-600">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
