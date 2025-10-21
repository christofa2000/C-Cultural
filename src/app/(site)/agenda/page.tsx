import EventList from '@/components/EventList'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { events } from '@/data/events'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Agenda | Centro Cultural Chivilcoy',
  description:
    'Próximos talleres, eventos y actividades en el Centro Cultural Chivilcoy.',
}

export default function AgendaPage() {
  // Ordenar eventos por fecha (futuros primero)
  const sortedEvents = [...events].sort(
    (a, b) => new Date(a.dateISO).getTime() - new Date(b.dateISO).getTime()
  )

  return (
    <main className="bg-background text-foreground min-h-screen">
      <Header />

      <section className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <h1 className="bg-linear-to-r from-violet-600 via-violet-500 to-pink-500 bg-clip-text font-serif text-4xl font-bold text-transparent">
          Agenda
        </h1>
        <p className="mt-2 opacity-80">
          Próximos talleres y actividades en el Centro Cultural
        </p>

        <div className="mt-8">
          <EventList events={sortedEvents} />
        </div>

        {/* Información adicional */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-neutral-900 p-8">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            Información sobre Eventos
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="mb-3 text-lg font-medium text-neutral-200">
                ¿Cómo participar?
              </h3>
              <ul className="space-y-2 text-sm text-neutral-300">
                <li className="flex items-center">
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
                  Consultá disponibilidad por WhatsApp
                </li>
                <li className="flex items-center">
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
                  Reservá tu lugar con anticipación
                </li>
                <li className="flex items-center">
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
                  Confirmá asistencia 24hs antes
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-lg font-medium text-neutral-200">
                Políticas
              </h3>
              <ul className="space-y-2 text-sm text-neutral-300">
                <li className="flex items-center">
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
                  Cancelación hasta 48hs antes
                </li>
                <li className="flex items-center">
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
                  Llegar 10 minutos antes
                </li>
                <li className="flex items-center">
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
                  Respetar el espacio y a otros participantes
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
