'use client'

import { useTheme } from '@/lib/theme-context'
import { Moon, Sun } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Clases', href: '/clases' },
  { name: 'Colonia', href: '/colonia' },
  { name: 'Agenda', href: '/agenda' },
  { name: 'Alquiler', href: '/alquiler' },
  { name: 'Contacto', href: '/contacto' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()

  // Evitar hidratación: solo renderizar tema real después de montar
  useEffect(() => {
    setMounted(true)
  }, [])

  // Usar 'light' como fallback durante SSR/hidratación
  const displayTheme = mounted ? theme : 'light'

  // Función para resolver href según contexto
  const resolveHref = (itemHref: string) => {
    if (pathname === '/') {
      // En Home, convertir rutas a anchors
      if (itemHref === '/') return '/'
      return `/#${itemHref.slice(1)}` // /clases -> /#clases
    }
    // En otras páginas, usar rutas normales
    return itemHref
  }

  return (
    <header className="border-border bg-background text-foreground border-b shadow-sm">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between md:h-24">
          {/* Logo y Texto */}
          <Link
            href="/"
            className="group flex items-center gap-3 transition-all duration-300 hover:scale-105 hover:opacity-90 focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:outline-none"
          >
            <div className="relative transition-transform duration-300 group-hover:rotate-3">
              <Image
                src="/logo.jpeg"
                alt="Logo Espacio Chivilcoy"
                width={120}
                height={120}
                className="h-20 w-20 shrink-0 rounded-full object-contain shadow-md transition-shadow duration-300 group-hover:shadow-lg md:h-24 md:w-24"
                priority
              />
            </div>
            <div className="hidden flex-col sm:flex">
              <span className="text-foreground text-sm leading-tight font-semibold md:text-base"></span>
              <span className="text-muted-foreground text-xs leading-tight md:text-sm">
                Arte, movimiento y bienestar
              </span>
            </div>
            <div className="flex flex-col sm:hidden">
              <span className="text-foreground text-sm leading-tight font-semibold"></span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-6 md:flex lg:space-x-8">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={resolveHref(item.href)}
                  className={`group relative px-2 py-1.5 text-sm font-medium transition-all duration-300 focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:outline-none ${
                    isActive
                      ? 'text-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span className="relative z-10">{item.name}</span>
                  {/* Underline animado solo en hover */}
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-linear-to-r from-violet-500 to-pink-500 transition-all duration-300 group-hover:w-full" />
                  {/* Fondo sutil solo en hover */}
                  <span className="bg-muted absolute inset-0 rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
                </Link>
              )
            })}
          </nav>

          {/* Desktop Theme Toggle */}
          <div className="hidden md:block">
            <button
              type="button"
              onClick={toggleTheme}
              className="group border-border bg-background text-foreground hover:border-primary/50 hover:bg-muted focus-visible:ring-ring relative inline-flex items-center justify-center rounded-lg border p-2.5 shadow-sm transition-all duration-300 hover:scale-110 hover:shadow-md focus-visible:ring-2 focus-visible:outline-none"
              aria-label={
                displayTheme === 'light'
                  ? 'Activar modo oscuro'
                  : 'Activar modo claro'
              }
            >
              <span className="relative">
                {displayTheme === 'light' ? (
                  <Moon className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                ) : (
                  <Sun className="h-5 w-5 transition-transform duration-300 group-hover:rotate-90" />
                )}
              </span>
              {/* Efecto de brillo en hover */}
              <span className="pointer-events-none absolute inset-0 rounded-lg bg-linear-to-r from-violet-500/20 to-pink-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="group text-foreground hover:bg-muted relative rounded-md p-2 transition-all duration-300 hover:scale-110 focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:outline-none md:hidden"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Abrir menú principal</span>
            <svg
              className="h-6 w-6 transition-transform duration-300 group-hover:rotate-90"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden">
            <div className="border-border bg-card mt-2 space-y-1 rounded-lg border px-2 pt-2 pb-3">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={resolveHref(item.href)}
                    className={`group relative block rounded-md px-3 py-2.5 text-sm font-medium transition-all duration-300 hover:translate-x-1 hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:outline-none ${
                      isActive
                        ? 'bg-muted text-foreground'
                        : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <span className="relative flex items-center">
                      {item.name}
                      {/* Indicador de activo */}
                      {isActive && (
                        <span className="bg-primary ml-2 h-1.5 w-1.5 rounded-full transition-all duration-300" />
                      )}
                    </span>
                  </Link>
                )
              })}
              {/* Mobile Theme Toggle */}
              <button
                type="button"
                onClick={() => {
                  toggleTheme()
                  setMobileMenuOpen(false)
                }}
                className="group border-border bg-background text-foreground hover:border-primary/50 hover:bg-muted focus-visible:ring-ring relative flex w-full items-center rounded-md border px-3 py-2.5 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-md focus-visible:ring-2 focus-visible:outline-none"
                aria-label={
                  displayTheme === 'light'
                    ? 'Activar modo oscuro'
                    : 'Activar modo claro'
                }
              >
                {displayTheme === 'light' ? (
                  <>
                    <Moon className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                    <span>Modo oscuro</span>
                  </>
                ) : (
                  <>
                    <Sun className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-90" />
                    <span>Modo claro</span>
                  </>
                )}
                {/* Efecto de brillo en hover */}
                <span className="pointer-events-none absolute inset-0 rounded-md bg-linear-to-r from-violet-500/20 to-pink-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
