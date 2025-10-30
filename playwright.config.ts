import { defineConfig, devices } from '@playwright/test'

/**
 * Configuración de Playwright para tests E2E
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './e2e',
  /* Ejecutar tests en paralelo */
  fullyParallel: true,
  /* Fallar el build en CI si accidentalmente dejaste test.only */
  forbidOnly: !!process.env.CI,
  /* Reintentar en CI solo si el build falla */
  retries: process.env.CI ? 2 : 0,
  /* Workers en CI, en local dejar default */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter a usar */
  reporter: 'html',
  /* Opciones compartidas para todos los proyectos */
  use: {
    /* Base URL para usar en acciones como `await page.goto('/')` */
    baseURL: 'http://localhost:3000',
    /* Recolectar trace cuando se reproduce un test fallido. */
    trace: 'on-first-retry',
    /* Capturas de pantalla solo cuando fallan */
    screenshot: 'only-on-failure',
  },

  /* Configurar proyectos para cada navegador */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    /* Tests en mobile viewports. */
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },
  ],

  /* Ejecutar el servidor de desarrollo antes de iniciar los tests */
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
  },
})
