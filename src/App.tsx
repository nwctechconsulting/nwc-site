import { About } from '@/components/About'
import { CaseStudies } from '@/components/CaseStudies'
import { Contact } from '@/components/Contact'
import { CtaBand } from '@/components/CtaBand'
import { Expertise } from '@/components/Expertise'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Navbar } from '@/components/Navbar'
import { Services } from '@/components/Services'
import { Testimonials } from '@/components/Testimonials'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Expertise />
        <CaseStudies />
        <Testimonials />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
