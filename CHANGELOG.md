# Notas de versión — Mate Aventura

Registro de cambios del proyecto. La versión más reciente va arriba.

> Al publicar una versión nueva en la web (GitHub Pages/Netlify), recuerda **subir el número de caché** en `sw.js` (`const CACHE = "mate-aventura-vN"`) para que los dispositivos tomen la actualización.

---

## v1.11 — 2026-06-30  ·  *Imágenes propias de Fito y Bruno*

**Cambios**
- 🔥👨‍🚒 **Fito y Bruno** ya tienen **ilustración propia**. Sus avatares (`Fito.png`, `Bruno.png`) se recortaron de las imágenes de cuerpo completo (guardadas como `fito_personaje.png` / `bruno_personaje.png`). Se usan en la lección de Seguridad y en sus **pegatinas**.

> Subido el caché del service worker a **v13** (incluye `Fito.png` y `Bruno.png`).

---

## v1.10 — 2026-06-30  ·  *Pegatinas de personaje (Fito, Bruno y Bastián)*

**Nuevo**
- 🌟 **Pegatinas especiales con la cara del personaje**, que el niño **descubre al terminar su reto**:
  - 🔥 **Fito** y 👨‍🚒 **Bruno** → al completar la lección de **Seguridad** (incendios).
  - 🦫 **Bastián** → al desbloquear su primera **construcción** (por constancia).
- 🎴 Aparecen en el **Álbum Matemágico** en una sección aparte ("🌟 Especiales · descúbrelas en los retos"), bloqueadas con ❓ hasta lograrse, y se pueden **pegar en la lámina** como cualquier pegatina (ahora la lámina admite **imágenes**, no solo emojis).
- 🎁 Mensaje de descubrimiento al ganarlas (en la celebración del reto y con aviso al volver a abrir la app).
- Las pegatinas especiales **no** salen en las misiones normales (esas siguen dando las 20 de siempre).

> Subido el caché del service worker a **v12**.

---

## v1.9 — 2026-06-30  ·  *Nueva área: Seguridad contra incendios (Fito y Bruno)*

**Nuevo**
- 🔥 **Área "Seguridad"**: lección guiada e interactiva sobre el fuego y los incendios, con el mismo enfoque de la app (claro, visual, **sin generar miedo**, con reglas y refuerzo positivo).
- 🧯 **Personajes nuevos**: **Fito el Fuego** ("puedo ayudarte… pero nunca juegues conmigo") y **Bruno el Bombero** (tranquilo y amable). Por ahora son **dibujos SVG**; se pueden sustituir por `Fito.png` / `Bruno.png` cuando quieras (como Nilo/Bastián).
- 📚 **9 niveles + juego de escenarios** (26 pasos): dónde hay fuego y si hay un adulto, para qué sirve, qué no hacer, qué es un incendio (humo→fuego), qué hacer (salir → adulto → 911 → bomberos), **nunca regresar**, el peligro del **humo**, cómo avanzar agachado, y los bomberos. Cada pregunta tiene refuerzo positivo y permite reintentar sin castigo.
- 🚒 **Insignia "Seguro con el fuego"** al completar la lección, con celebración de Fito y Bruno.

> Subido el caché del service worker a **v11**.

---

## v1.8 — 2026-06-30  ·  *Arte nuevo: Nilo azul, Bastián y portada*

**Cambios**
- 🦦 **Nilo ahora es azul** (acorde al Art Bible: color *Azul*, símbolo *Brújula*): nutria exploradora con goggles y brújula. Se recortó su retrato de `nilo_new.png`, **quitando el fondo negro** (transparente), y se guardó como `Nilo.png`.
- 🦫 **Nuevo Bastián**: avatar actualizado desde `bastian_new.png` (beaver constructor con maza, brújula y planos).
- 🖼️ **Portada** en la pantalla de inicio: `portada_new.png` (con todos los personajes y el lema "Una aventura donde aprender también construye mundos").
- 🧭 **Ícono de la app regenerado** con la **cara del nuevo Nilo azul** sobre el degradado de marca (192/512, *maskable* y 180 iOS).

> Subido el caché del service worker a **v10** (incluye la portada y el arte nuevo).

---

## v1.7 — 2026-06-30  ·  *Bastián con imagen y calendario de su lámina*

**Cambios**
- 🦫 **Imagen real de Bastián**: el avatar `Bastian.png` se recorta de `bastian_personaje.png` (imagen oficial del personaje, cuerpo completo sobre fondo blanco). `bastian_hoja.png` queda como **lámina de referencia** (pose, expresiones, herramientas, construcciones).
- 🏗️ **Calendario de construcciones según la lámina**: árbol (5), puente (10), cabaña (20), **molino (30)**, estación (45), puerto (60), **faro (90)** y la **Gran Base Exploradora (180)**.
- 💛 **Desbloqueo por *días de visita acumulados*, no por racha estricta.** Decisión de diseño para respetar *"nunca se pierde progreso / sin castigo"*: faltar un día **no borra** el avance; solo se progresa al volver. La **racha consecutiva** se sigue mostrando como ánimo. *(Si prefieres racha estricta, se cambia en un parámetro.)*

> Subido el caché del service worker a **v9** (incluye el `Bastian.png` definitivo).

---

## v1.6 — 2026-06-30  ·  *Alineación con el Art Bible (Bastián, paleta, tipografías)*

Basado en **"Nilo Explorador — Art Bible & Design System" v1.0**.

**Nuevo**
- 🦫 **Bastián, el Constructor** y su **Bosque del Castor** (parada secreta): se descubre **por constancia, no por velocidad**. Botón 🪵 en la barra abre su campamento.
- 🏗️ **Construcciones permanentes por días seguidos**: árbol (2 días), puente (3), cabaña (5), gran puente (7), estación (10), puerto (14), observatorio (21) y la **Gran Base de Exploradores** (30). Nunca se pierden, aunque se rompa la racha; el niño ve **crecer su mundo** al regresar cada día.
- 🗺️ El **mapa de la expedición** muestra ahora la parada secreta del Bosque del Castor.
- ✍️ **Frase oficial** del bible en el inicio y en la bienvenida: *"No importa qué tan lejos llegues hoy. Lo importante es querer regresar mañana."*

**Cambios**
- 🔤 **Tipografías oficiales**: Fredoka (títulos), Baloo 2 (subtítulos) y Nunito (texto), con respaldo a fuentes del sistema. *(Se cargan por internet la primera vez; luego quedan en caché. Sin conexión nunca, se ven con las del sistema.)*
- 🎨 **Paleta** ampliada con **turquesa `#37D5D6`** (y café/gris para Bastián).
- 🐉 **Draco** pasa de "jefe final" a **"Gran reto · guardián del conocimiento"** (tono más amable, acorde al bible).
- 🧭 Nombres de las **paradas** afinados al bible (Taller de Robots, Cohete de Juguete, …).

> Subido el caché del service worker a **v7**.

---

## v1.5 — 2026-06-30  ·  *Mapa de expedición, bienvenida, tramos de viaje e ícono nuevo*

**Nuevo**
- 🗺️ **Mapa de la expedición** (botón 🗺️ en la barra): muestra las 8 paradas del viaje con su estado — completadas (✓), la parada **actual** resaltada (📍) y las bloqueadas (🔒) como "lugar secreto". Cada parada lleva su número, lugar y personaje.
- 🧭 **Tramos del viaje**: cada mundo es ahora una **parada con nombre** (p. ej. "Parada 1 · La Pista de Arranque"). Nilo la anuncia al empezar la misión, dando hilo a la aventura.
- 👋 **Pantalla de bienvenida** (solo la primera vez): Nilo invita a la expedición; es saltable ("¡Vamos!") y ofrece ver el mapa. No se repite (se recuerda con `seenWelcome`).
- 🎨 **Ícono nuevo** acorde a "Nilo Explorador": Nilo sobre fondo degradado azul→morado con una **brújula** de explorador. Reemplazados `icon-192/512`, sus versiones *maskable* y `icon-180` (iOS).

> Subido el caché del service worker a **v6** (para que los dispositivos tomen los iconos nuevos).

---

## v1.4 — 2026-06-30  ·  *Rebranding: "Nilo Explorador" + storytelling de expedición*

**Cambios**
- 🧭 **Nuevo nombre: "Nilo Explorador"** (subtítulo *"Aprende jugando"*). El nombre anterior, "Mate Aventura", se quedaba corto al haber ya dos áreas. Se conservan a **Nilo** y el tono de aventura como anclas familiares para el niño. Actualizados título, barra de marca, `manifest.json` (nombre de instalación), `index.html` y el meta de iOS.
- 📖 **Storytelling de expedición**: Nilo presenta el juego como un viaje para explorar **números** y **palabras** y "sumar amigos por el camino". El paso de elegir materia pasa a llamarse **"¿Qué exploramos hoy?"** con las opciones **Números 🔢** y **Palabras 🗣️**. Al completar una misión, el personaje del mundo **"se une a la expedición"**.
- 🧱 Se mantiene el término **"mundo"** en la mecánica (desbloqueo progresivo) para no romper la familiaridad del niño.

> Subido el caché del service worker a **v5**.

---

## v1.3 — 2026-06-30  ·  *Nueva área: Vocabulario (inglés ↔ español)*

**Nuevo**
- 🗣️ **Área de Vocabulario**: además de Matemáticas, ahora se elige un **área** al inicio. El modo Vocabulario enseña traducción **español ↔ inglés** con **opción múltiple** (4 botones).
- 🖼️ **Niveles de vocabulario**: *Básico* (muestra la palabra **con dibujo/emoji** de ayuda, siempre español→inglés), *Medio* (solo la palabra, dirección al azar) y *Mezcla*.
- 🧩 **Banco de palabras** de ~70 términos en categorías (animales, colores, comida, familia, cuerpo, naturaleza, objetos, números). Es fácil de ampliar: basta con añadir objetos `{es,en,emoji,cat,lvl}` a la lista `WORDS`.
- ♻️ **Reutiliza todo el sistema existente**: misma misión de 6 retos, **mismas recompensas** (Álbum Matemágico, pegatinas, animaciones), **insignias**, **personajes y Nilo como guía**, la **carrera vs. la liebre**, los **power-ups**, las **lecciones de conducta** y los **ajustes de accesibilidad** (sin castigo, refuerzo positivo, permite reintentar).
- 🧠 **Distractores inteligentes**: las opciones incorrectas se eligen de la **misma categoría** cuando es posible, para que el reto sea significativo.

**Notas técnicas**
- Generador `makeWordOp` / `makeWordPack` paralelo a `makeOp`; la pantalla de pregunta cambia según `q.type` (`setGameMode`), ocultando la operación vertical y el teclado numérico y mostrando los botones de opción.
- Acierto unificado en `registerCorrect()` (lo usan tanto matemáticas como vocabulario), así las recompensas y la progresión son idénticas.

> Subido el caché del service worker a **v4**.

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
