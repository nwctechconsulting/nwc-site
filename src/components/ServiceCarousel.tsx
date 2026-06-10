import { useCallback, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { serviceSlides } from '@/data/content'
import { cn } from '@/lib/utils'

export function ServiceCarousel() {
  const [index, setIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const showSlide = useCallback((next: number) => {
    setIndex((next + serviceSlides.length) % serviceSlides.length)
  }, [])

  useEffect(() => {
    if (isPaused) return
    const timer = window.setInterval(() => showSlide(index + 1), 5200)
    return () => window.clearInterval(timer)
  }, [index, isPaused, showSlide])

  const slide = serviceSlides[index]

  return (
    <div
      className="relative overflow-hidden rounded-[1.75rem] border border-border bg-white shadow-xl shadow-slate-900/5"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      <div className="absolute right-5 top-5 z-10 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-muted-foreground shadow-sm backdrop-blur">
        {index + 1} / {serviceSlides.length}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={slide.title}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4 }}
          className="grid lg:grid-cols-[1.12fr_0.88fr]"
        >
          <div className="relative min-h-[16rem] lg:min-h-[28rem]">
            <img
              src={slide.image}
              alt={slide.imageAlt}
              className="absolute inset-0 size-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col justify-center bg-gradient-to-br from-white to-secondary/60 p-8 lg:p-12">
            <span className="eyebrow mb-4 w-fit">
              Slide {String(index + 1).padStart(2, '0')} /{' '}
              {String(serviceSlides.length).padStart(2, '0')}
            </span>
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
              {slide.title}
            </h3>
            <p className="mt-4 text-muted-foreground">{slide.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {slide.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="pointer-events-none absolute inset-x-4 top-1/2 flex -translate-y-1/2 justify-between">
        <Button
          type="button"
          size="icon"
          variant="secondary"
          className="pointer-events-auto size-11 rounded-full bg-slate-900/70 text-white hover:bg-slate-900/85"
          onClick={() => showSlide(index - 1)}
          aria-label="Previous service slide"
        >
          <ArrowLeft />
        </Button>
        <Button
          type="button"
          size="icon"
          variant="secondary"
          className="pointer-events-auto size-11 rounded-full bg-slate-900/70 text-white hover:bg-slate-900/85"
          onClick={() => showSlide(index + 1)}
          aria-label="Next service slide"
        >
          <ArrowRight />
        </Button>
      </div>

      <div className="flex justify-center gap-2 border-t border-border bg-white px-4 py-4">
        {serviceSlides.map((item, dotIndex) => (
          <button
            key={item.title}
            type="button"
            onClick={() => showSlide(dotIndex)}
            className={cn(
              'size-2.5 rounded-full transition-all',
              dotIndex === index
                ? 'w-8 bg-primary'
                : 'bg-border hover:bg-primary/40',
            )}
            aria-label={`Go to ${item.title} slide`}
          />
        ))}
      </div>
    </div>
  )
}
