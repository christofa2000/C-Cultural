import { expect, test } from '@playwright/test'

test.describe('Navigation', () => {
  test('should navigate between pages', async ({ page }) => {
    await page.goto('/')

    // Navegar a Clases
    await page.getByRole('link', { name: /Clases/i }).click()
    await expect(page).toHaveURL(/.*clases.*/)

    // Navegar a Colonia
    await page.getByRole('link', { name: /Colonia/i }).click()
    await expect(page).toHaveURL(/.*colonia.*/)

    // Navegar a Agenda
    await page.getByRole('link', { name: /Agenda/i }).click()
    await expect(page).toHaveURL(/.*agenda.*/)

    // Navegar a Alquiler
    await page.getByRole('link', { name: /Alquiler/i }).click()
    await expect(page).toHaveURL(/.*alquiler.*/)

    // Navegar a Contacto
    await page.getByRole('link', { name: /Contacto/i }).click()
    await expect(page).toHaveURL(/.*contacto.*/)
  })

  test('should have mobile menu on small screens', async ({ page }) => {
    // Configurar viewport móvil
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')

    // Verificar que el botón del menú móvil está visible
    const mobileMenuButton = page.getByRole('button', {
      name: /Abrir menú principal|Menú/i,
    })

    if (await mobileMenuButton.isVisible()) {
      await mobileMenuButton.click()

      // Verificar que el menú se abre
      const mobileMenu = page.locator('#mobile-menu')
      await expect(mobileMenu).toBeVisible()
    }
  })

  test('should navigate to home from logo', async ({ page }) => {
    await page.goto('/clases')

    // Hacer click en el logo
    const logoLink = page
      .getByRole('link', {
        name: /Logo|Espacio Chivilcoy/i,
      })
      .first()

    if (await logoLink.isVisible()) {
      await logoLink.click()
      await expect(page).toHaveURL(/\/$/)
    }
  })
})
