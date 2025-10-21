'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface HeroSpotlightProps {
  image: string
  imageAlt?: string
}

export function HeroSpotlight({ image, imageAlt }: HeroSpotlightProps) {
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent" />
      </motion.div>
    </section>
  )
}
