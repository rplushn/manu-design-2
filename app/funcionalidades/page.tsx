import { Header } from "@/components/Header"
import Footer15 from "@/components/Footer15"
import { Features } from "@/components/Features"
import { FeatureOCR } from "@/components/FeatureOCR"
import { FeatureInventory } from "@/components/FeatureInventory"
import { HowItWorks } from "@/components/HowItWorks"
import { Statistics } from "@/components/Statistics"
import { HeroInvoicingCAI } from "@/components/features-cai/HeroInvoicingCAI"
import { InvoicingFeatures } from "@/components/features-cai/InvoicingFeatures"

export default function FuncionalidadesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <HeroInvoicingCAI />
        <InvoicingFeatures />

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
