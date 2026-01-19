import { Check } from "lucide-react"

export function FeatureOCR() {
  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative mx-auto w-full max-w-[320px] lg:max-w-[360px]">
              <div className="relative rounded-[3rem] border-[8px] border-neutral-900 bg-neutral-900 overflow-hidden shadow-2xl rotate-6 hover:rotate-0 transition-all duration-700 ease-out">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg"
                  alt="OCR Scanning interface"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-neutral-100 to-neutral-50 rounded-full blur-3xl opacity-50" />
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <span className="text-sm font-semibold tracking-widest text-neutral-500 uppercase mb-4 block">
              CONTROL DE GASTOS
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold text-neutral-900 mb-6 leading-tight">
              Adiós a las facturas perdidas.
            </h2>
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              El motor OCR de MANU lee cada detalle de tus facturas físicas. Olvídate de digitar manualmente.
            </p>
            
            <ul className="space-y-4">
              {[
                "Reconocimiento inteligente de texto",
                "Búsqueda por proveedor, fecha o monto",
                "Historial seguro por meses",
                "Detección automática de duplicados"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-neutral-700">
                  <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
