import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { MessageCircle } from 'lucide-react'

interface WhatsAppButtonProps {
  href: string
  variant?: 'primary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  className?: string
  ariaLabel?: string
}

export function WhatsAppButton({
  href,
  variant = 'primary',
  size = 'md',
  children,
  className,
  ariaLabel,
}: WhatsAppButtonProps) {
  const baseClasses =
    'gap-2 font-medium transition-all duration-200 hover:scale-105'

  const variantClasses = {
    primary:
      'gradient-violet-rosa text-white hover:shadow-lg hover:shadow-violet-500/25',
    ghost:
      'border border-violet-500/30 text-violet-300 hover:bg-violet-500/10 hover:border-violet-400',
  }

  const sizeClasses = {
    sm: 'h-9 px-3 text-sm',
    md: 'h-11 px-4 text-base',
    lg: 'h-12 px-6 text-lg',
  }

  return (
    <Button
      asChild
      variant="ghost"
      size="lg"
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel || `Contactar por WhatsApp: ${children}`}
        className="flex items-center justify-center"
      >
        <MessageCircle className="h-4 w-4" />
        {children}
      </a>
    </Button>
  )
}


