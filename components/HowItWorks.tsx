export function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Descarga la app',
      description: 'Disponible para iOS y Android. Instalación en menos de un minuto.'
    },
    {
      number: '02',
      title: 'Escanea tu primera factura',
      description: 'Toma una foto a cualquier factura o recibo. MANU hace el resto.'
    },
    {
      number: '03',
      title: 'Deja que MANU trabaje',
      description: 'Organiza automáticamente por categorías y genera reportes fiscales.'
    }
  ]

  return (
    <section className="border-b border-black/10">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="mb-16">
          <h2 className="text-[42px] font-light text-black mb-4">Empieza a facturar en 3 pasos.</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index}>
              <div className="text-6xl font-light text-neutral-300 mb-4">{step.number}</div>
              <h3 className="text-xl font-normal text-black mb-3">{step.title}</h3>
              <p className="text-sm font-light text-neutral-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
