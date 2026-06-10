import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { SectionHeader } from '@/components/SectionHeader'
import { testimonials } from '@/data/content'

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 lg:py-20">
      <div className="section-container">
        <SectionHeader
          eyebrow="Client Outcomes"
          title="What customers experience after working with us"
          description="Representative feedback aligned with the business outcomes our clients value most."
          align="center"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.quote}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Card className="h-full border-primary/10 bg-gradient-to-br from-white to-secondary/40">
                <CardContent className="p-6">
                  <Quote className="size-8 text-primary/30" />
                  <blockquote className="mt-4 text-base leading-relaxed text-foreground">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <div className="mt-6 flex items-end justify-between gap-4 border-t border-border pt-4">
                    <div>
                      <p className="text-sm font-semibold">{testimonial.author}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                    </div>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      {testimonial.outcome}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
