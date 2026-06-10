import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { SectionHeader } from '@/components/SectionHeader'
import { projects } from '@/data/content'

export function CaseStudies() {
  return (
    <section id="projects" className="py-16 lg:py-20">
      <div className="section-container">
        <SectionHeader
          eyebrow="Portfolio"
          title="Selected project portfolio and capability showcase"
          description="Practical examples across infrastructure, retail technology, cloud, data center, cybersecurity and digital marketing."
          align="center"
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Card className="group h-full overflow-hidden transition-transform hover:-translate-y-1">
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-3">
                    {project.category}
                  </Badge>
                  <h3 className="text-lg font-bold">{project.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
