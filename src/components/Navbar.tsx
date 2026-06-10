import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/Logo'
import { navLinks } from '@/data/content'
import { cn, scrollToSection } from '@/lib/utils'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = navLinks.map((link) => link.href.replace('#', ''))
      const scrollPosition = window.scrollY + 120

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    const id = href.replace('#', '')
    scrollToSection(id)
    setIsOpen(false)
  }

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b transition-all duration-300',
        scrolled
          ? 'border-border/80 bg-white/90 shadow-sm backdrop-blur-xl'
          : 'border-transparent bg-white/70 backdrop-blur-md',
      )}
    >
      <div className="section-container flex min-h-[4.75rem] items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => handleNavClick('#home')}
          className="text-left"
          aria-label="NWC — Nicholas & Wayne Consultancy, go to home"
        >
          <Logo size="md" />
        </button>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '')
            return (
              <button
                key={link.href}
                type="button"
                onClick={() => handleNavClick(link.href)}
                className={cn(
                  'rounded-full px-3 py-2 text-sm font-medium transition-colors',
                  activeSection === id
                    ? 'bg-secondary text-primary'
                    : 'text-muted-foreground hover:bg-secondary hover:text-foreground',
                )}
              >
                {link.label}
              </button>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            size="sm"
            className="hidden sm:inline-flex"
            onClick={() => handleNavClick('#contact')}
          >
            Request Consultation
          </Button>

          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-xl border border-border bg-card lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-border bg-white/95 backdrop-blur-xl lg:hidden">
          <nav className="section-container flex flex-col gap-1 py-4" aria-label="Mobile navigation">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '')
              return (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => handleNavClick(link.href)}
                  className={cn(
                    'rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors',
                    activeSection === id
                      ? 'bg-secondary text-primary'
                      : 'text-muted-foreground hover:bg-secondary',
                  )}
                >
                  {link.label}
                </button>
              )
            })}
            <Button className="mt-2 w-full" onClick={() => handleNavClick('#contact')}>
              Request Consultation
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
