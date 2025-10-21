import ClassCard from '@/components/ClassCard'
import ContactCard from '@/components/ContactCard'
import EventList from '@/components/EventList'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { HeroSpotlight } from '@/components/HeroSpotlight'
import RoomCard from '@/components/RoomCard'
import Section from '@/components/Section'
import { classes } from '@/data/classes'
import { colony } from '@/data/colony'
import { events } from '@/data/events'
import { rooms } from '@/data/rooms'
import { schedules } from '@/data/schedules'
import { teachers } from '@/data/teachers'
import { buildColonyPreEnroll } from '@/lib/whatsapp'
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'

export const dynamic = 'force-static'
export const revalidate = false

export default function Home() {
  // Preparar datos para el hero
  const heroData = {
    title: 'Centro Cultural Chivilcoy',
    subtitle:
      'Un espacio donde la creatividad, el arte y la comunidad se encuentran. Clases para todas las edades, colonia de verano e invierno, y alquiler de salón.',
    image: '/salapro.jpg',
    imageAlt:
      'Centro Cultural Chivilcoy - Salón principal con piso de madera y espejos',
    primaryCta: {
      text: 'Ver Clases',
      href: '/#clases',
    },
    secondaryCta: {
      text: 'Consultar por WhatsApp',
      whatsappMessage:
        'Hola, me interesa conocer más sobre las clases y actividades del centro cultural.',
    },
  }

  // Obtener clases destacadas (mezcla de adultxs e infancias)
  const featuredClasses = classes.slice(0, 6)

  // Obtener próximos eventos
  const upcomingEvents = events.slice(0, 3)

  // Obtener salón principal
  const mainRoom = rooms.find((room) => room.id === '1')

  // Obtener colonia activa (verano por defecto)
  const activeColony = colony.find((c) => c.season === 'verano') || colony[0]

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <HeroSpotlight {...heroData} />

        {/* Sección Clases */}
        <Section
          id="clases"
          title="Nuestras Clases"
          description="Descubrí nuestras clases de danza, teatro, música y bienestar para todas las edades"
          className=""
        >
          <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredClasses.map((classItem) => {
              const teacher = teachers.find((t) => t.id === classItem.teacherId)
              if (!teacher) return null

              return (
                <ClassCard
                  key={classItem.id}
                  classItem={classItem}
                  schedules={schedules}
                  teacher={teacher}
                />
              )
            })}
          </div>

          <div className="text-center">
            <Link
              href="/clases"
              className="inline-flex items-center rounded-lg bg-linear-to-r from-violet-600 to-violet-500 px-6 py-3 text-white transition-all duration-200 hover:from-violet-700 hover:to-violet-600 focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:outline-none"
            >
              Ver todas las clases
              <svg
                className="ml-2 h-5 w-5"
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
            </Link>
          </div>
        </Section>

        {/* Sección Colonia */}
        <Section
          id="colonia"
          title="Colonia de Verano e Invierno"
          description="Actividades recreativas, deportivas y artísticas para niños y niñas"
          className=""
        >
          <div className="mx-auto max-w-4xl">
            <div className="rounded-lg border border-violet-700 bg-neutral-900 p-8 shadow-lg">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-2xl font-semibold text-white">
                    {activeColony.season === 'verano'
                      ? 'Colonia de Verano'
                      : 'Colonia de Invierno'}
                  </h3>
                  <p className="mb-4 text-neutral-300">
                    {activeColony.description}
                  </p>
                  <div className="space-y-2 text-sm text-neutral-400">
                    <p>
                      <strong>Edades:</strong> {activeColony.ages}
                    </p>
                    <p>
                      <strong>Horario:</strong> {activeColony.schedule}
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="mb-3 font-medium text-neutral-200">
                    Actividades incluidas:
                  </h4>
                  <ul className="space-y-2">
                    {activeColony.activities
                      ?.slice(0, 5)
                      .map((activity, index) => (
                        <li
                          key={index}
                          className="flex items-center text-sm text-neutral-300"
                        >
                          <svg
                            className="mr-2 h-4 w-4 shrink-0 text-violet-400"
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
                          {activity}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={buildColonyPreEnroll({
                    season: activeColony.season,
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center rounded-lg bg-linear-to-r from-violet-600 to-pink-600 px-6 py-3 text-white transition-all duration-200 hover:from-violet-700 hover:to-pink-700 focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:outline-none"
                >
                  <svg
                    className="mr-2 h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
                  </svg>
                  Pre-inscribirse por WhatsApp
                </a>
                <Link
                  href="/colonia"
                  className="inline-flex flex-1 items-center justify-center rounded-lg border border-violet-700 bg-neutral-800 px-6 py-3 text-neutral-200 transition-all duration-200 hover:bg-neutral-700 hover:text-white focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:outline-none"
                >
                  Ver más información
                </Link>
              </div>
            </div>
          </div>
        </Section>

        {/* Sección Agenda */}
        <Section
          id="agenda"
          title="Próximos Eventos"
          description="No te pierdas nuestras actividades especiales y eventos"
          className=""
        >
          <div className="mx-auto max-w-4xl">
            <EventList events={upcomingEvents} maxItems={3} />
          </div>
        </Section>

        {/* Sección Alquiler */}
        <Section
          id="alquiler"
          title="Alquiler del Salón"
          description="Espacios perfectos para tus eventos y actividades"
          className=""
        >
          <div className="mx-auto max-w-4xl">
            {mainRoom && <RoomCard room={mainRoom} showFullDetails={false} />}
          </div>
        </Section>

        {/* Sección Contacto */}
        <Section
          id="contacto"
          title="Contacto"
          description="Estamos aquí para ayudarte a encontrar la actividad perfecta"
          className=""
        >
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <ContactCard
                icon={<Mail className="h-6 w-6 text-pink-400" />}
                label="espaciochivilcoy@hotmail.com"
                href="mailto:espaciochivilcoy@hotmail.com"
              />
              <ContactCard
                icon={<Phone className="h-6 w-6 text-green-400" />}
                label="WhatsApp"
                href="https://wa.me/5491141690883"
              />
              <ContactCard
                icon={<Instagram className="h-6 w-6 text-pink-400" />}
                label="@espaciochivilcoy"
                href="https://www.instagram.com/espaciochivilcoy"
              />
              <ContactCard
                icon={<Facebook className="h-6 w-6 text-blue-400" />}
                label="Facebook"
                href="https://www.facebook.com/EspacioChivilcoy"
              />
              <ContactCard
                icon={<MapPin className="h-6 w-6 text-violet-400" />}
                label="Chivilcoy 3051, CABA"
                href="https://www.google.com/maps/place/Chivilcoy+3051,+C1417+Cdad.+Aut%C3%B3noma+de+Buenos+Aires"
              />
              {/* 🚲 Espacio para bicicletas */}
              <ContactCard
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-amber-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.5 17a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0zM17.5 17a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0zM9 17l3.5-7H14l3 6h2"
                    />
                  </svg>
                }
                label="Espacio para bicicletas"
                href=""
              />
            </div>

            <div className="text-center">
              <Link
                href="/contacto"
                className="inline-flex items-center rounded-lg bg-linear-to-r from-violet-600 to-violet-500 px-6 py-3 text-white transition-all duration-200 hover:from-violet-700 hover:to-violet-600 focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:outline-none"
              >
                Ir a Contacto
                <svg
                  className="ml-2 h-5 w-5"
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
              </Link>
            </div>
          </div>
        </Section>

        {/* (Sección CTA Final eliminada) */}
      </main>
      <Footer />
    </>
  )
}
