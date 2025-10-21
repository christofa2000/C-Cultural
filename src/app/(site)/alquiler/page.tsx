import Footer from '@/components/Footer'
import Header from '@/components/Header'
import RoomGallery from '@/components/RoomGallery'
import { rooms } from '@/data/rooms'
import { buildRoomBooking } from '@/lib/whatsapp'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Alquiler del Salón | Centro Cultural Chivilcoy',
  description:
    'Alquila nuestro salón principal con piso de madera, espejos y equipamiento de sonido. Ideal para danza, teatro y eventos.',
}

export default function AlquilerPage() {
  const mainRoom = rooms.find((room) => room.id === '1') // Salón Principal
  const patioRoom = rooms.find((room) => room.id === '2') // Patio Verde

  const whatsappHref = buildRoomBooking({
    date: '',
    time: '',
    activity: '',
  })

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <Header />

      <section className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <h1 className="bg-linear-to-r from-violet-600 via-violet-500 to-pink-500 bg-clip-text font-serif text-4xl font-bold text-transparent">
          Alquiler del Salón
        </h1>
        <p className="mt-2 opacity-80">
          Espacio amplio con piso de madera y espejos · ideal para danza, teatro
          y eventos
        </p>

        {/* Salón Principal */}
        {mainRoom && (
          <div className="mt-8 grid gap-8 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <RoomGallery
                images={mainRoom.images || []}
                altBase="Salón principal"
              />
            </div>
            <aside className="rounded-2xl border border-white/10 bg-neutral-900 p-6 lg:col-span-2">
              <h2 className="mb-4 text-2xl font-semibold text-white">
                Especificaciones
              </h2>

              <div className="mb-6">
                <h3 className="mb-3 text-lg font-medium text-neutral-200">
                  Características principales
                </h3>
                <ul className="space-y-2 text-sm text-neutral-300">
                  {mainRoom.features?.map((feature, index) => (
                    <li key={index} className="flex items-center">
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
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="mb-3 text-lg font-medium text-neutral-200">
                  Capacidad
                </h3>
                <p className="text-sm text-neutral-300">
                  {mainRoom.capacity
                    ? `Hasta ${mainRoom.capacity} personas`
                    : 'Capacidad variable según actividad'}
                </p>
              </div>

              <div className="mb-6">
                <h3 className="mb-3 text-lg font-medium text-neutral-200">
                  Equipamiento incluido
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
                    Sistema de sonido básico
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
                    Iluminación ajustable
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
                    Baños y vestuarios
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
                    Calefacción/aire acondicionado
                  </li>
                </ul>
              </div>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 font-semibold text-[#44209F] transition-all duration-200 hover:bg-neutral-100 focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:outline-none"
                aria-label="Consultar/Reservar por WhatsApp"
              >
                <svg
                  className="mr-2 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                Consultar/Reservar por WhatsApp
              </a>
            </aside>
          </div>
        )}

        {/* Patio Verde */}
        {patioRoom && (
          <div className="mt-12 rounded-2xl border border-white/10 bg-neutral-900 p-8">
            <h2 className="mb-4 text-2xl font-semibold text-white">
              Patio Verde
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <p className="mb-4 text-neutral-300">{patioRoom.description}</p>
                <ul className="space-y-2 text-sm text-neutral-300">
                  {patioRoom.features?.map((feature, index) => (
                    <li key={index} className="flex items-center">
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
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              {patioRoom.images && patioRoom.images.length > 0 && (
                <div className="grid grid-cols-2 gap-4">
                  {patioRoom.images.slice(0, 2).map((image, index) => (
                    <div
                      key={index}
                      className="relative aspect-square overflow-hidden rounded-lg"
                    >
                      <img
                        src={image}
                        alt={`Patio verde - imagen ${index + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Información adicional */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-neutral-900 p-8">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            Información sobre Alquileres
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="mb-3 text-lg font-medium text-neutral-200">
                Tarifas y Horarios
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
                  Tarifas por hora o por evento
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
                  Descuentos por alquileres prolongados
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
                  Disponible fines de semana
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
                  Horarios flexibles según necesidad
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-lg font-medium text-neutral-200">
                Condiciones
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
                  Reserva con anticipación mínima de 48hs
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
                  Seña del 50% para confirmar
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
                  Devolución del espacio en condiciones
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
                  Seguro de responsabilidad civil
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
