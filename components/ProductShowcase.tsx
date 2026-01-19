export function ProductShowcase() {
  return (
    <section className="border-b border-black/10 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-light text-black mb-6">La magia de escanear y olvidar.</h2>
            <div className="space-y-6">
              <div className="border-l border-black/10 pl-6">
                <h3 className="text-base font-normal text-black mb-2">OCR inteligente</h3>
                <p className="text-sm font-light text-neutral-600">Reconocimiento automático de texto en facturas físicas y digitales.</p>
              </div>
              <div className="border-l border-black/10 pl-6">
                <h3 className="text-base font-normal text-black mb-2">Categorías automáticas</h3>
                <p className="text-sm font-light text-neutral-600">Clasifica tus gastos sin esfuerzo con inteligencia artificial.</p>
              </div>
              <div className="border-l border-black/10 pl-6">
                <h3 className="text-base font-normal text-black mb-2">Exportar reportes</h3>
                <p className="text-sm font-light text-neutral-600">Genera reportes fiscales en formato Excel o PDF instantáneamente.</p>
              </div>
            </div>
          </div>
          <div className="bg-neutral-200 aspect-[3/4] flex items-center justify-center">
            <span className="text-sm font-light text-neutral-500">App Screenshot</span>
          </div>
        </div>
      </div>
    </section>
  )
}
