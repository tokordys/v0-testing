import Hero from "./components/Hero"
import Features from "./components/Features"
import Stats from "./components/Stats"
import HowItWorks from "./components/HowItWorks"
import Testimonials from "./components/Testimonials"
import Cta from "./components/Cta"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Cta />
      <Footer />
    </div>
  )
}

