'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface SplitTextProps {
  text: string
  className?: string
  delay?: number
  stagger?: number
}

function SplitText({
  text,
  className = '',
  delay = 0,
  stagger = 0.02,
}: SplitTextProps) {
  const words = text.split(' ')

  return (
    <span className={className}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block">
          {word.split('').map((char, charIndex) => (
            <motion.span
              key={charIndex}
              className="inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: delay + wordIndex * 0.1 + charIndex * stagger,
                ease: [0.215, 0.61, 0.355, 1],
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
          {wordIndex < words.length - 1 && '\u00A0'}
        </span>
      ))}
    </span>
  )
}

interface HeroSpotlightProps {
  image: string
  imageAlt?: string
  overlayText?: string
}

export function HeroSpotlight({
  image,
  imageAlt,
  overlayText,
}: HeroSpotlightProps) {
  return (
    <section className="bg-background relative w-full overflow-hidden">
      {/* Imagen principal */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="relative h-[75vh] w-full"
      >
        <Image
          src={image}
          alt={imageAlt || 'Imagen principal'}
          fill
          priority
          className="object-cover"
        />

        {/* Overlay sutil para mejorar contraste visual */}
        <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/30 to-black/40" />

        {/* Texto centrado sobre la imagen con efecto split text */}
        {overlayText && (
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center md:px-6 lg:px-8">
              <p className="text-xl leading-relaxed font-medium text-white drop-shadow-lg md:text-3xl md:leading-relaxed lg:text-4xl">
                <SplitText text={overlayText} delay={0.4} stagger={0.02} />
              </p>
            </div>
          </div>
        )}
      </motion.div>
    </section>
  )
}
