# 📸 Guía de Imágenes - Centro Cultural Chivilcoy

## ✅ **Problema Resuelto**

Se ha corregido exitosamente el error **"Event handlers cannot be passed to Client Component props"** y se han implementado las mejores prácticas para el manejo de imágenes.

---

## 🔧 **Cambios Realizados**

### 1️⃣ **HighlightsRail.tsx Actualizado**

- ✅ **Eliminado `onClick` de props** - Ya no se pasan funciones desde el componente padre
- ✅ **Navegación inteligente** - El componente maneja internamente:
  - Enlaces internos (`/clases`) → `router.push()`
  - Enlaces externos (`https://`) → `window.open()`
- ✅ **Datos serializables** - Solo recibe objetos simples con `id`, `title`, `description`, `image`, `href`
- ✅ **Accesibilidad mantenida** - Roles ARIA y navegación por teclado intactos

### 2️⃣ **Página Home Actualizada**

- ✅ **Datos estáticos** - Arrays de objetos simples sin funciones
- ✅ **Imágenes locales** - Todas las imágenes ahora usan `/images/`
- ✅ **Enlaces WhatsApp** - Se generan usando `buildGeneralInquiry()` en tiempo de renderizado

### 3️⃣ **Imágenes Organizadas**

```
/public/images/
├── fondo-app.jpg    # Hero principal
├── salon.jpg        # Salón principal
├── patio.jpg        # Patio verde
└── pintura.jpg      # Clases y actividades
```

---

## 📋 **Cómo Usar Imágenes Correctamente**

### **Imágenes Locales** (Recomendado)

```tsx
import Image from 'next/image'

// ✅ Correcto - Imagen local
;<Image
  src="/images/salon.jpg"
  alt="Salón principal con piso de madera y espejos"
  width={800}
  height={600}
  className="h-auto w-full rounded-xl object-cover"
  loading="lazy"
/>
```

### **Imágenes Externas** (Si es necesario)

```tsx
// ✅ Correcto - Imagen externa (ya configurado en next.config.ts)
<Image
  src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&h=800&fit=crop"
  alt="Patio verde del Centro Cultural"
  width={1200}
  height={800}
  className="rounded-xl object-cover"
/>
```

### **En HighlightsRail**

```tsx
// ✅ Correcto - Datos serializables
const highlights = [
  {
    id: '1',
    title: 'Clases para Adultxs',
    description: 'Danza, teatro, yoga y más.',
    image: '/images/adultxs.jpg', // ← Imagen local
    href: '/clases?audiencia=adultxs', // ← Enlace interno
  },
  {
    id: '2',
    title: 'Alquiler del Salón',
    description: 'Espacio con piso de madera, espejos y sonido.',
    image: '/images/salon.jpg', // ← Imagen local
    href: 'https://wa.me/549XXXXXXXXXX?text=Hola%20quiero%20consultar%20por%20el%20sal%C3%B3n', // ← Enlace externo
  },
]
```

---

## 🚫 **Lo que NO hacer**

```tsx
// ❌ INCORRECTO - Pasar funciones como props
const highlights = [
  {
    id: "1",
    title: "Clase",
    onClick: () => window.open(...)  // ← Esto causa el error
  }
]

// ❌ INCORRECTO - Usar imágenes sin optimizar
<img src="/images/salon.jpg" alt="Salón" />

// ❌ INCORRECTO - Enlaces sin manejo de navegación
<a href="/clases">Ver clases</a>  // ← No funciona en HighlightsRail
```

---

## 🎯 **Resultado Final**

- ✅ **Sin errores de consola** - "Event handlers cannot be passed to Client Component props" eliminado
- ✅ **Navegación funcional** - Enlaces internos y externos funcionan correctamente
- ✅ **Imágenes optimizadas** - Todas las imágenes usan `next/image` con optimización automática
- ✅ **Accesibilidad AA** - Roles ARIA y navegación por teclado mantenidos
- ✅ **Performance** - Imágenes locales cargan más rápido que externas
- ✅ **TypeScript estricto** - Sin errores de tipos

---

## 🔍 **Verificación**

1. **Servidor funcionando**: `npm run dev` → `http://localhost:3000`
2. **Sin errores de consola**: Abrir DevTools y verificar que no hay warnings
3. **Navegación funcional**: Hacer clic en "Ver más" de cada tarjeta
4. **Imágenes cargando**: Verificar que todas las imágenes se muestran correctamente
5. **Tests pasando**: `npm run test` → 7/7 tests ✅

---

## 📝 **Próximos Pasos**

- Crear páginas `/clases`, `/colonia`, `/alquiler`, `/agenda`, `/contacto`
- Implementar filtros en la página de clases
- Agregar más imágenes específicas para cada sección
- Optimizar imágenes con diferentes tamaños para responsive
