import { Navbar } from './components/landing/Navbar'
import { Hero } from './components/landing/Hero'
import { LogoCloud } from './components/landing/LogoCloud'
import { Problem } from './components/landing/Problem'
import { CritiqueCurrentWay } from './components/landing/CritiqueCurrentWay'
import { CritiqueCompetitors } from './components/landing/CritiqueCompetitors'
import { CostOfInaction } from './components/landing/CostOfInaction'
import { SolutionSteps } from './components/landing/SolutionSteps'
import { Testimonials } from './components/landing/Testimonials'
import { UrgencyCTA } from './components/landing/UrgencyCTA'
import { SkepticCTA } from './components/landing/SkepticCTA'
import { Footer } from './components/landing/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <LogoCloud />
      <Problem />
      <CritiqueCurrentWay />
      <CritiqueCompetitors />
      <CostOfInaction />
      <SolutionSteps />
      <Testimonials />
      <UrgencyCTA />
      <SkepticCTA />
      <Footer />
    </main>
  )
}
