export function Integrations() {
  const integrations = [
    'Excel / Google Sheets',
    'WhatsApp',
    'Dropbox',
    'Google Drive',
    'Email',
    'API REST'
  ]

  return (
    <section className="border-b border-black/10 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="mb-16">
          <h2 className="text-3xl font-light text-black mb-4">Conecta con tus herramientas.</h2>
          <p className="text-base font-light text-neutral-600">Integración perfecta con las apps que ya usas</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {integrations.map((integration, index) => (
            <div 
              key={index} 
              className="border border-black/10 bg-white p-6 flex items-center justify-center text-center"
            >
              <span className="text-sm font-light text-black">{integration}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
