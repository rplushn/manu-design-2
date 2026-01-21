"use client"

import { motion } from "framer-motion"

export function UseCases() {
  const cases = [
    {
      type: 'Pequeños negocios',
      description: 'Gestiona facturas de proveedores, clientes y gastos operativos desde un solo lugar.',
      users: '300+ negocios'
    },
    {
      type: 'Profesionales independientes',
      description: 'Mantén tu contabilidad al día sin contratar un contador de tiempo completo.',
      users: '150+ usuarios'
    },
    {
      type: 'Empresas medianas',
      description: 'Control centralizado de gastos para múltiples departamentos y proyectos.',
      users: '50+ empresas'
    }
  ]

  return (
    <motion.section
      id="quienes-somos"
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
          <h2 className="text-4xl md:text-5xl font-semibold text-neutral-900 mb-6 leading-tight">Hecho para Honduras.</h2>
          <p className="text-lg text-neutral-600 leading-relaxed">Adaptado a las necesidades fiscales locales</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="border border-black/10 p-8 transition-shadow duration-200 hover:shadow-lg hover:bg-neutral-50 cursor-default"
            >
              <div className="text-xs font-light text-neutral-500 mb-4">{useCase.users}</div>
              <h3 className="text-xl font-normal text-black mb-4">{useCase.type}</h3>
              <p className="text-sm font-light text-neutral-600 leading-relaxed">{useCase.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
