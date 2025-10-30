# agents.md — Proyecto “Centro Cultural Chivilcoy” (Frontend only)

> Objetivo: construir un **frontend** profesional, rápido y accesible, para un centro cultural con **inscripciones/consultas por WhatsApp**. **Sin** pagos, newsletter ni venta de entradas. Identidad **violeta + rosa**. Páginas: Home, Clases (listado + ficha), Colonia, Agenda (solo lectura), Alquiler del salón, Contacto.

---

## 1) Alcance y principios

- **Alcance v1**: solo frontend (Next.js 15 App Router + TS + Tailwind v4 + shadcn/ui + Framer Motion). Datos locales (`/data/*.ts`). CTAs a **WhatsApp** con mensaje prellenado.
- **Sin** backend, sin /api, sin auth, sin newsletter, sin checkout.
- **Hero estático** (sin carousel). Debajo: destacados con rail manual o grid.
- **Mobile-first**, **accesibilidad AA**, rendimiento alto (Lighthouse Perf ≥ 90, A11y ≥ 95).

---

## 2) Estructura del repo

/src
/app
/(site)
page.tsx # Home
/clases
page.tsx # Listado + filtros
[id]/page.tsx # Ficha de clase + horarios + CTA WhatsApp
/colonia/page.tsx # Info temporada + CTA WhatsApp
/agenda/page.tsx # Lista simple (solo lectura)
/alquiler/page.tsx # Ficha del salón + CTA WhatsApp
/contacto/page.tsx # Mapa + WhatsApp + email
/components
HeroSpotlight.tsx
HighlightsRail.tsx
WhatsAppButton.tsx
FilterChips.tsx
ClassCard.tsx
RoomCard.tsx
EventList.tsx
Section.tsx
Header.tsx
Footer.tsx
/data
classes.ts
schedules.ts
teachers.ts
rooms.ts
colony.ts
events.ts
/lib
whatsapp.ts # helpers para armar mensajes y links wa.me
utils.ts
/styles
globals.css

css
Copiar código

---

## 3) Componentes clave

- **HeroSpotlight**: imagen/video corto (Next/Image), título + subtítulo + 2 CTAs (Ver clases / WhatsApp). Sin autoplay ni rotación.
- **HighlightsRail**: carril horizontal **manual** y accesible (teclado). Fallback a lista/grid.
- **ClassCard**: título, docente, público (adultxs/infancias), nivel, badges de días/horarios, CTA WA.
- **RoomCard**: specs del salón/patio, mini-galería, CTA WA.
- **EventList**: lista simple de próximos eventos (solo lectura).
- **FilterChips**: chips para audiencia, días, franja horaria, docente.
- **WhatsAppButton**: variantes `primary` y `ghost`, aria-label, `rel="noopener noreferrer"`.

---

## 4) Datos mock (interfaces sugeridas)

```ts
export type Audience = 'adultxs' | 'infancias';

export interface Teacher { id: string; name: string; bioShort?: string; avatar?: string; }
export interface Room { id: string; name: string; type: 'salon'|'patio'; capacity?: number; features?: string[]; images?: string[]; }
export interface Class { id: string; title: string; audience: Audience; level?: 'inic'|'inter'|'avanz'; description?: string; teacherId: string; images?: string[]; discipline?: string; }
export interface ClassSchedule { id: string; classId: string; weekday: 0|1|2|3|4|5|6; start: string; end: string; spots?: number; }
export interface Event { id: string; title: string; dateISO: string; roomId?: string; description?: string; }
export interface Colony { id: string; season: 'verano'|'invierno'; dates: string[]; ages: string; description?: string; images?: string[]; }
5) WhatsApp helpers (/lib/whatsapp.ts)
buildClassEnroll({ title, day, time })

buildColonyPreEnroll({ kidName, age, season })

buildRoomBooking({ date, time, activity })

Cada helper URL-encodea el texto y retorna href listo: https://wa.me/<phone>?text=<msg>.

6) UX, Accesibilidad y Performance
Contraste AA; foco visible; aria-* y roles correctos; navegación por teclado en rails.

Elementos interactivos ≥ 44px; prefers-reduced-motion respetado.

next/image con sizes y priority solo en hero; evitar cargas grandes (> 200KB).

Tipografías Google con display=swap. Sin carousels automáticos.

7) SEO mínimo
generateMetadata por ruta; metadataBase configurado.

robots.txt y sitemap.xml.

Datos estructurados básicos: LocalBusiness y Event (solo lectura).

8) Calidad
TS estricto, sin any. ESLint sin warnings.

Tests mínimos (Vitest + RTL): lib/whatsapp.ts y lógica de navegación de HighlightsRail.

Commits: Conventional Commits (feat:, fix:, refactor:, chore:, docs:).

9) Definición de Hecho (DoD)
Páginas responsive, accesibles, sin warnings; enlaces WA funcionan.

Lighthouse (mobile) ≥ 90 Perf / ≥ 95 A11y / ≥ 95 Best / ≥ 100 SEO en Home y Clases.

Estados vacíos y de error implementados.
```
