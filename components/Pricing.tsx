"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import Link from "next/link"

interface Feature {
  text: string;
  dim?: boolean;
  bold?: boolean;
}

interface Plan {
  name: string;
  tagline: string;
  price: string;
  period: string;
  buttonText: string;
  features: Feature[];
  tag?: string;
  highlighted?: boolean;
  whatsappMessage: string;
}

export function Pricing() {
  const plans: Plan[] = [
    {
      name: 'Gratis',
      tagline: 'Para comenzar tu negocio',
      price: 'Gratis',
      period: '',
      buttonText: 'Comenzar gratis',
      whatsappMessage: 'Hola Manu, quiero comenzar con el Plan Gratis.',
      features: [
        { text: '10 Facturas / mes' },
        { text: '10 Clientes activos' },
        { text: '20 Productos en inventario' },
        { text: '100 Gastos / mes (registro manual)' },
        { text: 'Sin respaldo de fotos en nube', dim: true }
      ]
    },
    {
      name: 'Plan Básico',
      tag: 'Popular',
      tagline: 'Para pequeños negocios',
      price: 'L 350.00',
      period: '/mes',
      buttonText: 'Suscribirme ahora',
      highlighted: false,
      whatsappMessage: 'Hola Manu, me interesa el Plan Básico de L 350.',
      features: [
        { text: '80 Facturas / mes' },
        { text: '80 Clientes activos' },
        { text: '200 Productos en inventario' },
        { text: '200 Gastos / mes con Escaneo (OCR)' },
        { text: 'Facturación con CAI y correlativo oficial SAR' },
        { text: 'Soporte para exoneraciones y descuentos (3ra y 4ta edad)' },
        { text: 'Respaldo de fotos de facturas (Historial)', bold: true },
        { text: 'Sin acceso a Portal Web', dim: true }
      ]
    },
    {
      name: 'Plan Premium',
      tag: 'RECOMENDADO',
      tagline: 'Para negocios en crecimiento',
      price: 'L 699.00',
      period: '/mes',
      buttonText: 'Suscribirme ahora',
      highlighted: true, 
      whatsappMessage: 'Hola Manu, quiero suscribirme al Plan Premium de L 699.',
      features: [
        { text: '500 Facturas / mes' },
        { text: '300 Clientes activos' },
        { text: '1,000 Productos en inventario' },
        { text: 'Inventario real con control de stock' },
        { text: '300 Gastos / mes con Escaneo (OCR)' },
        { text: 'Facturación con CAI y correlativo oficial SAR' },
        { text: 'Soporte para exoneraciones y descuentos (3ra y 4ta edad)' },
        { text: 'Respaldo de fotos de facturas (Historial)', bold: true },
        { text: 'Full acceso a Portal Web con historial de movimientos de inventario' },
        { text: 'Importación y exportación de inventario en Excel' }
      ]
    }
  ]

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
      className="border-b border-neutral-100 bg-white"
    >
      <div className="max-w-6xl mx-auto px-6 py-20 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-light text-black mb-6 leading-tight">Planes y Precios</h2>
          <p className="text-xl text-neutral-500 font-light leading-relaxed">Elige el plan que mejor se adapte a tu negocio.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`flex flex-col border p-8 bg-white relative ${
                plan.highlighted ? 'border-black shadow-xl' : 'border-neutral-200'
              }`}
            >
              {plan.tag && (
                <div className={`absolute top-0 left-0 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest ${
                  plan.tag === 'RECOMENDADO' ? 'bg-black text-white' : 'bg-neutral-100 text-neutral-600'
                }`}>
                  {plan.tag}
                </div>
              )}

              <div className="mb-8 mt-4">
                <h3 className="text-2xl font-semibold text-black mb-2">{plan.name}</h3>
                <p className="text-sm text-neutral-500 mb-6 font-light">{plan.tagline}</p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-black tracking-tight">{plan.price}</span>
                  <span className="text-base font-light text-neutral-500 ml-1">{plan.period}</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className={`text-sm flex items-start ${feature.dim ? 'text-neutral-400' : 'text-neutral-600'}`}>
                    <Check className={`w-4 h-4 mr-3 shrink-0 ${feature.dim ? 'text-neutral-300' : 'text-black'}`} strokeWidth={1.5} />
                    <span className={`font-light ${feature.bold ? 'font-medium text-black' : ''}`}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
              
              <Link
                href={`https://api.whatsapp.com/send?phone=50489502917&text=${encodeURIComponent(plan.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 text-sm font-medium transition-colors ${
                    plan.highlighted 
                      ? 'bg-black text-white hover:bg-neutral-800' 
                      : 'bg-white text-black border border-black hover:bg-neutral-50'
                  }`}
                >
                  {plan.buttonText}
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
