# 🦷 AUDITORÍA DE ICONOS — saludEvolutiva-site

**Proyecto:** Centro de Salud Holística Dr. Ipinza  
**Fecha:** 31 marzo 2026  
**Stack:** Astro 5.5 + Tailwind 4 + React 19 + astro-icon 1.1.5

---

## 📋 RESUMEN EJECUTIVO

| Métrica | Valor |
|---------|-------|
| **Iconos `astro-icon` (lucide)** | ~46 nombres únicos |
| **Iconos `lucide-react` (runtime JS)** | 9 iconos (Circle, Check, Sparkles, ThumbsUp, Flame, Hourglass, BookOpen, ClipboardList, PartyPopper) |
| **SVGs inline manuales** | 11 ocurrencias en 9 archivos |
| **Redes sociales como SVGs manuales** | Instagram, Facebook |
| **JS shipped por lucide-react** | ~3.3 KB (createLucideIcon) + React overhead |
| **Redes sociales faltantes** | YouTube (configurado pero sin icono), WhatsApp (mencionado pero sin icono) |

**Veredicto general:** El uso de `astro-icon` con Lucide en archivos `.astro` es **excelente** — zero JS, build-time inline SVGs. Pero hay **3 problemas de rendimiento** y **12 oportunidades de mejora**.

---

## 🔴 PROBLEMAS CRÍTICOS

### 1. `lucide-react` añade JS innecesario al cliente (~3.3 KB + runtime)

**Archivos afectados:**
- `src/components/ChecklistTool.tsx` — importa 6 iconos: `Circle, Check, Sparkles, ThumbsUp, Flame, Hourglass`
- `src/components/PlanAccion.tsx` — importa 3 iconos: `BookOpen, ClipboardList, PartyPopper`

**Impacto en producción:**
```
createLucideIcon.CtPt6xX2.js   → 3,285 bytes  (runtime de lucide-react)
ChecklistTool.evC3OeSN.js     → 11,583 bytes (componente + iconos inline)
PlanAccion.ouVxQ2VL.js        → 8,737 bytes  (componente + iconos inline)
```

`lucide-react` funciona bien con React, pero cada icono genera un `<svg>` inline en JS del cliente en lugar de en el HTML del servidor. Esto **empeora INP** y **añade peso de JS** por cada componente React que usa iconos.

**Recomendación:** Ya que estos componentes necesitan React (interactividad), `lucide-react` es aceptable, pero podrías reducir los iconos inline y reemplazar por CSS/HTML donde sea posible (ver sugerencias abajo).

---

### 2. 11 SVGs inline manuales duplicados

**Problema:** El mismo icono de estrella se copia y pega en 3 lugares:

| Archivo | SVG |
|---------|-----|
| `HeroHome.astro` | Estrella de rating (viewBox 0 0 20 20) |
| `TestimonialCard.astro` | Estrella de rating (viewBox 0 0 20 20) — **idéntico** |
| `pages/[slug].astro` (blog) | Estrella de rating (viewBox 0 0 20 20) — **idéntico** |

Otros SVGs inline repetidos:

| SVG | Archivos |
|-----|----------|
| Chevron down (dropdown) | `Header.astro` × 3 (mismo path `M19 9l-7 7-7-7`) |
| Hamburger menu | `Header.astro`, `Layout.astro` (mismo path `M4 6h16M4 12h16M4 18h16`) |
| Close X | `Header.astro` (path `M6 18L18 6M6 6l12 12`) |
| Check mark | `ChecklistTool.tsx`, `mi-cuenta/index.astro`, `contacto.astro` |

**Impacto:** Cada SVG inline duplicado aumenta el tamaño del HTML. La estrella de rating tiene ~350 bytes por instancia × 5 por testimonial × múltiples testimoniales = kilobytes innecesarios.

---

### 3. Redes sociales: Instagram y Facebook como SVGs manuales sin accesibilidad

**Archivo:** `Footer.astro` líneas 25-34

```astro
<a href={siteConfig.social.instagram} aria-label="Instagram">
  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204..."/></svg>
</a>
```

**Problemas:**
- SVGs manuales de 800+ bytes cada uno que podrían ser un icono de 100 bytes
- YouTube está en `siteConfig.social.youtube` pero **no tiene icono en el footer**
- WhatsApp se menciona en `contacto.astro` pero **no tiene icono**
- Sin `title` o `aria-hidden` dentro del SVG

---

## 🟡 PROBLEMAS MEDIO

### 4. Iconos de servicios: algunos podrían ser más representativos

Los servicios usan `lucide:*` icons definidos en `data/site.ts`:

| Servicio | Icono actual | ¿Representativo? | Sugerencia |
|----------|-------------|-------------------|------------|
| Eliminación de Amalgamas | `lucide:shield-plus` | ⚠️ Genérico | `tabler:dental` o `lucide:shield-check` (más reconocible) |
| Implantes Cerámicos | `lucide:bone` | ✅ Bueno | `tabler:bone` (más detallado) |
| Odontología Biomimética | `lucide:sparkles` | ⚠️ Genérico | `lucide:gem` o `lucide:diamond` (más dental) |
| Tratamiento ATM | `lucide:hand` | ❌ Poco claro | `lucide:head` o `lucide:brain` |
| Ozonoterapia | `lucide:wind` | ⚠️ Confuso | `lucide:cloud` o `lucide:zap` |
| Ortodoncia Biológica | `lucide:smile` | ✅ Perfecto | — |
| Estética Facial | `lucide:syringe` | ❌ Da miedo | `lucide:sparkles` o `lucide:scan-face` |
| Nutrición | `lucide:apple` | ✅ Perfecto | — |
| Acupuntura | `lucide:activity` | ⚠️ Genérico | `lucide:flower-2` o `lucide:heart-pulse` |

### 5. Falta icono dental/identidad visual

El proyecto es una **clínica dental holística** pero **no usa ningún icono de diente** en toda la UI. El logo es una imagen `/images/logo.webp`, pero los iconos de navegación usan `heart-pulse`, `stethoscope`, `book-open` — ninguno dental.

**Sugerencia:** Agregar `lucide:sparkles` o `lucide:smile` como icono dental en al menos 1-2 lugares clave.

### 6. No hay iconos de WhatsApp ni YouTube

`siteConfig.social` define `youtube: "#"` y `contacto.astro` menciona WhatsApp, pero **ningún icono** aparece en la UI.

---

## 🟢 SUGERENCIAS DE MEJORA

### 7. Estandarizar SVGs inline → astro-icon

Reemplazar los 11 SVGs inline manuales por `astro-icon`:

**Antes (HeroHome.astro + TestimonialCard.astro + blog):**
```astro
<!-- 350 bytes × N veces -->
<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c..."/></svg>
```

**Después:**
```astro
<Icon name="lucide:star" class="w-5 h-5" />
```

Lista completa de reemplazos:

| SVG manual | Reemplazo por | Aparece en |
|------------|--------------|-----------|
| Estrella de rating | `lucide:star` | HeroHome, TestimonialCard, blog |
| Chevron down dropdown | `lucide:chevron-down` | Header (×3) |
| Hamburger menu | `lucide:menu` | Header, Layout |
| Close X | `lucide:x` | Header |
| Breadcrumb chevron | `lucide:chevron-right` | Breadcrumbs |
| FAQ chevron | `lucide:chevron-down` | FAQAccordion |
| Check mark | `lucide:check` | ChecklistTool, mi-cuenta, contacto |
| Instagram | `mdi:instagram` o `lucide:instagram` | Footer |
| Facebook | `mdi:facebook` o `lucide:facebook` | Footer |

**Ahorro estimado:** ~2-3 KB de HTML por página.

### 8. Agregar iconos de redes sociales faltantes

**Footer.astro** — agregar YouTube:
```astro
<a href={siteConfig.social.youtube} aria-label="YouTube">
  <Icon name="lucide:youtube" class="w-5 h-5" />
</a>
```

**contacto.astro** — agregar WhatsApp:
```astro
<Icon name="lucide:message-circle" class="w-5 h-5 text-primary-500" />
```

### 9. Agregar `@iconify-json/tabler` para iconos dentales

```bash
npm install @iconify-json/tabler
```

Esto habilita acceso a iconos que Lucide no tiene:
- `tabler:dental` — diente molar
- `tabler:dental-broken` — caries/rotura
- `tabler:toothbrush` — cepillo dental
- `tabler:stethoscope` — estetoscopio (más detallado que lucide)

### 10. Reducir iconos en ChecklistTool.tsx

`ChecklistTool.tsx` importa 6 iconos de `lucide-react`. Los iconos `Circle` y `Check` se usan para checkboxes custom. Se podría simplificar:

**Antes (2 iconos React):**
```tsx
import { Circle, Check } from 'lucide-react';
// ...renderizado condicional con componentes React
```

**Después (0 iconos React — CSS puro):**
```tsx
// Usar checkbox nativo estilizado con Tailwind
<input type="checkbox" class="w-5 h-5 rounded border-2 ... peer" />
<svg class="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 ...">...</svg>
```

Esto elimina la necesidad de `Circle` y `Check` de lucide-react en runtime.

### 11. Mejorar iconos de servicios

Reemplazos sugeridos en `data/site.ts`:

```typescript
// Antes → Después
"lucide:shield-plus"   → "lucide:shield-check"    // Amalgamas (más protección, menos genérico)
"lucide:hand"          → "lucide:brain"           // ATM (más relacionado a neuralgia/cefaleas)
"lucide:syringe"       → "lucide:sparkles"       // Estética Facial (syringe da miedo en marketing)
"lucide:wind"          → "lucide:zap"             // Ozonoterapia (energía vs viento abstracto)
"lucide:activity"      → "lucide:flower-2"       // Acupuntura (más específico)
```

### 12. Agregar `aria-hidden` a iconos decorativos

Los iconos que acompañan texto (en links, botones) deberían tener `aria-hidden="true"` ya que el texto ya describe la acción:

```astro
<!-- Antes -->
<a href="/servicios">
  <Icon name="lucide:stethoscope" class="w-4 h-4" /> Servicios
</a>

<!-- Después -->
<a href="/servicios">
  <Icon name="lucide:stethoscope" class="w-4 h-4" aria-hidden="true" /> Servicios
</a>
```

Esto mejora la accesibilidad para lectores de pantalla (evita que lean "estetoscopio Servicios").

---

## 📊 PLAN DE ACCIÓN PRIORIZADO

| # | Acción | Impacto SEO | Esfuerzo | Prioridad |
|---|--------|:-----------:|:--------:|:---------:|
| 1 | Reemplazar estrella SVG inline → `lucide:star` | 🟡 | 🟢 Baja | 🔴 Alta |
| 2 | Reemplazar chevron SVGs inline → `lucide:chevron-down` | 🟡 | 🟢 Baja | 🔴 Alta |
| 3 | Reemplazar hamburger/X SVGs → `lucide:menu` / `lucide:x` | 🟡 | 🟢 Baja | 🔴 Alta |
| 4 | Agregar `aria-hidden="true"` a todos los iconos decorativos | 🟢 | 🟢 Baja | 🔴 Alta |
| 5 | Reemplazar Instagram/Facebook SVGs → astro-icon | 🟡 | 🟢 Baja | 🟡 Media |
| 6 | Agregar icono YouTube + WhatsApp | 🟡 | 🟢 Baja | 🟡 Media |
| 7 | Mejorar iconos de servicios (site.ts) | 🟡 | 🟢 Baja | 🟡 Media |
| 8 | Eliminar `Circle`/`Check` de lucide-react en ChecklistTool | 🟢 | 🟡 Media | 🟢 Baja |
| 9 | Instalar `@iconify-json/tabler` para dental icons | 🟢 | 🟢 Baja | 🟢 Baja |
| 10 | Simplificar `PlanAccion.tsx` iconos | 🟢 | 🟡 Media | 🟢 Baja |

---

## ✅ LO QUE ESTÁ BIEN (no cambiar)

- ✅ **`astro-icon` con Lucide en `.astro`** — Perfecto. Build-time inline SVGs, zero JS.
- ✅ **Paquete `@iconify-json/lucide`** instalado — Correcto, solo descarga los iconos que usa.
- ✅ **Consistencia de estilo** — Todos los iconos de UI son outline (Lucide default). Muy coherente.
- ✅ **Iconos semánticos** — `book-open` para libro, `stethoscope` para servicios, `graduation-cap` para aprende. Bien pensado.
- ✅ **Tamaños consistentes** — `w-4 h-4` en nav, `w-5 h-5` en footer/hero. Escala uniforme.
- ✅ **Colores con `text-primary-*`** — Se integrán con Tailwind sin problemas.

---

*Fin del informe*
