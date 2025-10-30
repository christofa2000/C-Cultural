import ContactCard from '@/components/ContactCard'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { buildGeneralInquiry } from '@/lib/whatsapp'
import { Bike, Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react'

export default function ContactPage() {
  const whatsappHref = buildGeneralInquiry(
    'Hola, me interesa conocer más sobre las actividades del centro cultural.'
  )

  return (
    <>
      <Header />
      <main className="bg-background text-foreground min-h-screen">
        <section className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="bg-white bg-linear-to-r via-violet-500 to-pink-500 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
              Contacto
            </h1>
            <p className="text-muted-foreground mt-4 text-lg">
              Estamos en Chivilcoy 3051, CABA
            </p>
            <p className="mt-1 text-sm text-pink-400">
              🚲 Espacio para bicicletas
            </p>
            <p className="text-muted-foreground mt-2">
              ¡Contactanos y te ayudamos a encontrar la actividad perfecta para
              vos!
            </p>
          </div>

          {/* Tarjetas de contacto */}
          <div className="mb-12">
            <h2 className="text-foreground mb-6 text-2xl font-semibold">
              Formas de contacto
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

              {/* Nuevo: espacio para bicicletas */}
              <ContactCard
                icon={<Bike className="h-6 w-6 text-pink-400" />}
                label="Espacio para bicicletas"
                href="#"
              />
            </div>
          </div>

          {/* Horarios de atención */}
          <div className="border-border bg-card mb-12 rounded-lg border p-6">
            <h3 className="text-foreground mb-4 text-xl font-semibold">
              Horarios de atención
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="text-foreground font-medium">
                  Clases regulares
                </h4>
                <p className="text-muted-foreground text-sm">
                  Lunes a Viernes: 17:00 - 21:00
                  <br />
                  Sábados: 10:00 - 18:00
                </p>
              </div>
              <div>
                <h4 className="text-foreground font-medium">Administración</h4>
                <p className="text-muted-foreground text-sm">
                  Lunes a Viernes: 10:00 - 19:00
                  <br />
                  Sábados: 10:00 - 14:00
                </p>
              </div>
            </div>
          </div>

          {/* Mapa */}
          <div className="mb-12">
            <h2 className="text-foreground mb-6 text-2xl font-semibold">
              Ubicación
            </h2>
            <div className="border-border overflow-hidden rounded-2xl border shadow-lg shadow-violet-900/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.932423378647!2d-58.508475090190814!3d-34.60587027284075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb62cff9ea3d9%3A0x4da9b27a898df0d9!2sChivilcoy%203051%2C%20C1417%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1753324312126!5m2!1ses!2sar"
                width="100%"
                height="450"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación del Centro Cultural Chivilcoy en Google Maps"
                className="block"
              />
            </div>
            <p className="text-muted-foreground mt-4 text-center text-sm">
              <MapPin className="mr-2 inline h-4 w-4" />
              Chivilcoy 3051, Ciudad Autónoma de Buenos Aires
              <br />
              <span className="text-pink-400">🚲 Espacio para bicicletas</span>
            </p>
          </div>

          {/* CTA Final */}
          <div className="rounded-lg border border-violet-500/30 bg-linear-to-r from-violet-600/10 to-pink-600/10 p-8 text-center">
            <h3 className="text-foreground mb-4 text-2xl font-semibold">
              ¿Tenés alguna consulta?
            </h3>
            <p className="text-muted-foreground mb-6">
              Escribinos por WhatsApp y te respondemos al instante. Estamos aquí
              para ayudarte a encontrar la actividad perfecta.
            </p>
            <WhatsAppButton
              href={whatsappHref}
              variant="primary"
              size="lg"
              ariaLabel="Escribir por WhatsApp para consultas generales"
            >
              Escribinos por WhatsApp
            </WhatsAppButton>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
