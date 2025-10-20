import { WhatsAppButton } from '@/components/WhatsAppButton'
import { buildGeneralInquiry } from '@/lib/whatsapp'
import Image from 'next/image'
import Link from 'next/link'

interface HeroSpotlightProps {
  title: string
  subtitle: string
  image: string
  imageAlt: string
  primaryCta: {
    text: string
    href: string
  }
  secondaryCta: {
    text: string
    whatsappMessage: string
  }
}

export function HeroSpotlight({
  title,
  subtitle,
  image,
  imageAlt,
  primaryCta,
  secondaryCta,
}: HeroSpotlightProps) {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Overlay con gradiente */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        <div className="gradient-aurora-patio absolute inset-0" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 container mx-auto px-4 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-fraunces mb-6 text-4xl leading-tight font-bold text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-neutral-200 sm:text-xl lg:text-2xl">
            {subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={primaryCta.href}
              className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/10 px-8 py-4 text-lg font-medium text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-white/30 hover:bg-white/20"
            >
              {primaryCta.text}
            </Link>

            <WhatsAppButton
              href={buildGeneralInquiry(secondaryCta.whatsappMessage)}
              variant="primary"
              size="lg"
              ariaLabel={`Contactar por WhatsApp: ${secondaryCta.text}`}
            >
              {secondaryCta.text}
            </WhatsAppButton>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 transform">
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-white/30">
          <div className="mt-2 h-3 w-1 animate-bounce rounded-full bg-white/60" />
        </div>
      </div>
    </section>
  )
}


