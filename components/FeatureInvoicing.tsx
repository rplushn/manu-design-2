export function FeatureInvoicing() {
  return (
    <section className="bg-neutral-50 py-24">
      <div className="max-w-6xl mx-auto px-6 text-center mb-16">
        <span className="text-sm font-semibold tracking-widest text-neutral-500 uppercase mb-4 block">
          FACTURACIÓN PROFESIONAL
        </span>
        <h2 className="text-4xl md:text-5xl font-semibold text-neutral-900 mb-6">
          Factura en segundos, comparte al instante.
        </h2>
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
          Cumple con todos los requisitos del SAR. Personaliza con tu logo, genera el correlativo CAI y envía por el canal que prefieras.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-center items-end gap-8 md:gap-4">
          
          {/* Phone 1: Create */}
          <div className="w-64 translate-y-12 md:translate-y-0 opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-500">
             <div className="rounded-[2.5rem] border-[6px] border-neutral-200 bg-white overflow-hidden shadow-xl">
                <img src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-2.svg" alt="Create Invoice" className="w-full" />
             </div>
             <p className="text-center mt-6 font-medium text-neutral-900">1. Crea</p>
          </div>

          {/* Phone 2: Main (Center, Larger) */}
          <div className="w-72 z-10 shadow-2xl rounded-[3rem]">
             <div className="rounded-[3rem] border-[8px] border-neutral-900 bg-neutral-900 overflow-hidden shadow-2xl">
                <img src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg" alt="Invoice Preview" className="w-full" />
             </div>
             <p className="text-center mt-6 font-bold text-lg text-neutral-900">2. Personaliza</p>
          </div>

          {/* Phone 3: Share */}
          <div className="w-64 translate-y-12 md:translate-y-0 opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-500">
             <div className="rounded-[2.5rem] border-[6px] border-neutral-200 bg-white overflow-hidden shadow-xl">
                <img src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-3.svg" alt="Share Invoice" className="w-full" />
             </div>
             <p className="text-center mt-6 font-medium text-neutral-900">3. Comparte</p>
          </div>

        </div>
      </div>
    </section>
  )
}
