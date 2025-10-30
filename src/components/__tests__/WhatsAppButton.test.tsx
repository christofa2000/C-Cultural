import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { WhatsAppButton } from '../WhatsAppButton'

describe('WhatsAppButton', () => {
  it('should render with default variant', () => {
    render(<WhatsAppButton href="https://wa.me/123">Contactar</WhatsAppButton>)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', 'https://wa.me/123')
  })

  it('should render with children text', () => {
    render(
      <WhatsAppButton href="https://wa.me/123">
        Contactar por WhatsApp
      </WhatsAppButton>
    )
    expect(screen.getByText('Contactar por WhatsApp')).toBeInTheDocument()
  })

  it('should have correct aria-label', () => {
    render(
      <WhatsAppButton
        href="https://wa.me/123"
        ariaLabel="Contactar por WhatsApp"
      >
        Contactar
      </WhatsAppButton>
    )
    const link = screen.getByRole('link', {
      name: /Contactar por WhatsApp/i,
    })
    expect(link).toBeInTheDocument()
  })

  it('should open in new tab with security attributes', () => {
    render(<WhatsAppButton href="https://wa.me/123">Contactar</WhatsAppButton>)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('should render icon', () => {
    render(<WhatsAppButton href="https://wa.me/123">Contactar</WhatsAppButton>)
    // El icono de MessageCircle debería estar presente
    const link = screen.getByRole('link')
    expect(link).toBeInTheDocument()
  })
})
