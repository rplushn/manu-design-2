import { Check } from "lucide-react"

export function FeatureOCR() {
  return (
    <section id="funcionalidades" className="bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Mockup celular */}
          <div className="order-2 lg:order-1">
            <div className="relative mx-auto w-[12.5rem] sm:w-[18.75rem]">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/hero108/iphone.png"
                alt="iPhone frame"
                className="relative z-20 block w-full"
              />

              {/* Pantalla del iPhone con video */}
              <div
                className="
                  absolute
                  top-[1.5%]
                  left-[5%]
                  right-[5%]
                  bottom-[4%]
                  z-10
                  rounded-[2.4rem]
                  overflow-hidden
                  bg-black
                "
              >
                <video
                  src="/Historial-video.MP4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Texto */}
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
                "Detección automática de duplicados",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-neutral-700">
                  <div className="w-6 h-6 bg-black flex items-center justify-center shrink-0">
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
