import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { classes } from '@/data/classes'
import { schedules } from '@/data/schedules'
import { teachers } from '@/data/teachers'
import {
  AUDIENCE_LABELS,
  LEVEL_LABELS,
  SITE_NAME,
  SITE_URL,
  WEEKDAY_LABELS,
} from '@/lib/constants'
import { buildClassEnroll } from '@/lib/whatsapp'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface ClassDetailPageProps {
  params: Promise<{
    id: string
  }>
}

export async function generateMetadata({
  params,
}: ClassDetailPageProps): Promise<Metadata> {
  const { id } = await params
  const classItem = classes.find((c) => c.id === id)

  if (!classItem) {
    return {
      title: 'Clase no encontrada',
    }
  }

  const teacher = teachers.find((t) => t.id === classItem.teacherId)

  return {
    title: `${classItem.title} | Centro Cultural Chivilcoy`,
    description:
      classItem.description ||
      `Clase de ${classItem.discipline || 'arte'} para ${AUDIENCE_LABELS[classItem.audience].toLowerCase()}`,
    openGraph: {
      title: classItem.title,
      description: classItem.description,
      type: 'website',
      url: `${SITE_URL}/clases/${id}`,
      images: classItem.images?.[0]
        ? [
            {
              url: `${SITE_URL}${classItem.images[0]}`,
              alt: `Imagen de ${classItem.title}`,
            },
          ]
        : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: classItem.title,
      description: classItem.description,
    },
  }
}

export default async function ClassDetailPage({
  params,
}: ClassDetailPageProps) {
  const { id } = await params
  const classItem = classes.find((c) => c.id === id)

  if (!classItem) {
    notFound()
  }

  const teacher = teachers.find((t) => t.id === classItem.teacherId)
  const classSchedules = schedules.filter(
    (schedule) => schedule.classId === classItem.id
  )

  // JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: classItem.title,
    description: classItem.description,
    image: classItem.images?.[0]
      ? `${SITE_URL}${classItem.images[0]}`
      : undefined,
    provider: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    ...(teacher && {
      instructor: {
        '@type': 'Person',
        name: teacher.name,
      },
    }),
    ...(classItem.price && {
      offers: {
        '@type': 'Offer',
        price: classItem.price,
        priceCurrency: 'ARS',
      },
    }),
  }

  const mainImage = classItem.images?.[0] || '/placeholder-class.jpg'

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="bg-background text-foreground min-h-screen">
        <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-6">
            <div className="text-muted-foreground flex items-center space-x-2 text-sm">
              <Link
                href="/"
                className="hover:text-foreground transition-colors duration-200"
              >
                Home
              </Link>
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <Link
                href="/clases"
                className="hover:text-foreground transition-colors duration-200"
              >
                Clases
              </Link>
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <span className="text-muted-foreground">{classItem.title}</span>
            </div>
          </nav>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Imagen principal */}
            <div className="space-y-4">
              <div className="relative h-64 overflow-hidden rounded-lg md:h-80 lg:h-96">
                <Image
                  src={mainImage}
                  alt={`Imagen de la clase ${classItem.title}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                  priority
                />
              </div>

              {/* Galería adicional */}
              {classItem.images && classItem.images.length > 1 && (
                <div className="grid grid-cols-3 gap-2">
                  {classItem.images.slice(1, 4).map((image, index) => (
                    <div
                      key={index}
                      className="relative h-20 overflow-hidden rounded-lg"
                    >
                      <Image
                        src={image}
                        alt={`Imagen adicional ${index + 1} de ${classItem.title}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 33vw, 16vw"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Información de la clase */}
            <div className="space-y-6">
              {/* Header */}
              <div>
                <div className="mb-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-linear-to-r from-violet-600 to-pink-600 px-3 py-1 text-sm font-medium text-white">
                    {AUDIENCE_LABELS[classItem.audience]}
                  </span>
                  {classItem.level && (
                    <span className="border-border bg-muted text-foreground rounded-full border px-3 py-1 text-sm font-medium">
                      {LEVEL_LABELS[classItem.level]}
                    </span>
                  )}
                  {classItem.discipline && (
                    <span className="border-border bg-muted text-foreground rounded-full border px-3 py-1 text-sm font-medium">
                      {classItem.discipline}
                    </span>
                  )}
                </div>

                <h1 className="mb-2 bg-linear-to-r from-violet-400 to-pink-400 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
                  {classItem.title}
                </h1>

                {classItem.price && (
                  <p className="text-primary text-xl font-semibold">
                    {classItem.price}
                  </p>
                )}
              </div>

              {/* Docente */}
              {teacher && (
                <div className="border-border bg-card rounded-lg border p-4">
                  <h3 className="text-foreground mb-3 text-lg font-semibold">
                    Docente
                  </h3>
                  <div className="flex items-center space-x-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-r from-violet-600 to-pink-600">
                      <span className="text-lg font-medium text-white">
                        {teacher.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')
                          .slice(0, 2)}
                      </span>
                    </div>
                    <div>
                      <p className="text-foreground font-medium">
                        {teacher.name}
                      </p>
                      {teacher.bioShort && (
                        <p className="text-muted-foreground mt-1 text-sm">
                          {teacher.bioShort}
                        </p>
                      )}
                      {teacher.specialties && (
                        <div className="mt-2 flex flex-wrap gap-1">
                          {teacher.specialties.map((specialty, index) => (
                            <span
                              key={index}
                              className="border-border bg-muted text-foreground rounded border px-2 py-1 text-xs"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Descripción */}
              {classItem.description && (
                <div className="border-border bg-card rounded-lg border p-4">
                  <h3 className="text-foreground mb-3 text-lg font-semibold">
                    Descripción
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {classItem.description}
                  </p>
                </div>
              )}

              {/* Requisitos */}
              {classItem.requirements && classItem.requirements.length > 0 && (
                <div className="border-border bg-card rounded-lg border p-4">
                  <h3 className="text-foreground mb-3 text-lg font-semibold">
                    Requisitos
                  </h3>
                  <ul className="space-y-2">
                    {classItem.requirements.map((requirement, index) => (
                      <li
                        key={index}
                        className="text-muted-foreground flex items-center space-x-2"
                      >
                        <svg
                          className="h-4 w-4 shrink-0 text-violet-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Horarios */}
              {classSchedules.length > 0 && (
                <div className="border-border bg-card rounded-lg border p-4">
                  <h3 className="text-foreground mb-4 text-lg font-semibold">
                    Horarios disponibles
                  </h3>
                  <div className="space-y-3">
                    {classSchedules.map((schedule) => {
                      const timeDisplay = schedule.byAppointment
                        ? 'Hora a convenir'
                        : schedule.start && schedule.end
                          ? `${schedule.start} - ${schedule.end}`
                          : schedule.start
                            ? `Desde ${schedule.start}`
                            : 'Horario a confirmar'

                      const whatsappHref = buildClassEnroll({
                        title: classItem.title,
                        day: WEEKDAY_LABELS[schedule.weekday],
                        time: schedule.start || 'Hora a convenir',
                      })

                      return (
                        <div
                          key={schedule.id}
                          className="border-border bg-card rounded-lg border p-3"
                        >
                          <p className="text-foreground font-medium">
                            {WEEKDAY_LABELS[schedule.weekday]}
                          </p>
                          <p className="text-muted-foreground text-sm">
                            {timeDisplay}
                          </p>
                          {schedule.notes && (
                            <p className="text-muted-foreground text-xs">
                              {schedule.notes}
                            </p>
                          )}
                          {schedule.spots && (
                            <p className="text-muted-foreground text-xs">
                              {schedule.spots} cupos disponibles
                            </p>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}

              {/* CTA principal */}
              <div className="border-primary/30 rounded-lg border bg-linear-to-r from-violet-600/10 to-pink-600/10 p-6">
                <h3 className="text-foreground mb-2 text-lg font-semibold">
                  ¿Te interesa esta clase?
                </h3>
                <p className="text-muted-foreground mb-4">
                  Contactanos por WhatsApp para más información o para
                  inscribirte.
                </p>
                <a
                  href={buildClassEnroll({
                    title: classItem.title,
                    day: 'cualquier día',
                    time: 'horario disponible',
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-visible:ring-ring inline-flex items-center rounded-lg bg-linear-to-r from-violet-600 to-pink-600 px-6 py-3 text-white transition-all duration-200 hover:from-violet-700 hover:to-pink-700 focus-visible:ring-2 focus-visible:outline-none"
                >
                  <svg
                    className="mr-2 h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                  Consultar por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
