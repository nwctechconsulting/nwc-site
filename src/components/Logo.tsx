import { cn } from '@/lib/utils'
import { siteConfig } from '@/data/content'

interface LogoProps {
  variant?: 'full' | 'mark'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  showTagline?: boolean
}

const markSizes = {
  sm: 'size-9 text-[0.6rem]',
  md: 'size-10 text-[0.65rem]',
  lg: 'size-12 text-xs',
}

const textSizes = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
}

export function Logo({
  variant = 'full',
  size = 'md',
  className,
  showTagline = true,
}: LogoProps) {
  const mark = (
    <div
      className={cn(
        'flex shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-indigo-600 font-black tracking-tight text-white shadow-lg shadow-primary/20',
        markSizes[size],
        className,
      )}
      aria-hidden
    >
      NWC
    </div>
  )

  if (variant === 'mark') {
    return (
      <div className={cn('inline-flex', className)} aria-label={siteConfig.fullName}>
        {mark}
      </div>
    )
  }

  return (
    <div className={cn('flex min-w-0 items-center gap-3', className)}>
      {mark}
      <div className="min-w-0">
        <strong className={cn('block font-bold tracking-wide', textSizes[size])}>
          {siteConfig.name}
        </strong>
        {showTagline && (
          <span className="hidden text-xs text-muted-foreground sm:block">
            {siteConfig.fullName}
          </span>
        )}
      </div>
    </div>
  )
}
