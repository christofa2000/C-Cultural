import { HeroSpotlight } from '@/components/HeroSpotlight'
import { HighlightsRail } from '@/components/HighlightsRail'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { buildGeneralInquiry } from '@/lib/whatsapp'

export default function Home() {
  // Preparar datos para el hero
  const heroData = {
    title: 'Centro Cultural Chivilcoy',
    subtitle:
      'Un espacio donde la creatividad, el arte y la comunidad se encuentran. Clases para todas las edades, colonia de verano e invierno, y alquiler de salón.',
    image: '/images/fondo-app.jpg',
    imageAlt:
      'Centro Cultural Chivilcoy - Salón principal con piso de madera y espejos',
    primaryCta: {
      text: 'Ver Clases',
      href: '/clases',
    },
    secondaryCta: {
      text: 'Consultar por WhatsApp',
      whatsappMessage:
        'Hola, me interesa conocer más sobre las clases y actividades del centro cultural.',
    },
  }

  // Datos completamente serializables para HighlightsRail
  const classHighlights = [
    {
      id: '1',
      title: 'Clases para Adultxs',
      description: 'Danza contemporánea, teatro, yoga y música para adultxs.',
      image: '/images/pintura.jpg',
      href: '/clases?audiencia=adultxs',
    },
    {
      id: '2',
      title: 'Clases Infantiles',
      description: 'Música, arte y movimiento para peques de 4 a 12 años.',
      image: '/images/pintura.jpg',
      href: '/clases?audiencia=infancias',
    },
    {
      id: '3',
      title: 'Danza Contemporánea',
      description: 'Exploración del movimiento y expresión corporal.',
      image: '/images/pintura.jpg',
      href: '/clases/1',
    },
    {
      id: '4',
      title: 'Teatro para Adultos',
      description:
        'Introducción al teatro, improvisación y técnicas de actuación.',
      image: '/images/pintura.jpg',
      href: '/clases/2',
    },
    {
      id: '5',
      title: 'Yoga y Relajación',
      description: 'Práctica de yoga suave y técnicas de relajación.',
      image: '/images/pintura.jpg',
      href: '/clases/6',
    },
    {
      id: '6',
      title: 'Canto y Guitarra',
      description: 'Aprende a cantar y tocar guitarra en un ambiente relajado.',
      image: '/images/pintura.jpg',
      href: '/clases/5',
    },
  ]

  const upcomingEvents = [
    {
      id: '1',
      title: 'Muestra de Fin de Año',
      description:
        'Presentación de todas las clases con trabajos realizados durante el año.',
      image: '/images/salon.jpg',
      href: '/agenda',
    },
    {
      id: '2',
      title: 'Taller de Improvisación',
      description:
        'Taller intensivo de improvisación teatral para todos los niveles.',
      image: '/images/salon.jpg',
      href: '/agenda',
    },
    {
      id: '3',
      title: 'Festival de Danza Infantil',
      description:
        'Festival al aire libre con presentaciones de danza infantil.',
      image: '/images/patio.jpg',
      href: '/agenda',
    },
  ]

  const colonyHighlights = [
    {
      id: '1',
      title: 'Colonia de Verano',
      description:
        'Actividades recreativas, deportivas y artísticas en nuestro hermoso patio verde. Edades: 4 a 12 años - $15.000/mes',
      image: '/images/patio.jpg',
      href: buildGeneralInquiry(
        'Hola, me interesa conocer más sobre la colonia de verano.'
      ),
    },
    {
      id: '2',
      title: 'Colonia de Invierno',
      description:
        'Actividades indoor y outdoor adaptadas al clima invernal. Edades: 4 a 12 años - $12.000/mes',
      image: '/images/patio.jpg',
      href: buildGeneralInquiry(
        'Hola, me interesa conocer más sobre la colonia de invierno.'
      ),
    },
  ]

  const roomHighlights = [
    {
      id: '1',
      title: 'Salón Principal',
      description:
        'Espacioso salón con piso de madera y espejos completos, ideal para clases de danza y teatro. Capacidad: 30 personas',
      image: '/images/salon.jpg',
      href: buildGeneralInquiry(
        'Hola, me interesa conocer más sobre el alquiler del Salón Principal.'
      ),
    },
    {
      id: '2',
      title: 'Patio Verde',
      description:
        'Hermoso patio con césped natural, perfecto para actividades al aire libre y eventos. Capacidad: 50 personas',
      image: '/images/patio.jpg',
      href: buildGeneralInquiry(
        'Hola, me interesa conocer más sobre el alquiler del Patio Verde.'
      ),
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSpotlight {...heroData} />

      {/* Clases Destacadas */}
      <HighlightsRail
        title="Nuestras Clases"
        items={classHighlights}
        className="bg-linear-to-b from-neutral-900 to-neutral-950"
      />

      {/* Próximos Eventos */}
      <HighlightsRail
        title="Próximos Eventos"
        items={upcomingEvents}
        className="bg-linear-to-b from-neutral-950 to-neutral-900"
      />

      {/* Colonia */}
      <HighlightsRail
        title="Colonia de Verano e Invierno"
        items={colonyHighlights}
        className="bg-linear-to-b from-neutral-900 to-neutral-950"
      />

      {/* Alquiler de Espacios */}
      <HighlightsRail
        title="Alquiler de Espacios"
        items={roomHighlights}
        className="bg-linear-to-b from-neutral-950 to-neutral-900"
      />

      {/* CTA Final */}
      <section className="bg-linear-to-r from-violet-600 via-violet-500 to-pink-500 py-20">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-fraunces mb-6 text-3xl font-bold text-white sm:text-4xl">
            ¿Listo para comenzar tu viaje artístico?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-white/90">
            Contactanos por WhatsApp y te ayudamos a encontrar la clase perfecta
            para vos o tu familia.
          </p>
          <WhatsAppButton
            href={buildGeneralInquiry(
              'Hola, me interesa conocer más sobre las clases y actividades del centro cultural.'
            )}
            variant="ghost"
            size="lg"
            ariaLabel="Contactar por WhatsApp para consultas generales"
          >
            Consultar por WhatsApp
          </WhatsAppButton>
        </div>
      </section>
    </main>
  )
}
