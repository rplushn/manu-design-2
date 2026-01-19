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
      ]
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
      featured: true
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
      ]
    }
  ]

  return (
    <section className="border-b border-black/10 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-light text-black mb-4">Facturación Profesional</h2>
          <p className="text-base font-light text-neutral-600">Empieza gratis. Actualiza cuando crezcas.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`border border-black/10 bg-white p-8 ${
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
              
              <button 
                className={`w-full py-3 text-sm font-light border-0 transition-colors ${
                  plan.featured 
                    ? 'bg-black text-white hover:bg-black/90' 
                    : 'bg-white text-black border border-black/20 hover:border-black/40'
                }`}
              >
                {plan.price === 'Contactar' ? 'Hablar con ventas' : 'Comenzar'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
