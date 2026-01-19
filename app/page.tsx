import { Hero91 } from '@/components/Hero91'
import { Features } from '@/components/Features'
import { ProductShowcase } from '@/components/ProductShowcase'
import { Statistics } from '@/components/Statistics'
import { HowItWorks } from '@/components/HowItWorks'
import { Benefits } from '@/components/Benefits'
import { UseCases } from '@/components/UseCases'
import { Integrations } from '@/components/Integrations'
import { Testimonials } from '@/components/Testimonials'
import { Pricing } from '@/components/Pricing'
import { FAQ } from '@/components/FAQ'
import { CTA } from '@/components/CTA'

export default function HomePage() {
  return (
    <main className="bg-white">
      <Hero91 />
      <Features />
      <ProductShowcase />
      <Statistics />
      <HowItWorks />
      <Benefits />
      <UseCases />
      <Integrations />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
    </main>
  )
}
