# Paleta de Colores Actual

Esta es la paleta de colores definida actualmente en `src/styles/global.css`:

## Paleta de Colores Mejorada (Nueva)
Esta es la paleta activa en `src/styles/global.css`, con un diseño más dinámico y orientado al ecosistema Web3/Tech:

### Colores Principales
- **Primary:** `#4138FF` (Mantenido como color de marca)
- **Primary Light:** `#6B65FF` (Para estados de hover y resplandores)
- **Primary Dark:** `#2217C9` (Contraste profundo para estados activos)

### Colores Secundarios y Acentos
- **Secondary:** `#F1F5F9` (Blanco pizarra para alta legibilidad en fondos oscuros)
- **Secondary Dark:** `#94A3B8` (Gris pizarra atenuado para texto secundario)
- **Accent:** `#FF5A1F` (Naranja neón más vibrante para CTAs)
- **Accent Glow:** `rgba(255, 90, 31, 0.4)` (Para sombras resplandecientes del acento)
- **Teal:** `#00F0C8` (Teal brillante/neón para acentos tecnológicos)
- **Teal Glow:** `rgba(0, 240, 200, 0.4)` (Para sombras resplandecientes del teal)

### Fondos (Backgrounds) y Glassmorphism
- **BG-0:** `#030408` (Negro profundo verdadero)
- **BG-1:** `#0A0D18` (Gris azulado profundo)
- **BG-2:** `#13172E` (Para superficies elevadas o tarjetas)
- **Glass:** `rgba(19, 23, 46, 0.6)` (Fondo para elementos de vidrio esmerilado)
- **Glass Border:** `rgba(255, 255, 255, 0.08)` (Bordes sutiles para elementos de vidrio)

---

## Paleta de Colores Original (Archivada)
*Guardada para recuperar aspectos del diseño original si fuera necesario.*

- **Primary:** `#4138FF`
- **Primary Dark:** `#332ACC`
- **Secondary:** `#000000`
- **Accent:** `#E94E1B`
- **Teal:** `#008D7D`
- **BG-0:** `#05060A`
- **BG-1:** `#0B0D14`
- **BG-2:** `#101324`

---

## Consejos para Mejorar la Paleta de Colores

1. **Equilibrio y Contraste:** Asegúrate de que el contraste entre el texto y el fondo cumpla con los estándares de accesibilidad (WCAG). Los tonos oscuros (`BG-0`, `BG-1`) contrastan muy bien con blancos o grises claros para la tipografía.
2. **Jerarquía Visual:** Usa el color primario (`#4138FF`) moderadamente para acciones principales y el color de acento (`#E94E1B`) solo para destacar elementos cruciales (como notificaciones o botones de urgencia).
3. **Consistencia de Sombras:** Considera agregar variaciones de opacidad de tus colores primarios (ej. `rgba(65, 56, 255, 0.1)`) para fondos de elementos secundarios o estados "hover", para no depender solo de sombras o bordes grises.
4. **Modo Claro / Oscuro:** Si planeas un modo claro, define una escala inversa de fondos (`BG-0` a `BG-2`) que sean blancos a grises claros, asegurando que los colores primarios y de acento se sigan viendo legibles.

---

## Aplicación en Elementos de la Página

- **`--color-primary` (`#4138FF`) & `--color-primary-dark` (`#332ACC`):**
  - Botones principales (Call to Action).
  - Enlaces de texto dentro de párrafos.
  - Títulos principales o palabras resaltadas en encabezados.
  - Estados `hover` y `active` de elementos interactivos.

- **`--color-secondary` (`#000000`):**
  - Texto de párrafos en fondos claros (si los hay).
  - Bordes o separadores fuertes.

- **`--color-accent` (`#E94E1B`):**
  - Insignias (badges), etiquetas de "Nuevo" o "Importante".
  - Iconos de advertencia o errores.
  - Detalles decorativos (líneas sutiles, viñetas personalizadas).

- **`--color-teal` (`#008D7D`):**
  - Indicadores de éxito (checkmarks, mensajes de confirmación).
  - Elementos secundarios de la interfaz que necesiten destacar sutilmente sin competir con el color primario.

- **`--color-bg-0` al `--color-bg-2`:**
  - **BG-0:** Fondo principal del `body` en secciones completas para dar un aspecto "premium" y profundo.
  - **BG-1:** Fondos de tarjetas (cards), contenedores de artículos o modales que se elevan sobre el fondo principal.
  - **BG-2:** Efectos de "hover" en tarjetas, menús desplegables o áreas de navegación secundaria como sidebars y footers.

---

## Historial de Cambios

- **Actualización a Diseño Web3 / Tech:**
  - Se modificó la paleta en `src/styles/global.css` para implementar colores más vibrantes (acentos neón) y fondos más oscuros (`#030408`) que se ajustan mejor a una estética Web3/Tech.
  - Se añadieron nuevas variables de resplandor (`-glow`) para los colores primario, acento y verde azulado (`teal`).
  - Se integraron colores para soporte de diseño "Glassmorphism" (`--color-glass`, `--color-glass-border`).
  - La paleta original se preservó dentro de los archivos `global.css` (comentada) y en este documento como referencia.
  - Los cambios se propagaron automáticamente a todos los componentes que usan variables del `@theme` de Tailwind (`bg-primary`, `text-accent`, etc.).
