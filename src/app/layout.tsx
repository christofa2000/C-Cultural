import type { Metadata } from 'next'
import { Fraunces, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  display: 'swap',
})

const plusJakarta = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Centro Cultural Chivilcoy',
  description:
    'Centro cultural con clases para adultxs e infancias, colonia de verano e invierno, y alquiler de salón. Inscripciones por WhatsApp.',
  metadataBase: new URL('https://centroculturalchivilcoy.com'),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-AR">
      <body
        className={`${fraunces.variable} ${plusJakarta.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
