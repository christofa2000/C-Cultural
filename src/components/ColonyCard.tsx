'use client'

import Image from 'next/image'
import { useState } from 'react'

type ColonyCardProps = {
  season: 'verano' | 'invierno'
  title: string
  description?: string
  ages: string
  dates: string[]
  images: string[]
  whatsappHref: string
}

export default function ColonyCard({
  season,
  title,
  description,
  ages,
  dates,
  images,
  whatsappHref,
}: ColonyCardProps) {
  const [showAllDates, setShowAllDates] = useState(false)

  const mainImage = images[0] || '/placeholder-colony.jpg'
  const thumbImages = images.slice(1, 3) // Máximo 2 thumbs

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString('es-AR', {
      day: '2-digit',
      month: '2-digit',
    })
  }

  const visibleDates = showAllDates ? dates : dates.slice(0, 3)

  return (
    <div className="border-border bg-card flex h-full flex-col overflow-hidden rounded-2xl border transition-all duration-300 hover:shadow-md">
      {/* Imagen principal */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={mainImage}
          alt={`${title} - ${season}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          loading="lazy"
        />
        <div className="absolute top-4 left-4">
          <span
            className={`rounded-full px-3 py-1 text-sm font-medium ${
              season === 'verano'
                ? 'bg-orange-500 text-white'
                : 'bg-blue-500 text-white'
            }`}
          >
            {season === 'verano' ? 'Verano' : 'Invierno'}
          </span>
        </div>
      </div>

      {/* Mini-grid de thumbs */}
      {thumbImages.length > 0 && (
        <div className="flex gap-2 p-4 pb-0">
          {thumbImages.map((image, index) => (
            <div
              key={index}
              className="relative h-16 w-16 overflow-hidden rounded-lg"
            >
              <Image
                src={image}
                alt={`${title} - imagen ${index + 2}`}
                fill
                className="object-cover"
                sizes="64px"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      )}

      {/* Contenido - flex-1 para ocupar espacio disponible */}
      <div className="flex flex-1 flex-col px-6 pt-6">
        <div className="flex-1">
          <h3 className="text-foreground mb-2 text-xl font-semibold">
            {title}
          </h3>

          {description && (
            <p className="text-muted-foreground mb-4 line-clamp-3">
              {description}
            </p>
          )}

          {/* Badge de edades */}
          <div className="mb-4">
            <span className="border-border bg-muted text-foreground rounded-md border px-2 py-1 text-xs">
              {ages}
            </span>
          </div>

          {/* Fechas */}
          <div className="mb-6">
            <h4 className="text-foreground mb-2 text-sm font-medium">
              Fechas:
            </h4>
            <ul className="space-y-1">
              {visibleDates.map((date, index) => (
                <li key={index} className="text-muted-foreground text-sm">
                  {formatDate(date)}
                </li>
              ))}
              {dates.length > 3 && !showAllDates && (
                <li>
                  <button
                    onClick={() => setShowAllDates(true)}
                    className="text-primary hover:text-primary/80 focus-visible:ring-ring text-sm focus-visible:rounded-sm focus-visible:ring-2 focus-visible:outline-none"
                    aria-label={`Ver las ${dates.length - 3} fechas restantes`}
                  >
                    Ver más ({dates.length - 3} restantes)
                  </button>
                </li>
              )}
              {showAllDates && dates.length > 3 && (
                <li>
                  <button
                    onClick={() => setShowAllDates(false)}
                    className="text-primary hover:text-primary/80 focus-visible:ring-ring text-sm focus-visible:rounded-sm focus-visible:ring-2 focus-visible:outline-none"
                  >
                    Ver menos
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* CTA WhatsApp - siempre en la parte inferior con py-4 fijo */}
        <div className="mt-auto pt-4 pb-4">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-visible:ring-ring inline-flex w-full items-center justify-center rounded-lg bg-linear-to-r from-violet-600 to-pink-600 px-4 py-4 text-white transition-all duration-200 hover:from-violet-700 hover:to-pink-700 focus-visible:ring-2 focus-visible:outline-none"
            aria-label={`Pre-inscribirse en ${title} por WhatsApp`}
          >
            <svg
              className="mr-2 h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
            </svg>
            Pre-inscribirme por WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
