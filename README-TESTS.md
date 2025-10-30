# Guía de Tests - Centro Cultural Chivilcoy

Este proyecto incluye tests unitarios con **Vitest** y tests end-to-end (E2E) con **Playwright**.

## 🧪 Tests Unitarios (Vitest)

### Ejecutar tests

```bash
# Ejecutar todos los tests
npm test

# Ejecutar en modo watch
npm test -- --watch

# Ejecutar con UI interactiva
npm run test:ui

# Generar reporte de cobertura
npm run test:coverage
```

### Estructura de tests unitarios

- `src/lib/__tests__/whatsapp.test.ts` - Tests para helpers de WhatsApp
- `src/components/__tests__/Header.test.tsx` - Tests para el componente Header
- `src/components/__tests__/WhatsAppButton.test.tsx` - Tests para WhatsAppButton

### Agregar nuevos tests

1. Crear archivos `.test.ts` o `.test.tsx` junto al código fuente
2. Usar `describe` y `it` de Vitest
3. Importar `expect` de Vitest para aserciones
4. Usar `@testing-library/react` para tests de componentes

Ejemplo:

```typescript
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import MyComponent from '../MyComponent'

describe('MyComponent', () => {
  it('should render correctly', () => {
    render(<MyComponent />)
    expect(screen.getByText('Hello')).toBeInTheDocument()
  })
})
```

## 🎭 Tests E2E (Playwright)

### Instalación

Primera vez que se ejecutan los tests, instalar los navegadores:

```bash
npx playwright install
```

### Ejecutar tests E2E

```bash
# Ejecutar todos los tests E2E
npm run test:e2e

# Ejecutar con UI interactiva
npm run test:e2e:ui

# Ejecutar en modo headed (con navegador visible)
npm run test:e2e:headed
```

### Estructura de tests E2E

- `e2e/home.spec.ts` - Tests para la página home
- `e2e/clases.spec.ts` - Tests para la página de clases
- `e2e/navigation.spec.ts` - Tests de navegación entre páginas

### Agregar nuevos tests E2E

1. Crear archivos `.spec.ts` en la carpeta `e2e/`
2. Usar `test` y `test.describe` de Playwright
3. Usar `page.goto()` para navegar
4. Usar `expect` de Playwright para aserciones

Ejemplo:

```typescript
import { expect, test } from '@playwright/test'

test.describe('My Page', () => {
  test('should load correctly', async ({ page }) => {
    await page.goto('/my-page')
    await expect(page).toHaveTitle(/My Page/i)
  })
})
```

## 📊 Reportes

### Vitest

Los reportes de cobertura se generan en `coverage/` y se pueden ver con:

```bash
npm run test:coverage
```

### Playwright

Los reportes HTML se generan en `playwright-report/` después de ejecutar los tests. Para verlos:

```bash
npm run test:e2e:ui
```

## ✅ Checklist de Tests

### Tests Unitarios

- [x] Helpers de WhatsApp (`whatsapp.test.ts`)
- [x] Componente Header (`Header.test.tsx`)
- [x] Componente WhatsAppButton (`WhatsAppButton.test.tsx`)

### Tests E2E

- [x] Carga de página home
- [x] Navegación entre páginas
- [x] Toggle de tema
- [x] Filtros de clases
- [x] Enlaces de WhatsApp

## 🔧 Configuración

### Vitest

Configurado en `vitest.config.ts`:

- Environment: `jsdom`
- Setup files: `src/test/setup.ts`
- Globals habilitados
- Alias `@` configurado

### Playwright

Configurado en `playwright.config.ts`:

- Base URL: `http://localhost:3000`
- Navegadores: Chromium, Firefox, WebKit
- Mobile: Chrome y Safari
- Web server: Inicia automáticamente `npm run dev`

## 🚀 CI/CD

Para ejecutar en CI:

```bash
# Tests unitarios
npm test -- --run

# Tests E2E
npm run test:e2e
```

Los tests E2E se ejecutarán en modo headless automáticamente en CI.
