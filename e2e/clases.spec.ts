import { expect, test } from '@playwright/test'

test.describe('Clases Page', () => {
  test('should load the classes page', async ({ page }) => {
    await page.goto('/clases')
    await expect(page).toHaveTitle(/Clases|Centro Cultural/i)
  })

  test('should display classes list', async ({ page }) => {
    await page.goto('/clases')

    // Verificar que hay clases mostradas
    const classCards = page
      .locator('[data-testid="class-card"]')
      .or(
        page.locator('article').filter({ hasText: /danza|teatro|música|yoga/i })
      )

    await expect(classCards.first()).toBeVisible()
  })

  test('should filter classes by audience', async ({ page }) => {
    await page.goto('/clases')

    // Buscar los botones de filtro de audiencia
    const adultxsButton = page.getByRole('button', { name: /Adultxs/i })
    const infanciasButton = page.getByRole('button', { name: /Infancias/i })

    // Si los botones están presentes, probar el filtro
    if (await adultxsButton.isVisible()) {
      await adultxsButton.click()
      // Verificar que se aplicó el filtro
      await expect(adultxsButton).toHaveAttribute('aria-pressed', 'true')
    }
  })

  test('should navigate to class detail page', async ({ page }) => {
    await page.goto('/clases')

    // Buscar el primer enlace a detalle de clase
    const classLink = page
      .getByRole('link', { name: /Ver detalle|Ver más/i })
      .first()

    if (await classLink.isVisible()) {
      await classLink.click()
      // Verificar que estamos en una página de detalle
      await expect(page).toHaveURL(/.*clases\/.*/)
    }
  })

  test('should have WhatsApp CTA in class cards', async ({ page }) => {
    await page.goto('/clases')

    // Buscar enlaces de WhatsApp en las cards
    const whatsappLinks = page.getByRole('link', {
      name: /WhatsApp|Whatsapp/i,
    })

    // Verificar que al menos un link de WhatsApp está presente
    const count = await whatsappLinks.count()
    expect(count).toBeGreaterThan(0)

    // Verificar que los enlaces tienen el formato correcto
    if (count > 0) {
      const firstLink = whatsappLinks.first()
      const href = await firstLink.getAttribute('href')
      expect(href).toContain('wa.me')
    }
  })
})
