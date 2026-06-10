import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { SectionHeader } from '@/components/SectionHeader'
import { faqs, siteConfig, team } from '@/data/content'

export function About() {
  return (
    <section id="about" className="py-16 lg:py-20">
      <div className="section-container">
        <SectionHeader
          eyebrow="About Us"
          title={`About ${siteConfig.name}`}
          description={`${siteConfig.fullName} is a Singapore-based technology consulting and IT services practice built around practical delivery, clear explanation and business outcomes.`}
          align="center"
        />

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-56 w-full object-cover object-top"
                  loading="lazy"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold tracking-wide">{member.name}</h3>
                  <p className="mt-1 text-sm font-medium text-primary">{member.role}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{member.bio}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {member.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <SectionHeader
            eyebrow="FAQ"
            title="Common questions"
            description="Practical answers about how we work with SMEs and growing businesses."
            align="center"
          />
          <Accordion type="single" collapsible className="rounded-2xl border border-border bg-white px-6">
            {faqs.map((faq) => (
              <AccordionItem key={faq.question} value={faq.question}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
