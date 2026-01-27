"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function Pricing() {
  const plans = [
    {
      name: 'Gratis',
      price: 'L 0',
      period: '/mes',
      features: [
        'Hasta 50 facturas/mes',
        'Escaneo OCR básico',
        'Exportar a Excel',
        'Soporte por email'
      ],
      whatsappMessage: 'Hola Manu, quiero comenzar con el plan Gratis'
    },
    {
      name: 'Profesional',
      price: 'L 1,899',
      period: '/mes',
      features: [
        'Facturas ilimitadas',
        'OCR avanzado',
        'Todas las integraciones',
        'Soporte prioritario',
        'API access'
      ],
      featured: true,
      whatsappMessage: 'Hola Manu, quiero comenzar con el plan Profesional'
    },
    {
      name: 'Empresa',
      price: 'Contactar',
      period: '',
      features: [
        'Todo en Profesional',
        'Múltiples usuarios',
        'Soporte dedicado',
        'Capacitación incluida'
      ],
      whatsappMessage: 'Hola Manu, quiero información sobre el plan Empresa'
    }
  ]

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="border-b border-black/10 bg-neutral-50"
    >
      <div className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-neutral-900 mb-6 leading-tight">Facturación Profesional</h2>
          <p className="text-lg text-neutral-600 leading-relaxed">Empieza gratis. Actualiza cuando crezcas.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`border border-black/10 bg-white p-8 transition-shadow duration-200 hover:shadow-lg hover:bg-neutral-50 ${
                plan.featured ? 'ring-2 ring-black' : ''
              }`}
            >
              <div className="mb-8">
                <h3 className="text-lg font-normal text-black mb-4">{plan.name}</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-light text-black">{plan.price}</span>
                  <span className="text-sm font-light text-neutral-600 ml-2">{plan.period}</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-sm font-light text-neutral-600 flex items-start">
                    <span className="mr-2">—</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  href={`https://web.whatsapp.com/send?phone=50489502917&text=${encodeURIComponent(plan.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 text-sm font-light border-0 transition-colors inline-block text-center ${
                    plan.featured 
                      ? 'bg-black text-white hover:bg-black/90' 
                      : 'bg-white text-black border border-black/20 hover:border-black/40'
                  }`}
                >
                  {plan.price === 'Contactar' ? 'Hablar con ventas' : 'Comenzar'}
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
