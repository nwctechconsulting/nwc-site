import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { SectionHeader } from '@/components/SectionHeader'
import { techStack } from '@/data/content'

export function Expertise() {
  return (
    <section id="expertise" className="py-16 lg:py-20">
      <div className="section-container">
        <SectionHeader
          eyebrow="Expertise"
          title="Technology stack and capabilities"
          description="From Microsoft 365 and cloud platforms to servers, networking, security and digital growth tools — we support the systems businesses rely on every day."
          align="center"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {techStack.map((category, i) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Card className="h-full border-primary/10 bg-gradient-to-br from-white to-secondary/30">
                  <CardContent className="p-6">
                    <div className="mb-4 flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="text-lg font-bold">{category.title}</h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {category.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-border bg-white px-3 py-1.5 text-xs font-semibold text-foreground"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-primary/15 shadow-lg lg:col-span-2 lg:row-span-2">
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
              alt="Digital network and cloud technology"
              className="h-full min-h-[18rem] w-full object-cover lg:min-h-[22rem]"
              loading="lazy"
            />
            <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-white/90 p-4 backdrop-blur-md">
              <strong className="block">Cloud, infrastructure and digital transformation</strong>
              <span className="mt-1 block text-sm text-muted-foreground">
                Modernise systems while keeping business operations practical and manageable.
              </span>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[1.75rem] border border-primary/15 shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80"
              alt="Business team planning project delivery"
              className="h-48 w-full object-cover lg:h-full lg:min-h-[10rem]"
              loading="lazy"
            />
            <div className="absolute inset-x-3 bottom-3 rounded-xl bg-white/90 p-3 backdrop-blur-md">
              <strong className="block text-sm">Project planning</strong>
              <span className="text-xs text-muted-foreground">
                Clear scope, realistic priorities and better vendor coordination.
              </span>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[1.75rem] border border-primary/15 shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80"
              alt="Laptop showing dashboard and analytics"
              className="h-48 w-full object-cover lg:h-full lg:min-h-[10rem]"
              loading="lazy"
            />
            <div className="absolute inset-x-3 bottom-3 rounded-xl bg-white/90 p-3 backdrop-blur-md">
              <strong className="block text-sm">Reporting and visibility</strong>
              <span className="text-xs text-muted-foreground">
                Use data to improve IT decisions and marketing performance.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
