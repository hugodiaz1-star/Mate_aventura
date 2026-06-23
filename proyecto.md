# Mate Aventura — Documento de Proyecto

> **Versión:** 1.1 · **Estado:** Prototipo funcional + PWA instalable (publicable como app web)
> **Archivo principal:** `MateAventura.html` · **Entrada web:** `index.html`
> Este documento une la **visión conceptual** (trabajada en `Mate_Aventura.pdf`) con el **estado real de implementación** del prototipo.

---

## 1. Descripción general

Mate Aventura es una aplicación educativa para niños de educación primaria que ayuda a desarrollar habilidades matemáticas mediante el juego, la exploración y el refuerzo positivo.

Está concebida especialmente para ofrecer una experiencia amigable para **niños autistas**, con:

- Interacciones predecibles
- Refuerzos positivos
- Personajes consistentes
- Ausencia de castigos o penalizaciones
- Estímulos visuales controlados
- Progresión basada en logros

Caso de uso original: niño que termina **1º de primaria (México)** y se prepara para **2º**, reforzando sumas y restas (incluyendo dos dígitos con reagrupación).

---

## 2. Objetivos

**Académicos** — desarrollar: conteo, sumas, restas, multiplicaciones, divisiones, lógica matemática y resolución de problemas.

**Emocionales** — promover: perseverancia, autoconfianza, tolerancia a la frustración, concentración y autorregulación emocional.

---

## 3. Filosofía de diseño

1. El error es parte del aprendizaje.
2. Nunca se pierde progreso.
3. Cada intento tiene valor.
4. Los personajes acompañan, no juzgan.
5. La experiencia debe sentirse segura y predecible.

---

## 4. Personajes oficiales

| Personaje | Rol | Personalidad | Frases | Imagen | Estado |
|-----------|-----|--------------|--------|--------|--------|
| 🦦 **Nilo** | Guía principal | Amable, paciente, curioso, protector | "Vamos juntos" · "Tú puedes hacerlo" · "Intentémoslo otra vez" | `Nilo.png` | ✅ Guía permanente activo |
| 🤖 **Robi** | Explicador (paso a paso) | Lógico, claro, tranquilo | "Veámoslo paso a paso" · "Primero hacemos esto" | `Robi.png` | ✅ Implementado |
| 🚗 **Turbo** | Velocidad / sumas rápidas | Energético, optimista, competitivo sano | "¡Vamos rápido!" · "¡Qué gran velocidad!" | `Turbo.png` | ✅ Implementado (antes "Rayo McQueen") |
| 🚀 **Cosmo** | Explorador / descubrimiento | Curioso, valiente, aventurero | "¿Qué descubriremos hoy?" · "¡Vamos a explorar!" | `Cosmos.png` | ✅ Implementado |
| 🦖 **Rex** | Retos matemáticos | Valiente, persistente, divertido | "Acepta el reto" · "Cada desafío te hace más fuerte" | `Rex.png` | ✅ Implementado |
| 🎵 **Luna** | Motivación y celebración | Alegre, inspiradora, cariñosa | "¡Lo lograste!" · "Estoy orgullosa de ti" · "Cada intento cuenta" | `Luna.png` | ✅ Implementado |
| 🐱 **Misi** | Calma y respiración | Serena, dulce, comprensiva | "Respiremos juntos" · "Todo está bien" · "Vamos despacio" | `Misi.png` | ✅ Implementado |
| 🐙 **Tako** | Descansos y concentración | Relajado, sabio, paciente | "Tomemos un descanso" · "La calma también es aprender" | `Tako.png` | ✅ Implementado |
| 🐉 **Draco** | Jefe final de nivel | Noble, poderoso, respetuoso | "Has demostrado tu habilidad" · "Misión completada" | `Draco.png` | ✅ Implementado |

> Las imágenes viven junto al HTML. Si falta alguna, el personaje usa un dibujo SVG de respaldo automáticamente.

---

## 5. Sistema de mundos

### Visión conceptual (PDF)
- **Mundo 1 — Sumas** → Turbo
- **Mundo 2 — Restas** → Robi
- **Mundo 3 — Multiplicaciones** → Cosmo
- **Mundo 4 — Divisiones** → Rex
- **Mundo 5 — Problemas matemáticos** → Nilo
- **Mundo Final — Desafío Maestro** → Draco

### Estado actual del prototipo
El prototipo usa **8 mundos temáticos** que el niño elige libremente (Carreras, Héroes Robot, Juguete Espacial, Estrella Musical, Dinosaurios, Dragones, Gato Espacial, Pulpo Amistoso), cada uno con su personaje y personalidad. La dificultad se elige aparte con **niveles**:

- **Repaso ⭐** — sumas y restas hasta 20
- **Dos dígitos 🚀** — sin llevar / sin prestar
- **Reto 🏆** — con llevar y prestar
- **Mezcla 🎲** — un poco de todo

**Desbloqueo progresivo:** los mundos se abren en orden. Solo el primero (Carreras · Turbo) está disponible al inicio; cada mundo se desbloquea al **completar el anterior**. Los mundos bloqueados se muestran con **❓** y un aviso ("Completa el mundo anterior"); los completados llevan un **✓**. Al desbloquear uno nuevo, aparece "🔓 ¡Nuevo mundo desbloqueado!".

> **Pendiente / brecha:** atar cada mundo a una operación específica (como en la visión), y añadir multiplicaciones, divisiones, conteo y problemas (ver Visión a futuro).

---

## 6. Sistema de recompensas — "Álbum Matemágico"

**Regla principal: nunca se quitan las recompensas obtenidas.**

Cada **6 operaciones** (una misión) desbloquea de forma permanente:

- **Un personaje** (se descubre el del mundo jugado) — 8 en total.
- **Una pegatina** — colección de 20.
- **Una animación** — 6 (confeti, lluvia de estrellas, fuegos artificiales, corazones, burbujas, arcoíris mágico).

Extras de colección ya implementados:

- **Álbum Matemágico** (botón 🎴): personajes, pegatinas y animaciones desbloqueadas; las bloqueadas se ven con ❓/🔒; cada animación tiene botón "▶ Ver".
- **Lámina de pegatinas**: se arrastran desde la bandeja lateral a una cuadrícula y se quedan pegadas (mouse y táctil); se quitan soltándolas en el bote 🗑️. Se guarda entre sesiones.
- **Insignias** (botón 🏅): logros estilo anillos de actividad (aciertos, rachas, misiones, colección…).
- **Álbum de animales** (botón 🦋): 24 criaturas (insectos, artrópodos y otros animales) que se atrapan al tocar la criatura distractora; cada una trae un dato curioso.

> **Pendiente vs concepto:** **Fondos** coleccionables y **estrellas** como moneda explícita.

---

## 7. Mecánicas implementadas

- **Operaciones en vertical (columna)** sobre fondo de **cuadrícula de cuaderno**, con encabezados de **valor posicional: Centenas · Decenas · Unidades** (con código de color) siempre visibles.
- **Ayuda visual de la llevada (sumas) y el préstamo (restas)** en **cajitas** sobre cada columna: se rellenan solas con la ayuda activada y quedan **vacías** (para que el niño las escriba/piense) cuando se desactiva.
- **Resultado en casillas separadas y seleccionables:** una casilla por valor posicional; el niño **toca la casilla** (unidades, decenas, centenas) donde quiere escribir; al teclear avanza sola hacia la izquierda. El valor se calcula respetando el lugar de cada cifra.
- **Revelado de imagen secreta:** cada acierto destapa una pieza; al completar 6 aparece el personaje.
- **Nilo, guía permanente:** da instrucciones, felicita y **acompaña los errores sin juzgar** ("Veamos otra vez, juntos. Sin prisa"). Presenta a cada personaje y su personalidad al iniciar la misión, y aparece en las lecciones.
- **Animación de acierto:** estrellas que suben + rebote del personaje y de la pieza revelada.
- **Distracciones controladas:** una criatura cruza la pantalla, se posa y al tocarla muestra un dato; recuerda volver a enfocarse. Frecuencia ajustable o desactivable.
- **Lecciones de conducta** al terminar cada misión, con ilustración SVG (esfuerzo, tolerancia a perder con podio, celebración) y respiración guiada cuando aplica.
- **Carrera arcoíris "Tú 🏎️ vs la Liebre 🐇":** el coche del niño avanza con los aciertos y la liebre con el tiempo. Ritmo ajustable (Tranquila/Normal/Rápida) o desactivable. Si la liebre gana, la lección final es de **tolerancia a perder**.
- **Caja sorpresa (8 power-ups):** cada acierto puede dar uno para usar en la carrera — Turbo, Estrella, Salto arcoíris, Imán (avanzar) y Plátano, Caparazón, Hielo, Cámara lenta (frenar a la liebre).
- **Sonidos suaves** opcionales (WebAudio) y **persistencia** del progreso en el navegador (localStorage).

---

## 8. Accesibilidad

Opciones objetivo (PDF) y estado en el prototipo:

- ✅ **Reducir animaciones** ("Menos movimiento")
- ✅ **Desactivar sonidos**
- ✅ **Tiempo ilimitado** (no hay reloj obligatorio; la liebre es opcional)
- ✅ Control de **distracciones** (frecuencia / apagar) y de la **carrera**
- ✅ Ayuda visual de llevada/préstamo activable
- ✅ **Sesión amable**: límite de tiempo configurable que **nunca corta a media actividad**; avisa antes, deja terminar la misión y cierra con calma (pensado para el hiperfoco y la angustia por no terminar)
- ⬜ **Modo alto contraste** (pendiente)
- ⬜ **Modo concentración** dedicado (pendiente; parcialmente cubierto al apagar carrera y distracciones)

Principios de UX aplicados: estructura predecible ("Operación 3 de 6"), botones grandes, teclado numérico, refuerzo positivo sin castigo, colores calmados.

---

## 9. Estilo visual

**Dirección artística:** Cartoon 3D, inspiración Pixar, formas redondeadas, colores suaves, personajes coleccionables.

**Paleta oficial:**

| Color | Hex |
|-------|-----|
| Azul | `#3F7CF0` |
| Morado | `#7C5CFF` |
| Rosa | `#FF7EB6` |
| Amarillo | `#FFD34D` |
| Verde | `#4CB763` |
| Naranja | `#FFB13D` |

---

## 10. Detalles técnicos

- **App web** `MateAventura.html` (HTML + CSS + JS en línea). Se abre con doble clic, sin internet ni instalación.
- **Imágenes** de personajes en la misma carpeta (PNG con fondo transparente); respaldo SVG automático si falta alguna.
- **Persistencia** con `localStorage` (progreso, insignias, álbumes, pegatinas pegadas, mundos desbloqueados, ajustes).
- **Sin dependencias externas**; funciona offline en tablet o PC.
- **Compatibilidad táctil y mouse** (lámina de pegatinas y casillas usan eventos de puntero).

### PWA (instalable como app)
- `manifest.json` + `sw.js` (service worker) + íconos (`icon-192.png`, `icon-512.png`, versiones *maskable*, `icon-180.png` para iOS) → la app se **instala** en el celular/tablet y **funciona sin internet** tras abrirse una vez.
- `index.html` redirige a la app para que la **raíz** del enlace abra directamente Mate Aventura (útil en GitHub Pages u otro hosting).
- Las funciones PWA (instalación, modo offline) **requieren publicarla con https** (p. ej. GitHub Pages o Netlify). Ver `Guia_Publicacion.md`.
- Para actualizar la versión publicada: subir los archivos cambiados y subir el número en `sw.js` (`const CACHE = "mate-aventura-vN"`).

---

## 11. Estado de implementación (resumen)

| Área | Estado |
|------|--------|
| Sumas y restas (1 y 2 dígitos, con/sin reagrupación) | ✅ |
| Operación vertical + cuadrícula + columnas C/D/U | ✅ |
| Ayuda de llevada/préstamo en cajitas (activable) | ✅ |
| Resultado en casillas separadas y seleccionables | ✅ |
| 8 personajes + Nilo guía (con imágenes) | ✅ |
| Desbloqueo progresivo de mundos (❓ hasta completar) | ✅ |
| Revelado de imagen secreta | ✅ |
| Insignias / logros | ✅ |
| Álbum de animales (distracciones educativas) | ✅ |
| Lecciones de conducta con ilustración | ✅ |
| Carrera vs liebre + power-ups | ✅ |
| Álbum Matemágico (personaje + pegatina + animación por misión) | ✅ |
| Lámina de pegatinas arrastrables | ✅ |
| PWA instalable + offline (manifest, service worker, íconos) | ✅ |
| Multiplicaciones y divisiones | ⬜ |
| Conteo y problemas matemáticos | ⬜ |
| Mundos atados a operación (estructura del PDF) | ⬜ |
| Fondos coleccionables · modo alto contraste · modo concentración | ⬜ |

---

## 12. Visión a futuro

**Fase 1 (en curso):** Sumas · Restas · Personajes · Álbum. *(✅ en su mayoría)*

**Fase 2:** Multiplicaciones · Divisiones · Logros.

**Fase 3:** Aplicación móvil · Sincronización en la nube · Reportes para padres.

**Fase 4:** IA educativa personalizada · Ajuste automático de dificultad · Narrativa completa de Mate Aventura.

---

## 13. Archivos en la carpeta

- `MateAventura.html` — la aplicación.
- `index.html` — redirección a la app (para que la raíz del enlace la abra).
- `manifest.json`, `sw.js` — configuración PWA (instalable + offline).
- `icon-192.png`, `icon-512.png`, `icon-192-maskable.png`, `icon-512-maskable.png`, `icon-180.png` — íconos de la app.
- `Nilo.png`, `Robi.png`, `Turbo.png`, `Cosmos.png`, `Luna.png`, `Rex.png`, `Draco.png`, `Misi.png`, `Tako.png` — imágenes de personajes.
- `Guia_Publicacion.md` — guía para publicarla gratis y compartir el enlace.
- `Mate_Aventura.pdf` — documento conceptual (origen de esta visión).
- `proyecto.md` — este documento.

---

*Documento generado para consolidar la visión conceptual y el estado real del prototipo de Mate Aventura.*
