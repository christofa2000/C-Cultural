'use client'

import { cn } from '@/lib/utils'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

interface HighlightItem {
  id: string
  title: string
  description?: string
  image: string
  href?: string
}

interface HighlightsRailProps {
  title: string
  items: HighlightItem[]
  className?: string
}

export function HighlightsRail({
  title,
  items,
  className,
}: HighlightsRailProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAtStart, setIsAtStart] = useState(true)
  const [isAtEnd, setIsAtEnd] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  const ITEMS_PER_VIEW = {
    mobile: 1,
    tablet: 2,
    desktop: 3,
  }

  const updateScrollState = () => {
    if (!scrollContainerRef.current) return

    const container = scrollContainerRef.current
    const scrollLeft = container.scrollLeft
    const maxScrollLeft = container.scrollWidth - container.clientWidth

    setIsAtStart(scrollLeft <= 0)
    setIsAtEnd(scrollLeft >= maxScrollLeft - 1)
  }

  const scrollToIndex = (index: number) => {
    if (!scrollContainerRef.current) return

    const container = scrollContainerRef.current
    const itemWidth = container.clientWidth / ITEMS_PER_VIEW.desktop
    const scrollPosition = index * itemWidth

    container.scrollTo({
      left: scrollPosition,
      behavior: 'smooth',
    })

    setCurrentIndex(index)
  }

  const scrollPrevious = () => {
    const newIndex = Math.max(0, currentIndex - 1)
    scrollToIndex(newIndex)
  }

  const scrollNext = () => {
    const newIndex = Math.min(
      items.length - ITEMS_PER_VIEW.desktop,
      currentIndex + 1
    )
    scrollToIndex(newIndex)
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault()
        scrollPrevious()
        break
      case 'ArrowRight':
        event.preventDefault()
        scrollNext()
        break
      case 'Home':
        event.preventDefault()
        scrollToIndex(0)
        break
      case 'End':
        event.preventDefault()
        scrollToIndex(items.length - ITEMS_PER_VIEW.desktop)
        break
    }
  }

  const handleItemClick = (item: HighlightItem) => {
    if (!item.href) return

    if (item.href.startsWith('/')) {
      // Navegación interna
      router.push(item.href)
    } else if (item.href.startsWith('http')) {
      // Enlace externo
      if (typeof window !== 'undefined') {
        window.open(item.href, '_blank', 'noopener,noreferrer')
      }
    }
  }

  useEffect(() => {
    updateScrollState()
  }, [items.length])

  return (
    <section className={cn('py-16', className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-foreground font-fraunces mb-12 text-center text-3xl font-bold sm:text-4xl">
          {title}
        </h2>

        <div className="relative">
          {/* Controles de navegación */}
          <div className="mb-6 flex items-center justify-between">
            <button
              onClick={scrollPrevious}
              disabled={isAtStart}
              className={cn(
                'rounded-full p-2 transition-all duration-200',
                'hover:bg-white/10 focus:bg-white/10 focus:ring-2 focus:ring-violet-500 focus:outline-none',
                'disabled:cursor-not-allowed disabled:opacity-30',
                isAtStart ? 'opacity-30' : 'opacity-70 hover:opacity-100'
              )}
              aria-label="Anterior"
            >
              <ChevronLeft className="text-foreground h-6 w-6" />
            </button>

            <div className="flex space-x-2">
              {Array.from({
                length: Math.ceil(items.length / ITEMS_PER_VIEW.desktop),
              }).map((_, pageIndex) => (
                <button
                  key={pageIndex}
                  onClick={() =>
                    scrollToIndex(pageIndex * ITEMS_PER_VIEW.desktop)
                  }
                  className={cn(
                    'h-2 w-2 rounded-full transition-all duration-200',
                    currentIndex === pageIndex * ITEMS_PER_VIEW.desktop
                      ? 'bg-violet-500'
                      : 'bg-white/30 hover:bg-white/50'
                  )}
                  aria-label={`Ir a la página ${pageIndex + 1}`}
                />
              ))}
            </div>

            <button
              onClick={scrollNext}
              disabled={isAtEnd}
              className={cn(
                'rounded-full p-2 transition-all duration-200',
                'hover:bg-white/10 focus:bg-white/10 focus:ring-2 focus:ring-violet-500 focus:outline-none',
                'disabled:cursor-not-allowed disabled:opacity-30',
                isAtEnd ? 'opacity-30' : 'opacity-70 hover:opacity-100'
              )}
              aria-label="Siguiente"
            >
              <ChevronRight className="text-foreground h-6 w-6" />
            </button>
          </div>

          {/* Contenedor del rail */}
          <div
            ref={scrollContainerRef}
            onScroll={updateScrollState}
            onKeyDown={handleKeyDown}
            className="scrollbar-hide snap-x snap-mandatory overflow-x-auto"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            tabIndex={0}
            role="region"
            aria-label={`Carril de ${title}`}
          >
            <div className="flex space-x-6 pb-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className={cn(
                    'w-full shrink-0 sm:w-1/2 lg:w-1/3',
                    'snap-start'
                  )}
                >
                  <div className="bg-card/80 border-border/50 overflow-hidden rounded-lg border backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-violet-500/50">
                    {item.image && (
                      <div className="relative aspect-video">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    )}

                    <div className="p-6">
                      <h3 className="text-foreground font-fraunces mb-3 text-xl font-semibold">
                        {item.title}
                      </h3>

                      {item.description && (
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {item.description}
                        </p>
                      )}

                      {item.href && (
                        <button
                          onClick={() => handleItemClick(item)}
                          className="inline-flex items-center font-medium text-violet-400 transition-colors hover:text-violet-300"
                          aria-label={`Ver más sobre ${item.title}`}
                        >
                          Ver más →
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
