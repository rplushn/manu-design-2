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
    <section id="quienes-somos" className="border-b border-black/10">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="mb-16">
          <h2 className="text-3xl font-light text-black mb-4">Hecho para Honduras.</h2>
          <p className="text-base font-light text-neutral-600">Adaptado a las necesidades fiscales locales</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((useCase, index) => (
            <div key={index} className="border border-black/10 p-8">
              <div className="text-xs font-light text-neutral-500 mb-4">{useCase.users}</div>
              <h3 className="text-xl font-normal text-black mb-4">{useCase.type}</h3>
              <p className="text-sm font-light text-neutral-600 leading-relaxed">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
