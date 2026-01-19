export function CTA() {
  return (
    <section className="border-b border-black/10 bg-black">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-light text-white mb-6">
            Deja de perder tiempo en Excel.
          </h2>
          <p className="text-lg font-light text-neutral-400 mb-8">
            Únete a cientos de negocios hondureños que ya gestionan sus facturas con MANU.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-black text-sm font-light border-0 hover:bg-neutral-100 transition-colors">
              Comenzar gratis
            </button>
            <button className="px-8 py-3 bg-transparent text-white text-sm font-light border border-white/30 hover:border-white/60 transition-colors">
              Agendar demo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
