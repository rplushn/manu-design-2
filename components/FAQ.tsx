"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: '¿Necesito experiencia contable?',
      answer: 'No. MANU está diseñado para que cualquier persona pueda gestionar sus facturas sin conocimientos técnicos.'
    },
    {
      question: '¿Mis datos están seguros?',
      answer: 'Sí. Todos los documentos se encriptan y almacenan en servidores seguros con respaldo automático.'
    },
    {
      question: '¿Funciona sin internet?',
      answer: 'Puedes escanear facturas offline. Se sincronizarán automáticamente cuando tengas conexión.'
    },
    {
      question: '¿Puedo cancelar en cualquier momento?',
      answer: 'Sí. No hay contratos ni penalizaciones. Cancela cuando quieras desde la configuración.'
    },
    {
      question: '¿Ofrecen capacitación?',
      answer: 'En el plan Empresa incluimos capacitación personalizada. Los otros planes tienen tutoriales y documentación.'
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
      <div className="max-w-4xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-neutral-900 mb-6 leading-tight">Preguntas frecuentes</h2>
        </motion.div>
        
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="border-t border-black/10 first:border-0"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between py-6 text-left hover:bg-neutral-50/50 transition-colors"
              >
                <h3 className="text-lg font-normal text-black pr-8">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  <ChevronDown className="w-5 h-5 text-neutral-600 shrink-0" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-sm font-light text-neutral-600 leading-relaxed pb-6">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
