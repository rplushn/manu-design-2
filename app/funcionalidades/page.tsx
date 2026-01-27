import { Header } from "@/components/Header"
import Footer15 from "@/components/Footer15"
import { Features } from "@/components/Features"
import { FeatureOCR } from "@/components/FeatureOCR"
import { FeatureInventory } from "@/components/FeatureInventory"
import { HowItWorks } from "@/components/HowItWorks"
import { Statistics } from "@/components/Statistics"

export default function FuncionalidadesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-20">
        <section className="py-16 bg-gradient-to-b from-[#d9d9d9] via-[#d9d9d9] to-white">
          <div className="max-w-4xl mx-auto px-6">
            <span className="text-sm font-semibold tracking-[0.25em] text-neutral-500 uppercase">
              Funcionalidades
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-semibold text-black">
              Todo lo que necesitas para controlar tu negocio.
            </h1>
            <p className="mt-4 text-lg text-neutral-600">
              Facturación, inventario y control de gastos en una sola app, diseñada para PYMES en Honduras.
            </p>
          </div>
        </section>

        <Features />
        <FeatureOCR />
        <FeatureInventory />
        <HowItWorks />
        <Statistics />
      </main>

      <Footer15 />
    </div>
  )
}
