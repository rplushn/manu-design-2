export function Statistics() {
  const stats = [
    { value: '10,000+', label: 'Facturas procesadas' },
    { value: '500+', label: 'Negocios activos' },
    { value: '99.9%', label: 'Precisión OCR' },
    { value: '24/7', label: 'Soporte disponible' }
  ]

  return (
    <section className="border-b border-black/10">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-light text-black mb-2">{stat.value}</div>
              <div className="text-sm font-light text-neutral-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
