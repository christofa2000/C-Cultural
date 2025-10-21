import ColonyCard from '@/components/ColonyCard'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { colony } from '@/data/colony'
import { buildColonyPreEnroll } from '@/lib/whatsapp'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Colonia | Centro Cultural Chivilcoy',
  description:
    'Colonias de verano e invierno para niños de 4 a 12 años. Actividades recreativas, deportivas y artísticas.',
}

export default function ColonyPage() {
  const summerColony = colony.find((c) => c.season === 'verano')
  const winterColony = colony.find((c) => c.season === 'invierno')

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <Header />

      <section className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <h1 className="bg-linear-to-r from-violet-600 via-violet-500 to-pink-500 bg-clip-text font-serif text-4xl font-bold text-transparent">
          Colonia
        </h1>
        <p className="mt-2 opacity-80">
          Temporadas de verano e invierno · grupos por edades
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {/* Colonia de Verano */}
          {summerColony && (
            <ColonyCard
              season="verano"
              title="Colonia de Verano"
              description={summerColony.description}
              ages={summerColony.ages}
              dates={summerColony.dates}
              images={summerColony.images || []}
              whatsappHref={buildColonyPreEnroll({
                kidName: '',
                age: '',
                season: 'verano',
              })}
            />
          )}

          {/* Colonia de Invierno */}
          {winterColony && (
            <ColonyCard
              season="invierno"
              title="Colonia de Invierno"
              description={winterColony.description}
              ages={winterColony.ages}
              dates={winterColony.dates}
              images={winterColony.images || []}
              whatsappHref={buildColonyPreEnroll({
                kidName: '',
                age: '',
                season: 'invierno',
              })}
            />
          )}
        </div>

        {/* Información adicional */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-neutral-900 p-8">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            Información General
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="mb-3 text-lg font-medium text-neutral-200">
                ¿Qué incluye?
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
                  Actividades recreativas y deportivas
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
                  Talleres de arte y expresión
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
                  Almuerzo incluido
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
                  Espacios seguros y supervisados
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-lg font-medium text-neutral-200">
                Requisitos
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
                  Certificado médico actualizado
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
                  Ropa cómoda y calzado deportivo
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
                  Protector solar (verano)
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
                  Abrigo adecuado (invierno)
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
