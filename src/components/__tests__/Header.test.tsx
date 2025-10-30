import { render, screen } from '@testing-library/react'
import { usePathname } from 'next/navigation'
import { describe, expect, it, vi } from 'vitest'
import Header from '../Header'

// Mock next/navigation
vi.mock('next/navigation', () => ({
  usePathname: vi.fn(),
}))

// Mock theme context
vi.mock('@/lib/theme-context', () => ({
  useTheme: () => ({
    theme: 'light',
    toggleTheme: vi.fn(),
  }),
}))

describe('Header', () => {
  it('should render header with logo', () => {
    vi.mocked(usePathname).mockReturnValue('/')
    render(<Header />)

    const logo = screen.getByAltText(/Logo|Espacio Chivilcoy/i)
    expect(logo).toBeInTheDocument()
  })

  it('should render navigation links', () => {
    vi.mocked(usePathname).mockReturnValue('/')
    render(<Header />)

    expect(screen.getByRole('link', { name: /Home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Clases/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Colonia/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Agenda/i })).toBeInTheDocument()
  })

  it('should render theme toggle button', () => {
    vi.mocked(usePathname).mockReturnValue('/')
    render(<Header />)

    const themeButton = screen.getByRole('button', {
      name: /Activar modo oscuro|Activar modo claro/i,
    })
    expect(themeButton).toBeInTheDocument()
  })

  it('should mark active page link', () => {
    vi.mocked(usePathname).mockReturnValue('/clases')
    render(<Header />)

    const clasesLink = screen.getByRole('link', { name: /Clases/i })
    expect(clasesLink).toHaveAttribute('aria-current', 'page')
  })
})
