import { buildGeneralInquiry } from '@/lib/whatsapp'
import Link from 'next/link'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Clases', href: '/clases' },
  { name: 'Colonia', href: '/colonia' },
  { name: 'Agenda', href: '/agenda' },
  { name: 'Alquiler', href: '/alquiler' },
  { name: 'Contacto', href: '/contacto' },
]

const socialLinks = [
  {
    name: 'Facebook',
    href: '#',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: '#',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.98-.49-.98-.98s.49-.98.98-.98.98.49.98.98-.49.98-.98.98zm-3.323 9.781c-2.026 0-3.323-1.297-3.323-3.323s1.297-3.323 3.323-3.323 3.323 1.297 3.323 3.323-1.297 3.323-3.323 3.323z" />
      </svg>
    ),
  },
]

export default function Footer() {
  const whatsappHref = buildGeneralInquiry(
    'Hola, me interesa conocer más sobre las actividades del centro cultural.'
  )

  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Información del centro */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Centro Cultural Chivilcoy
            </h3>
            <p className="mb-4 text-sm leading-relaxed">
              Espacio cultural dedicado a promover las artes y la expresión
              creativa en nuestra comunidad.
            </p>
            <div className="text-sm">
              <p className="mb-1">📍 Dirección: [Dirección del centro]</p>
              <p className="mb-1">📞 Teléfono: [Número de teléfono]</p>
              <p>✉️ Email: [email@centro.com]</p>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Enlaces rápidos
            </h3>
            <nav className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-sm transition-colors duration-200 hover:text-white focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:outline-none"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contacto y redes */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Contacto</h3>
            <div className="space-y-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg bg-linear-to-r from-violet-600 to-pink-600 px-4 py-2 text-white transition-all duration-200 hover:from-violet-700 hover:to-pink-700 focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:outline-none"
              >
                <svg
                  className="mr-2 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                WhatsApp
              </a>

              <div className="flex space-x-4">
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="p-2 text-neutral-400 transition-colors duration-200 hover:text-white focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:outline-none"
                    aria-label={`Seguir en ${item.name}`}
                  >
                    <item.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Línea divisoria y copyright */}
        <div className="mt-8 border-t border-neutral-800 pt-8">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="text-sm text-neutral-400">
              © {new Date().getFullYear()} Centro Cultural Chivilcoy. Todos los
              derechos reservados.
            </p>
            <p className="mt-2 text-sm text-neutral-400 md:mt-0">
              Hecho con ❤️ para nuestra comunidad
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
