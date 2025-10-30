import { expect, test } from '@playwright/test'

test.describe('Home Page', () => {
  test('should load the home page', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Centro Cultural Chivilcoy/i)
  })

  test('should display hero section with overlay text', async ({ page }) => {
    await page.goto('/')

    // Verificar que el hero está presente
    const heroText = page.getByText(
      /Un espacio para crear, aprender, explorar/i
    )
    await expect(heroText).toBeVisible()
  })

  test('should navigate to classes page when clicking "Ver Clases"', async ({
    page,
  }) => {
    await page.goto('/')

    // Buscar el botón o enlace "Ver Clases"
    const verClasesLink = page.getByRole('link', { name: /Ver Clases/i })
    await expect(verClasesLink).toBeVisible()

    await verClasesLink.click()

    // Verificar que estamos en la página de clases o en la sección
    await expect(page).toHaveURL(/.*clases.*/)
  })

  test('should have accessible header navigation', async ({ page }) => {
    await page.goto('/')

    // Verificar que el header está presente
    const header = page.getByRole('banner')
    await expect(header).toBeVisible()

    // Verificar navegación principal
    const navigation = page.getByRole('navigation')
    await expect(navigation).toBeVisible()

    // Verificar que los enlaces de navegación están presentes
    const homeLink = page.getByRole('link', { name: /Home/i })
    const clasesLink = page.getByRole('link', { name: /Clases/i })
    const coloniaLink = page.getByRole('link', { name: /Colonia/i })
    const agendaLink = page.getByRole('link', { name: /Agenda/i })

    await expect(homeLink).toBeVisible()
    await expect(clasesLink).toBeVisible()
    await expect(coloniaLink).toBeVisible()
    await expect(agendaLink).toBeVisible()
  })

  test('should toggle theme mode', async ({ page }) => {
    await page.goto('/')

    // Buscar el botón de toggle de tema
    const themeButton = page.getByRole('button', {
      name: /Activar modo oscuro|Activar modo claro/i,
    })

    await expect(themeButton).toBeVisible()

    // Verificar estado inicial (claro)
    const html = page.locator('html')
    await expect(html).not.toHaveClass(/dark/)

    // Hacer click para cambiar a oscuro
    await themeButton.click()

    // Verificar que se agregó la clase dark
    await expect(html).toHaveClass(/dark/)
  })

  test('should have footer with copyright', async ({ page }) => {
    await page.goto('/')

    const footer = page.getByRole('contentinfo')
    await expect(footer).toBeVisible()

    const copyright = page.getByText(/Centro Cultural Chivilcoy/i)
    await expect(copyright).toBeVisible()
  })
})
