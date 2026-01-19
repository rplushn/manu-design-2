export function FAQ() {
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
    <section className="border-b border-black/10">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="mb-16">
          <h2 className="text-3xl font-light text-black mb-4">Preguntas frecuentes</h2>
        </div>
        
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="border-t border-black/10 pt-8 first:border-0 first:pt-0">
              <h3 className="text-lg font-normal text-black mb-3">{faq.question}</h3>
              <p className="text-sm font-light text-neutral-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
