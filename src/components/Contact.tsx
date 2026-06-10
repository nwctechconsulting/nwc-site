import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { SectionHeader } from '@/components/SectionHeader'
import { serviceOptions, siteConfig } from '@/data/content'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [service, setService] = useState(serviceOptions[0])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-16 lg:py-20">
      <div className="section-container">
        <SectionHeader
          eyebrow="Get In Touch"
          title={`Contact ${siteConfig.name}`}
          description="Tell us about your current setup, business problem and project goal. We can help identify the most practical next step."
          align="center"
        />

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-primary/20 bg-gradient-to-br from-secondary to-white">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl font-bold">Contact Information</h3>
                <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
                  <li className="flex gap-3">
                    <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>
                      Phone / WhatsApp:{' '}
                      <a
                        href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                        className="font-medium text-foreground hover:text-primary"
                      >
                        {siteConfig.phone}
                      </a>
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>
                      Email:{' '}
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="font-medium text-foreground hover:text-primary"
                      >
                        {siteConfig.email}
                      </a>
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>{siteConfig.address}</span>
                  </li>
                </ul>
                <p className="mt-4 text-sm text-muted-foreground">
                  Service Area: {siteConfig.serviceArea}
                </p>

                <div className="mt-6 overflow-hidden rounded-2xl border border-primary/15 shadow-md">
                  <iframe
                    title="NWC location at Paya Lebar Square"
                    src="https://www.google.com/maps?q=60%20Paya%20Lebar%20Road%2C%20Paya%20Lebar%20Square%2C%20Singapore%20409051&output=embed"
                    className="h-56 w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="border-t border-border bg-muted/40 px-4 py-3 text-sm">
                    <strong className="block text-foreground">Visit / Meeting Location</strong>
                    <span className="text-muted-foreground">
                      60 Paya Lebar Road, Paya Lebar Square, Singapore 409051
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-6 sm:p-8">
                {submitted ? (
                  <div className="flex min-h-[24rem] flex-col items-center justify-center text-center">
                    <div className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Send className="size-6" />
                    </div>
                    <h3 className="mt-4 text-xl font-bold">Thank you for your enquiry</h3>
                    <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                      We&apos;ve received your message and will get back to you shortly. For
                      urgent matters, call or WhatsApp us at {siteConfig.phone}.
                    </p>
                    <Button
                      variant="secondary"
                      className="mt-6"
                      onClick={() => setSubmitted(false)}
                    >
                      Send another enquiry
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h3 className="text-xl font-bold">Enquiry Form</h3>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" name="name" placeholder="Your name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          name="company"
                          placeholder="Company / organisation"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="name@company.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Service Required</Label>
                      <Select value={service} onValueChange={setService}>
                        <SelectTrigger id="service">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceOptions.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your current setup, problem or project requirement"
                        required
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full sm:w-auto">
                      Submit Enquiry
                      <Send className="size-4" />
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
