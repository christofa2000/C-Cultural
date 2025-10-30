# 🔍 Auditoría Técnica - Centro Cultural Chivilcoy

## Reporte Completo de Mejoras Nivel Senior

**Fecha**: 2025-01-27  
**Stack**: Next.js 15 (App Router) + React 19 + TypeScript + Tailwind CSS v4  
**Objetivo**: Elevar el proyecto a nivel profesional senior

---

## 📊 RESUMEN EJECUTIVO

### ✅ Fortalezas Actuales

- ✅ TypeScript estricto sin `any` detectado
- ✅ Estructura de carpetas clara (`app/`, `components/`, `lib/`, `data/`)
- ✅ Uso correcto de Server/Client Components
- ✅ Tokens CSS bien definidos en `globals.css`
- ✅ Accesibilidad básica implementada (aria-labels, focus visible)

### ⚠️ Áreas de Mejora Críticas

1. **Colores hardcodeados** (78 instancias de `violet-*`, `neutral-*`)
2. **Metadata SEO incompleta** (falta JSON-LD, metadata dinámica)
3. **Optimización de rendimiento** (solo 1 `useMemo`, falta `React.memo`)
4. **Falta sitemap y robots.txt**
5. **Constantes duplicadas** (weekdayLabels, levelLabels, etc.)

---

## 📋 CHECKLIST DETALLADO DE MEJORAS

### 🔴 ALTA PRIORIDAD

#### 1. Colores Hardcodeados → Tokens CSS

**Problema**: 78 instancias de `text-violet-*`, `bg-violet-*`, `text-neutral-*`  
**Impacto**: Inconsistencia visual, difícil mantenimiento  
**Archivos afectados**:

- `src/components/FilterChips.tsx` (6 instancias)
- `src/components/ClassCard.tsx` (5 instancias)
- `src/app/page.tsx` (5 instancias)
- Otros 18 archivos

**Solución**:

```typescript
// ❌ ANTES
className = 'text-violet-400 hover:text-violet-300'

// ✅ DESPUÉS
className = 'text-primary hover:text-primary/80'
```

---

#### 2. Metadata SEO Dinámica y JSON-LD

**Problema**: Falta metadata dinámica en páginas dinámicas (`/clases/[id]`) y JSON-LD  
**Impacto**: SEO subóptimo, falta rich snippets  
**Archivos**: `src/app/(site)/clases/[id]/page.tsx`

**Solución**: Agregar `generateMetadata` y JSON-LD structured data

---

#### 3. Sitemap y robots.txt

**Problema**: No existen archivos `sitemap.xml` y `robots.txt`  
**Impacto**: SEO limitado  
**Solución**: Crear `src/app/sitemap.ts` y `src/app/robots.ts`

---

#### 4. Optimización de Renderizado

**Problema**: Componentes se re-renderizan innecesariamente  
**Impacto**: Performance subóptima  
**Archivos**: Todos los componentes de cards y filtros

**Solución**:

- Agregar `React.memo` a `ClassCard`, `RoomCard`, `ColonyCard`
- Usar `useCallback` en handlers de `FilterChips`
- `useMemo` para cálculos pesados

---

#### 5. Accesibilidad - Colores de Texto

**Problema**: `text-neutral-200` en `FilterChips.tsx` (líneas 67, 96, etc.)  
**Impacto**: Contraste insuficiente en modo claro  
**Solución**: Usar `text-foreground` o `text-muted-foreground`

---

### 🟡 MEDIA PRIORIDAD

#### 6. Constantes Duplicadas

**Problema**: `weekdayLabels`, `levelLabels`, `audienceLabels` duplicados  
**Archivos**: `ClassCard.tsx`, `clases/[id]/page.tsx`, otros  
**Solución**: Extraer a `src/lib/constants.ts`

---

#### 7. Utilidades Compartidas

**Problema**: Lógica de formateo duplicada  
**Ejemplo**: Formateo de horarios, fechas  
**Solución**: Crear `src/lib/formatters.ts`

---

#### 8. Mejorar Estructura de Tipos

**Problema**: Tipos inline en algunos componentes  
**Solución**: Extraer interfaces compartidas a `src/lib/types.ts`

---

#### 9. Imports No Utilizados

**Problema**: Posibles imports sin usar  
**Solución**: Ejecutar `tsc --noUnusedLocals` y limpiar

---

#### 10. Iconos Duplicados

**Problema**: SVG inline duplicados (flechas, WhatsApp)  
**Solución**: Extraer a componente `<IconArrowRight />` en `src/components/icons/`

---

### 🟢 BAJA PRIORIDAD

#### 11. Mejorar Documentación

**Problema**: Faltan JSDoc en funciones complejas  
**Solución**: Agregar comentarios JSDoc

---

#### 12. Testing

**Problema**: Solo existe test para `whatsapp.ts`  
**Solución**: Agregar tests para componentes críticos (FilterChips, ClassCard)

---

#### 13. Variables de Entorno

**Problema**: URL de WhatsApp hardcodeada  
**Solución**: Mover a `.env.local`

---

#### 14. Optimización de Imágenes

**Problema**: Algunas imágenes sin `priority` adecuado  
**Solución**: Revisar estrategia de carga de imágenes

---

#### 15. Animaciones con prefers-reduced-motion

**Problema**: Framer Motion no siempre respeta `prefers-reduced-motion`  
**Solución**: Wrapper hook `useReducedMotion`

---

## 🛠️ IMPLEMENTACIÓN DE MEJORAS

### Fase 1: Críticas (Inmediato)

1. ✅ Reemplazar colores hardcodeados por tokens
2. ✅ Agregar metadata dinámica y JSON-LD
3. ✅ Crear sitemap y robots.txt
4. ✅ Optimizar renderizados con React.memo
5. ✅ Corregir accesibilidad de texto

### Fase 2: Importantes (Esta semana)

6. ✅ Extraer constantes compartidas
7. ✅ Crear utilidades de formateo
8. ✅ Limpiar imports no utilizados

### Fase 3: Refinamiento (Próxima semana)

9. ✅ Agregar tests unitarios
10. ✅ Documentación JSDoc
11. ✅ Variables de entorno

---

## 📈 MÉTRICAS ESPERADAS POST-MEJORAS

### Performance (Lighthouse)

- **Antes**: ~85-90
- **Después**: ≥95 (objetivo)

### Accesibilidad (Lighthouse)

- **Antes**: ~90-95
- **Después**: ≥98 (objetivo)

### SEO (Lighthouse)

- **Antes**: ~85-90
- **Después**: 100 (objetivo)

### Bundle Size

- **Objetivo**: Mantener < 200KB inicial

---

## 🎯 PRIORIDADES POR IMPACTO

| Prioridad                | Impacto  | Esfuerzo | ROI        |
| ------------------------ | -------- | -------- | ---------- |
| Colores → Tokens         | 🔴 Alto  | Medio    | ⭐⭐⭐⭐⭐ |
| Metadata + JSON-LD       | 🔴 Alto  | Bajo     | ⭐⭐⭐⭐⭐ |
| Sitemap + robots.txt     | 🔴 Alto  | Muy Bajo | ⭐⭐⭐⭐⭐ |
| React.memo + useCallback | 🟡 Medio | Bajo     | ⭐⭐⭐⭐   |
| Constantes compartidas   | 🟡 Medio | Bajo     | ⭐⭐⭐     |
| Tests unitarios          | 🟢 Bajo  | Alto     | ⭐⭐⭐     |

---

## 📝 NOTAS TÉCNICAS

### Convenciones a Seguir

- ✅ Usar tokens CSS (`text-foreground`, `bg-card`, `border-border`)
- ✅ Componentes nombrados (no `React.FC`)
- ✅ Types extraídos a `src/lib/types.ts`
- ✅ Utilidades en `src/lib/utils.ts`
- ✅ Constantes en `src/lib/constants.ts`

### Estructura de Archivos Recomendada

```
src/
├── app/
│   ├── sitemap.ts          ← NUEVO
│   ├── robots.ts           ← NUEVO
│   └── ...
├── components/
│   ├── icons/              ← NUEVO
│   │   ├── IconArrowRight.tsx
│   │   └── IconWhatsApp.tsx
│   └── ...
├── lib/
│   ├── constants.ts        ← NUEVO
│   ├── formatters.ts       ← NUEVO
│   ├── types.ts
│   └── utils.ts
└── ...
```

---

**Siguiente paso**: Implementar mejoras de Alta Prioridad (Fase 1)
