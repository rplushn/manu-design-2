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
    <section className="border-b border-black/10">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="mb-16">
          <h2 className="text-3xl font-light text-black mb-4">Lo que dicen nuestros usuarios.</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index}>
              <p className="text-base font-light text-black mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-black/10 pt-4">
                <div className="text-sm font-normal text-black">{testimonial.author}</div>
                <div className="text-xs font-light text-neutral-600">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
