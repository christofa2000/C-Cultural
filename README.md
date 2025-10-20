# 🎭 Centro Cultural Chivilcoy

Un sitio web moderno y accesible para el Centro Cultural Chivilcoy, desarrollado con Next.js 15, TypeScript y Tailwind CSS v4. El proyecto incluye un sistema completo de gestión de clases, filtros avanzados, integración con WhatsApp y una identidad visual distintiva con gradientes violeta-rosa.

## ✨ Características Principales

### 🎨 **Identidad Visual**

- **Colores**: Gradientes violeta-rosa (`from-violet-600 to-pink-600`)
- **Tipografía**: Fraunces para títulos, Plus Jakarta Sans para texto
- **Tema**: Oscuro con `bg-neutral-950` y `text-neutral-100`
- **Accesibilidad**: Cumple estándares AA con foco visible y navegación por teclado

### 📱 **Diseño Responsive**

- **Mobile-first**: Optimizado para dispositivos móviles
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Grid adaptativo**: 1 col móvil → 2 cols tablet → 3 cols desktop

### 🔗 **Integración WhatsApp**

- **CTAs inteligentes**: Mensajes prellenados según contexto
- **Inscripciones directas**: Por clase y horario específico
- **Consultas generales**: Para información del centro cultural
- **Seguridad**: `target="_blank"` y `rel="noopener noreferrer"`

## 🏗️ Arquitectura del Proyecto

### 📁 **Estructura de Directorios**

```
src/
├── app/
│   ├── (site)/
│   │   ├── page.tsx              # Home principal
│   │   ├── clases/
│   │   │   ├── page.tsx          # Listado de clases con filtros
│   │   │   └── [id]/
│   │   │       └── page.tsx      # Ficha detallada de clase
│   │   ├── colonia/              # Colonia de verano/invierno
│   │   ├── agenda/               # Eventos y actividades
│   │   ├── alquiler/             # Alquiler de espacios
│   │   └── contacto/             # Información de contacto
│   ├── globals.css               # Estilos globales
│   └── layout.tsx                # Layout principal
├── components/
│   ├── Header.tsx                # Navegación principal
│   ├── Footer.tsx                # Pie de página
│   ├── HeroSpotlight.tsx         # Hero estático (sin carousel)
│   ├── HighlightsRail.tsx        # Carril de destacados manual
│   ├── WhatsAppButton.tsx        # Botón de WhatsApp reutilizable
│   ├── FilterChips.tsx           # Sistema de filtros
│   ├── ClassCard.tsx             # Tarjeta de clase
│   └── Section.tsx               # Componente de sección
├── data/
│   ├── classes.ts                # Datos de clases
│   ├── schedules.ts              # Horarios de clases
│   ├── teachers.ts               # Información de docentes
│   ├── rooms.ts                  # Espacios disponibles
│   ├── colony.ts                 # Datos de colonia
│   └── events.ts                 # Eventos y actividades
└── lib/
    ├── types.ts                  # Tipos TypeScript
    ├── whatsapp.ts               # Helpers de WhatsApp
    └── utils.ts                  # Utilidades generales
```

## 🧩 Componentes Implementados

### 🧭 **Header.tsx**

- **Navegación completa**: Home, Clases, Colonia, Agenda, Alquiler, Contacto
- **Menú móvil**: Accesible con `aria-expanded` y `aria-controls`
- **CTA WhatsApp**: En desktop y móvil
- **Logo**: Con gradiente violeta-rosa

### 🦶 **Footer.tsx**

- **Información del centro**: Dirección, teléfono, email
- **Enlaces rápidos**: Navegación secundaria
- **Redes sociales**: Facebook e Instagram (placeholders)
- **CTA WhatsApp**: Prominente para contacto

### 🎯 **FilterChips.tsx**

- **Filtros múltiples**: Audiencia, días, docente, nivel, disciplina
- **Accesibilidad**: `fieldset`/`legend` y `aria-pressed`
- **Estados visuales**: Chips activos/inactivos con gradientes
- **Botón limpiar**: Para resetear todos los filtros

### 🎴 **ClassCard.tsx**

- **Imagen optimizada**: Con `next/image` y `loading="lazy"`
- **Badges informativos**: Audiencia, nivel, disciplina
- **Información del docente**: Avatar y especialidades
- **Horarios**: Chips con días y horarios disponibles
- **CTA**: "Ver detalle" con navegación

## 📄 Páginas Implementadas

### 🏠 **Home (`/`)**

- **Hero estático**: Sin carousel automático (HeroSpotlight)
- **Clases destacadas**: Rail manual accesible
- **Próximos eventos**: Lista de eventos
- **Colonia**: Información de verano e invierno
- **Alquiler de espacios**: Salón y patio
- **CTA final**: WhatsApp para consultas generales

### 📚 **Clases (`/clases`)**

- **Sistema de filtros**: Completo y funcional
- **Grid responsive**: Adaptativo según dispositivo
- **Estado vacío**: Mensaje claro con botón "Ver todas"
- **Contador**: Resultados filtrados vs total
- **Integración**: Con datos locales sin backend

### 📖 **Detalle de Clase (`/clases/[id]`)**

- **Breadcrumb**: Navegación contextual
- **Galería**: Imagen principal + adicionales
- **Información completa**: Docente, descripción, requisitos
- **Horarios**: Lista con CTAs individuales de WhatsApp
- **CTA principal**: Para consultas generales

## 🎨 Sistema de Diseño

### 🎨 **Paleta de Colores**

```css
/* Primarios */
--violet-600: #7c3aed --violet-500: #8b5cf6 --pink-600: #db2777
  --pink-500: #ec4899 /* Neutros */ --neutral-950: #0a0a0a
  --neutral-900: #171717 --neutral-800: #262626 --neutral-700: #404040
  --neutral-400: #a3a3a3 --neutral-300: #d4d4d4 --neutral-100: #f5f5f5;
```

### 📐 **Espaciado y Layout**

- **Container**: `max-w-7xl` con padding responsivo
- **Padding**: `px-4 md:px-6 lg:px-8`
- **Gaps**: `gap-6` para grids, `space-y-4` para stacks
- **Bordes**: `border-white/10` para cards, `border-neutral-800` para secciones

### 🎯 **Estados Interactivos**

- **Hover**: Transiciones suaves con `duration-200`
- **Focus**: `focus-visible:ring-2 focus-visible:ring-violet-400`
- **Active**: Gradientes más intensos
- **Disabled**: Opacidad reducida

## 📊 Gestión de Datos

### 🗃️ **Estructura de Datos**

```typescript
// Clase
interface Class {
  id: string
  title: string
  audience: 'adultxs' | 'infancias'
  level?: 'inic' | 'inter' | 'avanz'
  discipline?: string
  description?: string
  teacherId: string
  images?: string[]
  requirements?: string[]
  price?: string
}

// Horario
interface ClassSchedule {
  id: string
  classId: string
  weekday: 0 | 1 | 2 | 3 | 4 | 5 | 6
  start: string // "HH:mm"
  end: string // "HH:mm"
  spots?: number
  available?: boolean
}
```

### 🔍 **Sistema de Filtros**

- **Audiencia**: Adultxs / Infancias
- **Días**: Lunes a Domingo
- **Docente**: Lista dinámica desde datos
- **Nivel**: Inicial / Intermedio / Avanzado
- **Disciplina**: Danza / Teatro / Música / Bienestar

## 📱 Integración WhatsApp

### 🔗 **Helpers Implementados**

```typescript
// Inscripción a clase
buildClassEnroll({
  title: 'Danza Contemporánea',
  day: 'Lunes',
  time: '19:00',
})

// Pre-inscripción a colonia
buildColonyPreEnroll({
  kidName: 'María',
  age: '8',
  season: 'verano',
})

// Reserva de salón
buildRoomBooking({
  date: '2024-12-15',
  time: '18:00',
  activity: 'Cumpleaños',
})
```

### 💬 **Mensajes Contextuales**

- **Inscripción específica**: Incluye clase, día y horario
- **Consulta general**: Para información del centro
- **Reserva de espacio**: Para alquiler de salón/patio
- **Colonia**: Para pre-inscripciones

## 🖼️ Gestión de Imágenes

### 📸 **Imágenes Locales**

- **Ubicación**: `/public/` con rutas relativas
- **Optimización**: `next/image` con `sizes` apropiados
- **Loading**: `lazy` fuera del fold, `priority` en hero
- **Formatos**: JPG, JPEG para fotos, SVG para iconos

### 🎨 **Distribución de Imágenes**

- **`salapro.jpg`**: Salón principal (imagen destacada)
- **`danza-ritmica.jpeg`**: Clases de danza
- **`musica-teatro.jpeg`**: Teatro y música
- **`yoga.jpeg`**: Yoga y relajación
- **`patiopro.jpg`**: Patio verde
- **`verano.jpg`**: Colonia de verano

## ♿ Accesibilidad

### 🎯 **Estándares AA**

- **Contraste**: Mínimo 4.5:1 para texto normal
- **Foco visible**: Ring violeta en elementos interactivos
- **Navegación**: Completa por teclado
- **ARIA**: Labels, roles y estados correctos
- **Semántica**: HTML5 semántico con landmarks

### ⌨️ **Navegación por Teclado**

- **Tab order**: Lógico y predecible
- **Skip links**: Para saltar navegación
- **Focus management**: En modales y menús
- **Keyboard shortcuts**: Para acciones comunes

## 🚀 Performance

### ⚡ **Optimizaciones**

- **Next.js 15**: App Router con Server Components
- **Imágenes**: `next/image` con optimización automática
- **Código**: Tree shaking y lazy loading
- **CSS**: Tailwind v4 con purging automático
- **Bundle**: Sin librerías pesadas innecesarias

### 📊 **Métricas Objetivo**

- **Lighthouse Mobile**:
  - Performance ≥ 90
  - Accessibility ≥ 95
  - Best Practices ≥ 95
  - SEO = 100

## 🛠️ Tecnologías Utilizadas

### 🏗️ **Core**

- **Next.js 15**: Framework React con App Router
- **TypeScript**: Tipado estático estricto
- **Tailwind CSS v4**: Utility-first CSS
- **React 18**: Hooks y Server Components

### 🎨 **UI/UX**

- **shadcn/ui**: Componentes base accesibles
- **Framer Motion**: Animaciones respetando `prefers-reduced-motion`
- **Lucide React**: Iconos consistentes

### 🔧 **Herramientas**

- **ESLint**: Linting con reglas estrictas
- **Prettier**: Formateo de código
- **Vitest**: Testing unitario
- **React Testing Library**: Testing de componentes

## 📋 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run start        # Servidor de producción

# Calidad
npm run lint         # Linting
npm run lint:fix     # Linting con auto-fix
npm run type-check   # Verificación de tipos

# Testing
npm run test         # Tests unitarios
npm run test:watch   # Tests en modo watch
npm run test:coverage # Tests con coverage
```

## 🎯 Criterios de Aceptación

### ✅ **Funcionalidad**

- [x] Sistema de filtros completo y funcional
- [x] Fichas detalladas con horarios y CTAs
- [x] Integración WhatsApp con mensajes contextuales
- [x] Navegación responsive y accesible
- [x] Estados vacíos y de error implementados

### ✅ **Calidad**

- [x] Sin errores de TypeScript
- [x] Sin warnings de ESLint
- [x] Accesibilidad AA compliant
- [x] Performance optimizada
- [x] Código limpio y mantenible

### ✅ **UX/UI**

- [x] Diseño mobile-first
- [x] Identidad visual consistente
- [x] Transiciones suaves
- [x] Feedback visual claro
- [x] Navegación intuitiva

## 🚀 Próximos Pasos

### 🔮 **Funcionalidades Futuras**

- [ ] Sistema de reservas online
- [ ] Galería de fotos de eventos
- [ ] Blog de noticias
- [ ] Testimonios de estudiantes
- [ ] Integración con redes sociales
- [ ] Sistema de notificaciones

### 🔧 **Mejoras Técnicas**

- [ ] PWA (Progressive Web App)
- [ ] Internacionalización (i18n)
- [ ] Analytics avanzado
- [ ] SEO mejorado
- [ ] Testing E2E
- [ ] CI/CD pipeline

## 📞 Contacto

Para consultas sobre el proyecto o el Centro Cultural Chivilcoy:

- **WhatsApp**: [Número del centro]
- **Email**: [email@centro.com]
- **Dirección**: [Dirección del centro]

---

**Desarrollado con ❤️ para la comunidad de Chivilcoy**

_Este proyecto sigue las mejores prácticas de desarrollo web moderno, accesibilidad y experiencia de usuario._
