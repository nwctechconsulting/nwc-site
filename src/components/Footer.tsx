import { Logo } from '@/components/Logo'
import { siteConfig } from '@/data/content'
import { scrollToSection } from '@/lib/utils'

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="section-container flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Logo size="sm" showTagline={false} />
          <p className="mt-2 text-xs text-muted-foreground">{siteConfig.fullName}</p>
          <p className="mt-2 text-sm text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.fullName}. All rights reserved.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <button
            type="button"
            onClick={() => scrollToSection('services')}
            className="hover:text-primary"
          >
            Services
          </button>
          <button
            type="button"
            onClick={() => scrollToSection('contact')}
            className="hover:text-primary"
          >
            Contact
          </button>
          <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="hover:text-primary">
            {siteConfig.phone}
          </a>
        </div>
      </div>
    </footer>
  )
}
