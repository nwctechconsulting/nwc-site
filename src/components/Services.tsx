import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { SectionHeader } from '@/components/SectionHeader'
import { ServiceCarousel } from '@/components/ServiceCarousel'
import { approachSteps, industries, outcomes, services, siteConfig, whyChoose } from '@/data/content'
import { cn } from '@/lib/utils'

export function Services() {
  return (
    <>
      <section id="services" className="py-16 lg:py-20">
        <div className="section-container">
          <SectionHeader
            eyebrow="Core Services"
            title={`Explore the core services of ${siteConfig.name}.`}
            description="A visual overview of our main service categories — from consulting and infrastructure to security and digital growth."
          />
          <ServiceCarousel />
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="section-container">
          <SectionHeader
            eyebrow="What We Do"
            title="One technology partner for operations, infrastructure, security and digital growth."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, i) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <Card
                    className={cn(
                      'h-full overflow-hidden transition-transform hover:-translate-y-1',
                      service.highlighted && 'border-primary/20 bg-gradient-to-br from-secondary to-indigo-50/50',
                    )}
                  >
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      className="h-44 w-full object-cover"
                      loading="lazy"
                    />
                    <CardContent className="p-6">
                      <div className="mb-4 flex size-12 items-center justify-center rounded-2xl bg-secondary text-primary">
                        <Icon className="size-5" />
                      </div>
                      <h3 className="text-lg font-bold">{service.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
                      <ul className="mt-4 space-y-2">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex gap-2 text-sm text-muted-foreground"
                          >
                            <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="section-container">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-[1.875rem] border border-primary/15 shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"
                alt="Technology team discussing digital transformation and business systems"
                className="h-full min-h-[22rem] w-full object-cover"
                loading="lazy"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="border-primary/20 bg-gradient-to-br from-secondary to-white p-8">
                <span className="eyebrow">Business-First Approach</span>
                <h2 className="section-title mt-4 text-3xl lg:text-4xl">
                  We connect technology decisions to business results.
                </h2>
                <p className="lead mt-4">
                  Many SMEs do not only need equipment; they need a clear plan. {siteConfig.name}{' '}
                  helps translate business problems into practical IT actions.
                </p>
                <div className="mt-8 space-y-3">
                  {approachSteps.map((step) => (
                    <div
                      key={step.step}
                      className="flex gap-4 rounded-2xl border border-border bg-white p-4"
                    >
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-sm font-bold text-primary">
                        {step.step}
                      </div>
                      <div>
                        <strong className="block text-sm">{step.title}</strong>
                        <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="section-container">
          <SectionHeader
            eyebrow="Business Outcomes"
            title={`What customers should feel after working with ${siteConfig.name}.`}
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {outcomes.map((outcome, i) => (
              <motion.div
                key={outcome.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-border bg-white p-5 shadow-sm"
              >
                <strong className="block text-base">{outcome.title}</strong>
                <p className="mt-2 text-sm text-muted-foreground">{outcome.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="section-container">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <span className="eyebrow">Who We Help</span>
              <h2 className="section-title mt-4 text-3xl lg:text-4xl">
                Built for SMEs, growing companies and project-based corporate support.
              </h2>
              <p className="lead mt-4">
                We target decision makers who want practical IT support without unnecessary
                complexity — business owners, operations managers, retail teams and companies
                upgrading legacy systems.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {industries.map((industry) => (
                  <span
                    key={industry}
                    className="rounded-full border border-border bg-white px-3 py-2 text-xs font-semibold text-muted-foreground"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>
            <Card className="p-8">
              <span className="eyebrow">Why Choose Us</span>
              <h2 className="mt-4 text-2xl font-bold">Why choose {siteConfig.name}?</h2>
              <ul className="mt-6 space-y-3">
                {whyChoose.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
