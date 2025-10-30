'use client'

import Image from 'next/image'

type RoomGalleryProps = {
  images: string[]
  altBase: string
}

export default function RoomGallery({ images, altBase }: RoomGalleryProps) {
  if (!images || images.length === 0) {
    return (
      <div className="border-border bg-card rounded-2xl border p-8 text-center">
        <p className="text-muted-foreground">No hay imágenes disponibles</p>
      </div>
    )
  }

  // Grid responsivo: 1x2 en mobile, 2x2 en desktop
  const gridClasses =
    images.length === 1
      ? 'grid-cols-1'
      : images.length === 2
        ? 'grid-cols-1 sm:grid-cols-2'
        : 'grid-cols-1 sm:grid-cols-2'

  return (
    <div className={`grid gap-4 ${gridClasses}`}>
      {images.map((image, index) => (
        <div
          key={index}
          className="relative aspect-4/3 overflow-hidden rounded-2xl"
        >
          <Image
            src={image}
            alt={`${altBase} - imagen ${index + 1}`}
            fill
            className="object-cover"
            sizes={
              images.length === 1
                ? '100vw'
                : images.length === 2
                  ? '(max-width: 640px) 100vw, 50vw'
                  : '(max-width: 640px) 100vw, 50vw'
            }
            loading="lazy"
          />
        </div>
      ))}
    </div>
  )
}
