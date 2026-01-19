export function Benefits() {
  const benefits = [
    {
      title: 'Ahorra tiempo',
      description: 'Deja de perder horas organizando papeles. MANU lo hace en segundos.',
      impact: '10hrs/mes ahorradas'
    },
    {
      title: 'Reduce errores',
      description: 'Elimina errores de transcripción manual con OCR de precisión profesional.',
      impact: '99.9% precisión'
    },
    {
      title: 'Cumple con SAR',
      description: 'Genera reportes fiscales completos listos para presentar.',
      impact: 'Formato aprobado'
    }
  ]

  return (
    <section className="border-b border-black/10 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="mb-16">
          <h2 className="text-3xl font-light text-black mb-4">Tres funciones. Bien hechas.</h2>
        </div>
        
        <div className="space-y-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-black/10 pt-12 first:border-0 first:pt-0">
              <div>
                <h3 className="text-xl font-normal text-black">{benefit.title}</h3>
              </div>
              <div>
                <p className="text-sm font-light text-neutral-600 leading-relaxed">{benefit.description}</p>
              </div>
              <div>
                <div className="text-2xl font-light text-black">{benefit.impact}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
