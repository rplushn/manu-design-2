import { Hero91 } from '@/components/Hero91'
import { FeatureOCR } from '@/components/FeatureOCR'
import { FeatureInventory } from '@/components/FeatureInventory'
import { FeatureInvoicing } from '@/components/FeatureInvoicing'
import { UseCases } from '@/components/UseCases'
import { Testimonials } from '@/components/Testimonials'
import { Pricing } from '@/components/Pricing'
import { FAQ } from '@/components/FAQ'
import { CTA } from '@/components/CTA'
import { Footer15 } from '@/components/Footer15' // ← Importamos el footer

export default function HomePage() {
  return (
    <main className="bg-white">
      <Hero91 />
      <FeatureOCR />
      <FeatureInventory />
      <FeatureInvoicing />
      <UseCases />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer15 /> {/* ← Lo renderizamos aquí */}
    </main>
  )
}
