# Plan Maestro — Web/App del **Centro Cultural Chivilcoy**

> Identidad visual: **violeta + rosa**, energía comunitaria, espacios amplios (salón madera + espejos) y **patio verde**. Foco en clases (adultxs/infancias), **colonia** (verano/invierno), **alquiler de salón**, eventos y talleres.

---

## 0) Alcance v1 (solo **frontend**)

- **Sin pagos online, sin venta de entradas, sin newsletter.**
- **Inscripción y consultas por WhatsApp** (links con mensaje prellenado y deep links por sección/clase/colonia/alquiler).
- **Sin muro de mensajes** en esta fase (opcional a futuro).
- **Alquiler de salón**: disponible (consulta/reserva por WhatsApp; formulario opcional que abre WhatsApp con datos).

---

## 1) Objetivos

- **Inscripciones y consultas simples por WhatsApp** (CTA claro en toda la web).
- **Agenda y grilla horaria** para encontrar clases rápido (adultxs/infancias).
- **Mostrar espacios** (salón madera + espejos, patio verde) con galería.
- **Colonia** (verano/invierno) con información clara y CTAs a WhatsApp.
- **Autogestión ligera**: contenido administrable a futuro, pero **v1 puede usar datos mock/JSON**.

**KPIs**: clics a WhatsApp por sección, consultas iniciadas, tiempo de permanencia en fichas de clase, solicitudes de alquiler.

---

## 2) Audiencias & personas

- **Adultxs alumnos/as**: buscan horarios, profe, nivel, precio; quieren inscribirse rápido desde el celular.
- **Familias (infancias)**: necesitan info clara de **colonia** (fechas, edades, horarios, seguridad, cuota), y de clases infantiles.
- **Artistas/organizadores**: alquilar **salón** para ensayos/eventos; ver capacidad, precio, requisitos, disponibilidad.
- **Visitantes/eventos**: ver programación y comprar entradas.

---

## 3) Principios UX

- “**Primero la acción**”: CTA visibles (Inscribirme, Reservar, Comprar) siempre accesibles.
- **Móvil primero** (≥60% tráfico probable). Grillas horarias legibles en móvil.
- **Velocidad** (LCP < 2.5s) y **accesibilidad** (AA): contraste, foco visible, etiquetas aria.
- **Claridad y calidez**: texto directo, humano, fotos reales de comunidad/espacios.

---

## 4) Arquitectura de Información (Sitemap)

- **Home**

  - Hero con foto del salón/patio, claim, CTA dobles: _Ver clases_ / _Inscribirme a colonia_.
  - Próximos eventos (3–6) y botón _Ver agenda_.
  - Bloques destacados: **Clases Adultxs**, **Clases Infancias**, **Colonia**, **Alquiler del Salón**.

- **Clases** (listado + filtros)

  - Filtros: Adultxs/Infancias, disciplina, días, franja horaria, profe, nivel.
  - Ficha de clase: descripción, profesor/a, requisitos, **horarios** y **cupos**.
  - CTA: _Inscribirme_ (pago/Reserva) / _Clase de prueba_.

- **Colonia** (verano/invierno)

  - Info por temporada: fechas, edades, cronograma, equipo, seguridad, precios, FAQs.
  - CTA: _Pre‑inscribirme_

- **Agenda / Eventos**

  - Calendario/lista con filtros (mes, disciplina ).
  - Evento: descripción, aforo, locación (salón/patio), entradas.

- **Alquiler del Salón**

  - Ficha del espacio: medidas, piso madera, espejos, sonido, capacidad, fotos galería.
  - formulario de solicitud con fecha/horario.

- **El Espacio** (Nosotrxs)

  - Historia, misión, equipo, docentes.

- **Noticias / Blog**

- **Contacto** (WhatsApp, email, mapas, horarios de atención)

---

## 5) Flujos clave (v1 sin backend)

### Inscripción a una clase (WhatsApp)

1. Usuario explora **listado de clases** → entra a la **ficha**.
2. Selecciona **horario** deseado.
3. CTA **“Inscribirme por WhatsApp”** abre `wa.me` con mensaje prellenado: _“Hola, quiero inscribirme a [Clase] el [día/hora]. Mi nombre es [ ] y tengo [ ] años.”_
4. Equipo responde por WhatsApp y completa el alta manual (v1).

### Colonia (WhatsApp)

1. Landing con temporadas, **edades** y **cronograma**.
2. CTA **“Pre‑inscribirme por WhatsApp”** con mensaje prellenado: _“Hola, quiero pre‑inscribir a [Nombre del menor], edad [ ], para la colonia [temporada].”_

### Alquiler del salón (WhatsApp)

1. Ficha del espacio (medidas, piso madera, espejos, capacidad, fotos).
2. Mini‑calendario **ilustrativo** (no interactivo en v1) o texto de disponibilidad general.
3. CTA **“Consultar/Reservar por WhatsApp”** con mensaje prellenado: _“Hola, quiero reservar el salón el [fecha/hora], actividad [ ]. ¿Disponibilidad y valor?”_

---

## 6) Roadmap de producto (enfoque frontend)

**MVP (3–4 semanas)**

- Home, Clases (listado + fichas), Colonia (landing), Agenda básica (solo lectura), Alquiler del Salón, Contacto.
- CTAs a WhatsApp en todas las rutas clave con **mensajes prellenados**.
- Datos **mock/JSON** locales para clases/horarios/colonias/eventos.

**Fase 2**

- Mini‑calendario más expresivo (client‑side) y filtros avanzados.
- Modo **PWA** (instalable) y mejoras de accesibilidad.
- Opcional: CMS headless para edición (Sanity/Payload) **sin cambiar el flujo por WhatsApp**.

**Fase 3**

- Panel ligero solo‑frontend (edición básica vía CMS) y muro/comunidad si decide integrarse.
- Integraciones futuras (si se desean): pagos/entradas/newsletter.

---

## 7) Stack técnico propuesto (solo frontend)

- **Framework**: **Next.js 15 (App Router)** + **TypeScript** + **Tailwind v4** + **shadcn/ui** + **Framer Motion**.
- **Datos v1**: JSON/TS estático (ej. `/data/classes.ts`, `/data/schedules.ts`).
- **Imágenes**: `<Image/>` de Next.
- **Hosting**: Vercel.
- **Opcional Fase 2**: CMS headless (Sanity/Payload) para editar contenido sin backend propio.

> Sin auth, sin emails, sin pagos en v1. Todo CTA termina en **WhatsApp**.

---

## 8) Diseño visual: tokens y guía

**Paleta base** (violeta/rosa; ejemplo Tailwind):

```css
:root {
  --violet-900: #2e1065;
  --violet-700: #6d28d9;
  --violet-500: #8b5cf6;
  --violet-300: #c4b5fd;
  --pink-700: #be185d;
  --pink-500: #ec4899;
  --pink-300: #f9a8d4;
  --neutral-950: #0a0a0a;
  --neutral-200: #e5e5e5;
  --success: #16a34a;
  --warning: #f59e0b;
}
```

**Gradientes**

- _Aurora Patio_: `bg-[radial-gradient(80%_120%_at_50%_0%,rgba(236,72,153,.15),rgba(139,92,246,.08)_40%,transparent_70%)]`
- _Violeta→Rosa_: `bg-gradient-to-r from-violet-600 via-violet-500 to-pink-500`

**Tipografías**

- Titulares: **Fraunces** o **Playfair Display** (toque cultural).
- Texto UI: **Plus Jakarta Sans** o **Manrope**.

**Componentes UI clave**

- Barra superior con **selector rápido**: Clases · Colonia · Agenda · Alquiler.
- **Grilla horaria** responsiva (cards por clase/horario).
- Calendario (re‑uso para agenda/alquiler/colonia).
- Wizard de inscripción (3 pasos) + barra de progreso.
- Cards de espacios (Salón / Patio) con specs y galería.
- Sección **Docentes** (avatar, bio corta, clases relacionadas).
- Footer con CTA a WhatsApp y Newsletter.

**Micro‑interacciones**

- Hover “eléctrico” (borde violeta suave) en CTAs.
- Reveal de cards al hacer scroll (fade+slide corto).
- Pulsos sutiles en estados de cupo bajo (badge _Quedan 3_).

---

## 9) Esquema de datos (para mocks/frontend)

**Interfaces TS sugeridas**

- `Teacher { id, name, bioShort, avatar }`
- `Room { id, name, type: 'salon'|'patio', capacity, features: string[], images: string[] }`
- `Class { id, title, audience: 'adultxs'|'infancias', level?: 'inic'|'inter'|'avanz', description, teacherId, images: string[] }`
- `ClassSchedule { id, classId, weekday: 0-6, start: 'HH:mm', end: 'HH:mm', spots?: number }`
- `Event { id, title, dateISO, roomId, description }` _(solo lectura v1)_
- `Colony { id, season: 'verano'|'invierno', dates: string[], ages: string, description, images: string[] }`

> Estos modelos viven en `/data/*.ts` y alimentan las vistas. No hay persistencia ni backend en v1.

---

## 10) Rutas de la app (App Router)

- `/` — Home.
- `/clases` — Listado con filtros (audiencia, disciplina, días, horarios, docente).
- `/clases/[id]` — Ficha de clase + horarios + **botones WhatsApp**.
- `/colonia` — Info por temporada + **WhatsApp**.
- `/agenda` — Lista de eventos (solo lectura).
- `/alquiler` — Ficha del salón + **WhatsApp** (consulta/reserva).
- `/contacto` — Mapa + WhatsApp + email.

> **Sin endpoints /api** en v1. Todo es client-side/estático.

---

## 11) Panel interno (v1)

- **No incluido**. Edición manual de datos mock.
- **Fase 2**: conectar CMS para edición de clases/horarios/eventos/colonia.

---

## 12) SEO/Performance/Accesibilidad

- `generateMetadata` por ruta; `metadataBase` ✅; OG/social sin venta.
- Sitemap + `robots.txt` + datos estructurados **LocalBusiness** y **Event** (solo lectura).
- Imágenes optimizadas + `next/image`.
- Lighthouse AA: contraste, tamaños tocables ≥44px, foco visible.

---

## 13) Contenidos (copy guía)

- Tono cercano, inclusivo, claro.
- Evitar jerga técnica; resaltar beneficios: comunidad, bienestar, creatividad.
- Callouts: _Cupos limitados_, _Clase de prueba_, _Beneficios para familias_.

---

## 14) Entregables de diseño

- **Wireframes** low‑fi (home, clases, ficha, colonia, agenda, alquiler, checkout).
- **UI Kit** (tokens, tipografías, botones, cards, formularios, banners, badges de cupo).
- **Prototipo** navegable (mobile/desktop).

---

## 15) Próximos pasos sugeridos

1. Confirmar alcance v1 (solo frontend + WhatsApp) ✅.
2. Cerrar **paleta exacta** violeta/rosa y tipografías.
3. Definir estructura de **datos mock** (`/data/*.ts`).
4. Wireframes mobile‑first: Home, Clases (listado/ficha), Colonia, Alquiler, Contacto.
5. UI Kit (botones, cards, badges, chips de filtro, calendario simple).
6. Implementar páginas y **CTAs a WhatsApp** con mensajes prellenados.
7. Tests de usabilidad rápidos con 5 personas (adultxs + familias).
