import { Header } from "@/components/Header"
import { Footer15 } from "@/components/Footer15"
import { HeroClient } from "@/components/help/HeroClient"
import { FloatingWhatsApp } from "@/components/help/FloatingWhatsApp"
import { 
  BookOpen, 
  FileText, 
  Settings, 
  BarChart3, 
  Layers, 
  ChevronRight, 
  Search,
  Package,
  Receipt,
  Zap
} from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: 'Centro de Ayuda - MANU',
  description: 'Encuentra guías, tutoriales y soporte personalizado para tu negocio con MANU.',
}

export default function AyudaPage() {
  const whatsappUrl = "https://wa.me/50489502917?text=Hola%20Manu%2C%20necesito%20ayuda%20con%20mi%20cuenta."

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900 selection:bg-neutral-100">
      <Header />

      <main className="relative pt-16">
        
        {/* --- HERO SECTION --- */}
        <HeroClient whatsappUrl={whatsappUrl} />

        {/* --- PRIMEROS PASOS (Tutoriales) --- */}
        <section className="py-20 bg-neutral-50/50 border-t border-neutral-100">
          <div className="container max-w-6xl mx-auto px-6">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl font-semibold text-black flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-neutral-400" />
                Primeros pasos
              </h2>
              <Link href="#" className="text-sm font-medium text-neutral-500 hover:text-black transition-colors">
                Ver todo →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Empezar con Inventario",
                  desc: "Aprende a cargar tus productos y gestionar el stock.",
                  icon: Package,
                },
                {
                  title: "Crea tu primer presupuesto",
                  desc: "Genera cotizaciones profesionales en segundos.",
                  icon: Receipt,
                },
                {
                  title: "Conecta QuickBooks",
                  desc: "Sincroniza tu contabilidad automáticamente.",
                  icon: Zap,
                },
              ].map((item, i) => {
                const IconComponent = item.icon
                return (
                  <div 
                    key={i} 
                    className="group bg-white p-6 rounded-none border border-neutral-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="mb-4">
                      <IconComponent className="h-6 w-6 text-neutral-800" />
                    </div>
                    <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-neutral-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-neutral-500 text-sm mb-4 leading-relaxed">
                      {item.desc}
                    </p>
                    <Link 
                      href="#" 
                      className="inline-flex items-center text-sm font-medium text-black hover:text-neutral-600 transition-colors"
                    >
                      Ver guía <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* --- AYUDA POR TEMA --- */}
        <section className="py-20 bg-white">
          <div className="container max-w-5xl mx-auto px-6">
            <h2 className="text-2xl font-semibold text-black mb-10 text-center">
              Ayuda por tema
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { icon: Layers, label: "Inventario" },
                { icon: BarChart3, label: "Reportes" },
                { icon: Settings, label: "Integraciones" },
                { icon: FileText, label: "Facturación" },
                { icon: Search, label: "Búsqueda Avanzada" },
                { icon: Settings, label: "Perfil y suscripción" },
              ].map((topic, i) => (
                <Link 
                  key={i} 
                  href="#" 
                  className="flex items-center p-4 rounded-none border border-neutral-100 hover:border-black/10 hover:bg-neutral-50 transition-colors group"
                >
                  <topic.icon className="h-5 w-5 text-neutral-400 mr-3 group-hover:text-black transition-colors" />
                  <span className="text-base font-medium text-neutral-700 group-hover:text-black">
                    {topic.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer15 />

      {/* --- FLOATING WHATSAPP BUTTON --- */}
      <FloatingWhatsApp whatsappUrl={whatsappUrl} />
    </div>
  )
}
