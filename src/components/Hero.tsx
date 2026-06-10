import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { heroBadges, siteConfig, trustMetrics } from '@/data/content'
import { scrollToSection } from '@/lib/utils'

export function Hero() {
  return (
    <section id="home" className="section-container py-16 lg:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Singapore Technology Consulting & IT Services</span>
          <h1 className="mt-6 text-4xl font-bold leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
            Practical IT, cloud, security and digital growth solutions for modern businesses.
          </h1>
          <p className="lead mt-6 max-w-xl">{siteConfig.description}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" onClick={() => scrollToSection('contact')}>
              Request Consultation
              <ArrowRight className="size-4" />
            </Button>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => scrollToSection('services')}
            >
              Explore Services
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {heroBadges.map((badge) => (
              <Badge key={badge} variant="outline">
                {badge}
              </Badge>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {trustMetrics.map((metric) => (
              <div
                key={metric.value}
                className="rounded-2xl border border-border bg-white/80 p-4 shadow-sm"
              >
                <strong className="block text-2xl font-bold text-primary">
                  {metric.value}
                </strong>
                <span className="mt-1 block text-xs leading-snug text-muted-foreground">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-[2rem] border border-primary/15 shadow-2xl shadow-slate-900/10">
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80"
              alt="Modern business office with technology team working together"
              className="aspect-[4/5] w-full object-cover lg:aspect-auto lg:min-h-[32rem]"
              loading="eager"
            />
            <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/80 bg-white/90 p-5 shadow-xl backdrop-blur-md">
              <h2 className="text-lg font-bold tracking-tight">
                Technology that supports real business operations.
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                A practical partner for IT planning, system improvement, infrastructure
                projects and secure digital transformation.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
