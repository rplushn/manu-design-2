export function Hero() {
  return (
    <section className="border-b border-black/10">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-light text-black tracking-tight mb-6">
            Una simple foto a tus facturas es todo lo que necesitas.
          </h1>
          <p className="text-lg font-light text-neutral-600 mb-8 leading-relaxed">
            Gestiona tu negocio y contabilidad desde tu celular. Sin papeles, sin complicaciones.
          </p>
          <div className="flex gap-4">
            <button className="px-8 py-3 bg-black text-white text-sm font-light border-0 hover:bg-black/90 transition-colors">
              Comenzar gratis
            </button>
            <button className="px-8 py-3 bg-white text-black text-sm font-light border border-black/20 hover:border-black/40 transition-colors">
              Ver demo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
