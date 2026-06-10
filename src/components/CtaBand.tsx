import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/data/content'
import { scrollToSection } from '@/lib/utils'

export function CtaBand() {
  return (
    <section className="py-16 lg:py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-start justify-between gap-6 rounded-[1.75rem] border border-primary/15 bg-gradient-to-br from-white to-secondary p-8 shadow-lg sm:flex-row sm:items-center lg:p-10"
        >
          <div className="max-w-2xl">
            <span className="eyebrow">Call To Action</span>
            <h2 className="section-title mt-4 text-3xl lg:text-4xl">
              Ready to improve your IT systems, security or digital growth?
            </h2>
            <p className="lead mt-3">
              Tell {siteConfig.name} about your current setup, business problem and project goal.
              We can help you identify the most practical next step.
            </p>
          </div>
          <Button size="lg" onClick={() => scrollToSection('contact')}>
            Contact {siteConfig.name}
            <ArrowRight className="size-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
