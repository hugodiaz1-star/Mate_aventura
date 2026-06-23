# Notas de versión — Mate Aventura

Registro de cambios del proyecto. La versión más reciente va arriba.

> Al publicar una versión nueva en la web (GitHub Pages/Netlify), recuerda **subir el número de caché** en `sw.js` (`const CACHE = "mate-aventura-vN"`) para que los dispositivos tomen la actualización.

---

## v1.2 — 2026-06-21  ·  *Sesión amable (tiempo sin angustia)*

**Nuevo**
- ⏳ **Modo "sesión amable"**: el adulto fija los minutos en Ajustes (Sin límite / 10 / 15 / 20 / 30). El tiempo **nunca corta a media operación**.
- 🦦 **Aviso anticipado**: cuando queda poco, Nilo avisa ("Nos queda poquito tiempo hoy").
- 🌙 **Última misión**: al agotarse el tiempo, la misión en curso se marca como "Última de hoy" y se deja terminar.
- 😌 **Cierre tranquilo a cargo de Misi** (personaje de calma): respiración guiada + recordatorio de que el progreso está guardado ("mañana seguimos"), con opción de **5 minutos más** o **una misión más** (boundary amable, sin bloqueo brusco).
- 🐱 **Botón "Respirar" a demanda** durante el juego: abre la respiración con Misi y **pausa la liebre y el reloj de sesión** (tomar un respiro no penaliza). Nilo lo sugiere con cariño tras varios intentos.

> Subido el caché del service worker a **v3**.

---

## v1.1 — 2026-06-21  ·  *PWA + hoja de cuaderno*

**Nuevo**
- 📱 **PWA instalable y sin conexión**: `manifest.json`, `sw.js` (service worker), íconos (`icon-192/512`, *maskable*, `icon-180`) e `index.html` (redirección para que la raíz del enlace abra la app).
- 🔢 **Columnas de valor posicional** (Centenas · Decenas · Unidades) siempre visibles, con código de color, sobre **fondo de cuadrícula de cuaderno**.
- 🟧 **Cajitas de llevada/préstamo**: se rellenan solas con la ayuda activada y quedan **vacías** para escribir cuando se desactiva.
- ⬛ **Resultado en casillas separadas y seleccionables**: el niño **toca la casilla** (unidad, decena, centena) donde quiere escribir.
- 🔒 **Desbloqueo progresivo de mundos**: solo el primero está abierto; los demás muestran ❓ hasta completar el anterior (los completados llevan ✓).
- 🏷️ Crédito en el pie: "Hecho por Hugo I. Díaz · Sin fines de lucro · Distribución libre".

**Cambios**
- Personajes con **personalidad/rol**; "Rayo McQueen" → **Turbo**; imágenes reales de los 8 personajes y de Nilo.

**Quitado**
- Libreta digital de dibujo (quedó redundante al integrar cuadrícula y columnas en la operación principal).

---

## v1.0 — 2026-06-21  ·  *Guía, colección y juego*

**Nuevo**
- 🦦 **Nilo el Navegante**: guía permanente que instruye, felicita y acompaña los errores sin juzgar.
- 🎴 **Álbum Matemágico**: cada misión de 6 operaciones desbloquea **un personaje + una pegatina + una animación** (nunca se quitan).
- ✋ **Lámina de pegatinas arrastrables** (dedo y mouse) con bote para quitar.
- 🏎️ **Carrera "Tú vs la Liebre"** con ritmo ajustable; si la liebre gana, la lección es de tolerancia a perder.
- 🎁 **Caja sorpresa con 8 power-ups** (acelerar tu coche o frenar a la liebre).
- 🦋 **Álbum de animales** (24 criaturas: insectos, artrópodos y otros) vía las distracciones.
- 8 mundos/personajes, insignias 🏅, lecciones de conducta con ilustración, animación de acierto.

---

## v0.9 — 2026-06-21  ·  *Base*

**Nuevo**
- Motor de **sumas y restas** con niveles: Repaso (≤20), Dos dígitos, Reto (con reagrupación) y Mezcla.
- Operación **en vertical** con ayuda visual de **llevada y préstamo**.
- Revelado de **imagen secreta** al completar la misión.
- Distracción educativa (la mosca), lecciones de conducta, sonidos suaves opcionales y **progreso guardado** en el dispositivo.

---

## Próximo (pendiente)

- ✖️ ➗ Multiplicaciones y divisiones.
- 🔢 Conteo y problemas matemáticos.
- 🗺️ Mundos atados a una operación (estructura del PDF).
- 🖼️ Fondos coleccionables; modo alto contraste; modo concentración.
- 📦 Empaquetado para tiendas (App Store / Google Play) con Capacitor.

---

## Cómo registrar una versión nueva (plantilla)

```
## vX.Y — AAAA-MM-DD  ·  *título corto*

**Nuevo**
- ...

**Cambios**
- ...

**Quitado**
- ...
```

Y antes de publicar: subir `MateAventura.html` (y archivos cambiados) a GitHub, y aumentar el número en `sw.js`.
