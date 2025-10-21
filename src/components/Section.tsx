'use client'

import { useEffect, useRef, useState } from 'react'

type SectionId = 'clases' | 'colonia' | 'agenda' | 'alquiler' | 'contacto'

interface SectionProps {
  id: SectionId
  title?: string
  className?: string
  children: React.ReactNode
  description?: string
}

export default function Section({
  id,
  title,
  className = '',
  children,
  description,
}: SectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const prefersReducedMotion =
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false

  const animationClasses = prefersReducedMotion
    ? ''
    : `transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`

  return (
    <section
      ref={sectionRef}
      id={id}
      aria-labelledby={`${id}-title`}
      className={`scroll-mt-24 py-12 md:py-16 ${animationClasses} ${className}`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {title && (
          <div className="mb-8 text-center">
            <h2
              id={`${id}-title`}
              className="bg-linear-to-r from-violet-400 to-pink-400 bg-clip-text text-3xl font-bold text-transparent md:text-4xl"
            >
              {title}
            </h2>
            {description && (
              <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-300">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
