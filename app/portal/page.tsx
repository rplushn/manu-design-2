import { Header } from "@/components/Header"
import { Footer15 } from "@/components/Footer15"
import PortalHero from "@/components/PortalHero"
import { ImageLightbox } from "@/components/ui/ImageLightbox"
import { Check } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portal Web - MANU",
  description: "Gestiona inventarios masivos y reportes avanzados desde el nuevo Portal Web de MANU.",
}

export default function PortalPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900 selection:bg-neutral-100">
      <Header />
      
      <main>
        <PortalHero />

        {/* --- SECCIÓN 1: INVENTARIO WEB --- */}
        <section id="inventario-portal" className="py-32 bg-white overflow-hidden">
          <div className="container max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Texto Izquierda */}
              <div className="order-2 lg:order-1">
                <span className="text-sm font-semibold tracking-widest text-neutral-500 uppercase mb-4 block">
                  INVENTARIO WEB
                </span>
                <h2 className="text-4xl md:text-5xl font-semibold text-neutral-900 mb-6 leading-tight">
                  Inventario masivo, <br /> sin fricción.
                </h2>
                <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                  Olvídate de editar productos uno por uno en el celular. Desde el portal web podrás importar y exportar miles de productos vía Excel en segundos, actualizar precios en lote y gestionar múltiples bodegas con comodidad total.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-100 border border-neutral-200 text-sm font-medium text-neutral-800">
                  <Check className="w-4 h-4 text-black" />
                  Importa y exporta miles de productos en segundos
                </div>
              </div>

              {/* Imagen Derecha */}
              <div className="order-1 lg:order-2 bg-neutral-50 border border-neutral-100 p-2 shadow-2xl shadow-neutral-200/50">
                <ImageLightbox
                  thumbnailSrc="/Inventario-Portal.png"
                  fullSrc="/Inventario-Portal.png"
                  alt="Panel de inventario del portal web Manu"
                />
              </div>
            </div>
          </div>
        </section>

        {/* --- SECCIÓN 2: HISTORIAL DE INVENTARIO --- */}
        <section className="py-32 bg-neutral-50 border-y border-neutral-100 overflow-hidden">
          <div className="container max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Imagen Izquierda */}
              <div className="bg-white border border-neutral-200 p-2 shadow-2xl shadow-neutral-200/50">
                <ImageLightbox
                  thumbnailSrc="/Historial-InventarioPortal.png"
                  fullSrc="/Historial-InventarioPortal.png"
                  alt="Historial de movimientos de inventario en el portal Manu"
                />
              </div>

              {/* Texto Derecha */}
              <div>
                <span className="text-sm font-semibold tracking-widest text-neutral-500 uppercase mb-4 block">
                  AUDITORÍA TOTAL
                </span>
                <h2 className="text-4xl md:text-5xl font-semibold text-neutral-900 mb-6 leading-tight">
                  Historial de inventario en tiempo real.
                </h2>
                <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                  Mantén el control absoluto. El portal te permite rastrear cada movimiento: quién ajustó el stock, cuándo se eliminó un producto o qué venta descontó mercadería. Todo queda registrado.
                </p>
                
                <ul className="space-y-4">
                  {[
                    "Ver quién hizo cada ajuste (usuario y hora)",
                    "Rastrear productos borrados y correcciones",
                    "Preparar reportes detallados para socios",
                    "Filtrar por fecha, producto o tipo de movimiento"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-neutral-700 font-medium">
                      <div className="w-5 h-5 bg-black flex items-center justify-center shrink-0">
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

        {/* --- SECCIÓN 3: DASHBOARD / REPORTES --- */}
        <section className="py-32 bg-white overflow-hidden">
          <div className="container max-w-5xl mx-auto px-6 text-center">
            <div className="mb-16">
              <span className="text-sm font-semibold tracking-widest text-neutral-500 uppercase mb-4 block">
                INTELIGENCIA DE NEGOCIOS
              </span>
              <h2 className="text-4xl md:text-5xl font-semibold text-neutral-900 mb-6 leading-tight">
                Reportes que tu contador va a amar.
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
                Visualiza el rendimiento de tu negocio como nunca antes. Análisis de ventas por categoría, proyecciones de cierre de mes, alertas de impuestos y métricas clave en una sola pantalla.
              </p>
            </div>

            <div className="bg-neutral-50 border border-neutral-100 p-2 shadow-2xl shadow-neutral-200/50 inline-block">
              <ImageLightbox
                thumbnailSrc="/Historial-ManuPortal.png"
                fullSrc="/Historial-ManuPortal.png"
                alt="Dashboard corporativo de MANU"
              />
            </div>
          </div>
        </section>

        {/* --- CTA FINAL --- */}
        <section className="py-24 bg-black text-white text-center">
          <div className="container max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              ¿Listo para escalar tu negocio?
            </h2>
            <p className="text-xl text-neutral-400 mb-10 max-w-2xl mx-auto">
              El portal web estará disponible para todos los usuarios del plan Profesional y Empresa a partir de Febrero 2026.
            </p>
            <Link 
              href="/contacto"
              className="inline-block rounded-none bg-white text-black hover:bg-neutral-200 text-lg px-12 py-8 h-auto font-semibold transition-colors"
            >
              Solicitar acceso anticipado
            </Link>
          </div>
        </section>
      </main>

      <Footer15 />
    </div>
  )
}
