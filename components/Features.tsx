export function Features() {
  const features = [
    {
      title: 'Escaneo automático',
      description: 'Captura facturas con tu cámara y extrae la información automáticamente.'
    },
    {
      title: 'Organización inteligente',
      description: 'Busca por fecha, proveedor, monto o cualquier palabra clave.'
    },
    {
      title: 'Reportes instantáneos',
      description: 'Genera reportes fiscales en segundos y exporta a Excel o PDF.'
    },
    {
      title: 'Respaldo en la nube',
      description: 'Tus documentos siempre seguros y accesibles desde cualquier dispositivo.'
    }
  ]

  return (
    <section id="funcionalidades" className="border-b border-black/10">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="mb-16">
          <h2 className="text-[42px] font-light text-black mb-4">Tu negocio y tu vida, en orden.</h2>
          <p className="text-base font-light text-neutral-600">Todo lo que necesitas para gestionar tu contabilidad</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="border-l border-black/10 pl-6">
              <h3 className="text-xl font-normal text-black mb-3">{feature.title}</h3>
              <p className="text-sm font-light text-neutral-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
