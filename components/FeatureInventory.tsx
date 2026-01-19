import { ArrowRight } from "lucide-react"

export function FeatureInventory() {
  return (
    <section className="bg-[#111111] py-32 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-sm font-semibold tracking-widest text-neutral-400 uppercase mb-4 block">
              INVENTARIO EN TIEMPO REAL
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight">
              Tu inventario se actualiza solo.
            </h2>
            <p className="text-lg text-neutral-400 mb-8 leading-relaxed">
              Conecta tus ventas y compras en un solo flujo. Al facturar, el producto se descuenta. Al escanear una compra, se suma. Así de simple.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                <div className="text-3xl font-bold text-white mb-1">100%</div>
                <div className="text-sm text-neutral-400">Automatizado</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                <div className="text-3xl font-bold text-white mb-1">0</div>
                <div className="text-sm text-neutral-400">Errores manuales</div>
              </div>
            </div>

            <button className="flex items-center gap-2 text-white border-b border-white pb-1 hover:opacity-80 transition-opacity">
              Ver demo de inventario <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="relative mx-auto w-full max-w-[340px]">
            {/* Phone Mockup Tilted */}
            <div className="relative rounded-[3rem] border-[8px] border-[#222] bg-[#222] overflow-hidden shadow-2xl -rotate-3 hover:rotate-0 transition-all duration-700 ease-out z-10">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-4.svg"
                alt="Inventory Dashboard"
                className="w-full h-auto object-cover opacity-90"
              />
            </div>
            
            {/* Background decorative blurry blobs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-[100px]" />
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-purple-500/10 rounded-full blur-[80px]" />
          </div>
        </div>
      </div>
    </section>
  )
}
