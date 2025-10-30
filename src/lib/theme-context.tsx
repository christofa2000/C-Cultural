'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

// Valores por defecto para el contexto (fallback cuando Provider no está disponible)
const defaultThemeContext: ThemeContextType = {
  theme: 'light',
  toggleTheme: () => {
    console.warn('Toggle theme llamado pero ThemeProvider no está disponible')
  },
}

const ThemeContext = createContext<ThemeContextType>(defaultThemeContext)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Leer tema guardado o usar preferencia del sistema
    const savedTheme = localStorage.getItem('theme') as Theme | null
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
      .matches
      ? 'dark'
      : 'light'
    const initialTheme = savedTheme || systemTheme

    setTheme(initialTheme)
    // Aplicar clase dark al html inmediatamente
    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }

  // Evitar flash de contenido no estilizado
  if (!mounted) {
    return <>{children}</>
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  const [mounted, setMounted] = useState(false)

  // Si estamos usando el contexto default (Provider no montado),
  // crear un estado local que siempre empiece con 'light' para evitar hidratación
  const [localTheme, setLocalTheme] = useState<Theme>('light')

  // Verificar si estamos usando el contexto default comparando el toggleTheme
  // Si es la función de warning, significa que estamos usando el default
  const isUsingDefault = context.toggleTheme.toString().includes('console.warn')

  // Sincronizar con localStorage solo después de montar (cliente)
  useEffect(() => {
    setMounted(true)
    if (isUsingDefault && typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as Theme | null
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light'
      const initialTheme = savedTheme || systemTheme

      if (initialTheme !== localTheme) {
        setLocalTheme(initialTheme)
      }
      // Aplicar tema local al DOM
      document.documentElement.classList.toggle('dark', initialTheme === 'dark')
    }
  }, [isUsingDefault]) // Solo una vez al montar

  useEffect(() => {
    if (mounted && isUsingDefault && typeof window !== 'undefined') {
      // Aplicar tema local al DOM cuando cambia
      document.documentElement.classList.toggle('dark', localTheme === 'dark')
    }
  }, [mounted, isUsingDefault, localTheme])

  if (isUsingDefault) {
    return {
      theme: mounted ? localTheme : 'light', // Siempre 'light' durante SSR/hidratación
      toggleTheme: () => {
        const newTheme = localTheme === 'light' ? 'dark' : 'light'
        setLocalTheme(newTheme)
        if (typeof window !== 'undefined') {
          localStorage.setItem('theme', newTheme)
          document.documentElement.classList.toggle('dark', newTheme === 'dark')
        }
      },
    }
  }

  return context
}
