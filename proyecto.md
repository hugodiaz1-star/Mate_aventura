# Nilo Explorador — Documento de Proyecto

> **Versión:** 1.8 · **Nombre:** Nilo Explorador (antes "Mate Aventura") · **Estado:** Prototipo funcional + PWA instalable (publicable como app web) · **Áreas:** Números (matemáticas) y Palabras (vocabulario inglés ↔ español)
> **Archivo principal:** `MateAventura.html` · **Entrada web:** `index.html`
> Este documento une la **visión conceptual** (trabajada en `Mate_Aventura.pdf`) con el **estado real de implementación** del prototipo.
>
> **Marco narrativo:** una **expedición** guiada por **Nilo el Navegante**; al completar misiones, los personajes "se unen a la expedición". El término *mundo* se conserva en la mecánica para mantener la familiaridad del niño.
>
> **Apoyos de la expedición (v1.5):** **pantalla de bienvenida** la primera vez, **mapa de la expedición** (botón 🗺️) con las 8 paradas y su estado, y **tramos con nombre** por mundo (`WORLD_LEG`) que Nilo anuncia al empezar. **Ícono** rediseñado (Nilo + brújula).
>
> **Fuente de diseño oficial (v1.6):** `Nilo Explorador - Art Bible & Design System.pdf` (v1.0). De ahí provienen la paleta ampliada, las tipografías, el sistema de color/símbolo por personaje, **Bastián** y la frase oficial: *"No importa qué tan lejos llegues hoy. Lo importante es querer regresar mañana."*

---

## 1. Descripción general

Nilo Explorador es una aplicación educativa para niños de educación primaria que ayuda a desarrollar habilidades de **matemáticas** y **vocabulario (inglés ↔ español)** mediante el juego, la exploración y el refuerzo positivo. Todo se enmarca como una **expedición** que guía Nilo el Navegante.

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

**Académicos** — desarrollar: conteo, sumas, restas, multiplicaciones, divisiones, lógica matemática y resolución de problemas; y **adquisición de vocabulario** español ↔ inglés (con apertura a futuras áreas: lectura, ciencias, lógica…).

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
| 🦦 **Nilo** | Guía principal | Amable, paciente, curioso, protector | "Vamos juntos" · "Tú puedes hacerlo" · "Intentémoslo otra vez" | `Nilo.png` (nutria **azul** exploradora con goggles y brújula) | ✅ Guía permanente activo |
| 🤖 **Robi** | Explicador (paso a paso) | Lógico, claro, tranquilo | "Veámoslo paso a paso" · "Primero hacemos esto" | `Robi.png` | ✅ Implementado |
| 🚗 **Turbo** | Velocidad / sumas rápidas | Energético, optimista, competitivo sano | "¡Vamos rápido!" · "¡Qué gran velocidad!" | `Turbo.png` | ✅ Implementado (antes "Rayo McQueen") |
| 🚀 **Cosmo** | Explorador / descubrimiento | Curioso, valiente, aventurero | "¿Qué descubriremos hoy?" · "¡Vamos a explorar!" | `Cosmos.png` | ✅ Implementado |
| 🦖 **Rex** | Retos matemáticos | Valiente, persistente, divertido | "Acepta el reto" · "Cada desafío te hace más fuerte" | `Rex.png` | ✅ Implementado |
| 🎵 **Luna** | Motivación y celebración | Alegre, inspiradora, cariñosa | "¡Lo lograste!" · "Estoy orgullosa de ti" · "Cada intento cuenta" | `Luna.png` | ✅ Implementado |
| 🐱 **Misi** | Calma y respiración | Serena, dulce, comprensiva | "Respiremos juntos" · "Todo está bien" · "Vamos despacio" | `Misi.png` | ✅ Implementado |
| 🐙 **Tako** | Descansos y concentración | Relajado, sabio, paciente | "Tomemos un descanso" · "La calma también es aprender" | `Tako.png` | ✅ Implementado |
| 🐉 **Draco** | Gran reto · guardián del conocimiento | Noble, poderoso, respetuoso | "Soy Draco, guardián del conocimiento" · "Muéstrame lo que sabes, con calma" | `Draco.png` | ✅ Implementado |
| 🦫 **Bastián** | Constructor (personaje secreto) | Paciente, persistente, metódico, trabajador | "Las grandes aventuras se construyen poquito a poquito" | `Bastian.png` (avatar recortado de `bastian_personaje.png`) | ✅ Implementado (se descubre por constancia) |

> Las imágenes viven junto al HTML. Si falta alguna, el personaje usa un dibujo SVG de respaldo automáticamente.

### 4.b Color y símbolo por personaje (Art Bible)

| Personaje | Color | Símbolo |
|-----------|-------|---------|
| Nilo | Azul | Brújula |
| Robi | Azul claro | Engrane |
| Turbo | Rojo | Rayo |
| Cosmo | Amarillo | Cohete |
| Rex | Verde | Montaña |
| Luna | Rosa | Estrella |
| Misi | Celeste | Nube |
| Tako | Turquesa | Reloj de arena |
| Draco | Morado | Cristal |
| Bastián | Café | Tronco |

> Pendiente: reflejar estos colores/símbolos en los dibujos de cada personaje (hoy se usan imágenes/SVG existentes).

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

## 5.b Áreas de conocimiento (Matemáticas · Vocabulario)

Desde la v1.3 el niño elige primero un **área**:

- **Matemáticas 🔢** — sumas y restas (el contenido original).
- **Vocabulario 🗣️** — traducción **español ↔ inglés** por **opción múltiple** (4 botones). Niveles: *Básico* (palabra **con dibujo/emoji** de ayuda, siempre es→en), *Medio* (solo la palabra, dirección al azar) y *Mezcla*.

El banco de palabras (`WORDS` en `MateAventura.html`) trae ~70 términos en categorías (animales, colores, comida, familia, cuerpo, naturaleza, objetos, números) y **se amplía fácilmente** añadiendo objetos `{es,en,emoji,cat,lvl}`. Las opciones incorrectas se toman de la **misma categoría** para que el reto tenga sentido.

> Lo importante: el área de Vocabulario **reutiliza intacto** todo lo demás (misión de 6 retos, recompensas, insignias, personajes, Nilo, carrera, power-ups, lecciones y accesibilidad). El mismo molde sirve para futuras áreas (lectura, ciencias, lógica…).

---

## 5.c Expedición: paradas, mapa y bienvenida (v1.5)

Los 8 mundos forman el **itinerario de una expedición** guiada por Nilo. Cada mundo es una **parada con nombre** (`WORLD_LEG` en el código), que Nilo anuncia al empezar la misión ("🧭 Parada 3 · El Cohete de Juguete…").

| # | Parada | Mundo | Personaje |
|---|--------|-------|-----------|
| 1 | La Pista de Arranque | Carreras | Turbo |
| 2 | El Taller de los Robots | Héroes Robot | Robi |
| 3 | El Cohete de Juguete | Juguete Espacial | Cosmo |
| 4 | El Escenario de Estrellas | Estrella Musical | Luna |
| 5 | El Valle de los Dinos | Dinosaurios | Rex |
| 6 | La Montaña del Dragón | Dragones | Draco |
| 7 | La Nube de la Calma | Gato Espacial | Misi |
| 8 | El Arrecife Tranquilo | Pulpo Amistoso | Tako |

- **Mapa de la expedición** (botón 🗺️): lista las 8 paradas con su estado — completada (✓), **actual** resaltada (📍) y bloqueada (🔒, "lugar secreto").
- **Pantalla de bienvenida**: solo la primera vez (recordada con `seenWelcome`); Nilo invita a la expedición, es saltable y ofrece ver el mapa.
- **Parada secreta · Bosque del Castor**: aparece en el mapa y se descubre por **constancia** (ver 6.b). Hasta entonces se muestra como "??? (se descubre por constancia)".

> **Pendiente / idea:** mini-historia de inicio y cierre por parada, y revisar el orden para que Draco quede como guardián realmente final.

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

## 6.b Bastián y las Construcciones — recompensa por constancia

Inspirado en el Art Bible: *"Se desbloquea únicamente por constancia. No por velocidad."* Es un sistema **paralelo** al de aciertos, pensado para premiar **volver cada día** (el corazón de la frase oficial).

- **Métrica: días de visita acumulados** (`daysReturned`), **no racha estricta.** Decisión de diseño para respetar *"nunca se pierde progreso / sin castigo"*: faltar un día no borra el avance; solo se progresa al volver. La **racha consecutiva** (`dayStreak`) se guarda y se muestra como ánimo, pero **no condiciona** los desbloqueos. Abrir dos veces el mismo día no cuenta doble.
- **Construcciones permanentes** (botón 🪵 → **Campamento de Bastián / Bosque del Castor**), según la **lámina de Bastián**: 🌱 árbol (5 días), 🌉 puente (10), 🏡 cabaña (20), 🌾 molino (30), 🚂 estación (45), ⚓ puerto (60), 🗼 faro (90), 🏰 **Gran Base Exploradora** (180).
- **Bastián** (personaje secreto, imagen `Bastian.png` recortada de la lámina) se revela con la primera construcción. Antes, el campamento se ve bloqueado con una pista para volver otro día.

> Umbrales y nombres fácilmente ajustables en `CONSTRUCTIONS` dentro de `MateAventura.html`. Para volver a **racha estricta**, basta usar `dayStreak` en lugar de `daysReturned` en `checkConstructions`.

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

Principios de UX aplicados: estructura predecible ("Operación 3 de 6" en matemáticas · "Palabra 3 de 6" en vocabulario), botones grandes, teclado numérico o de opción múltiple según el área, refuerzo positivo sin castigo, colores calmados.

---

## 9. Estilo visual

**Dirección artística (Art Bible):** 3D Cartoon Premium, inspiración Pixar/DreamWorks/Nintendo/Duolingo/Pokémon. Proporciones de cabeza grande, ojos grandes, extremidades cortas, sonrisas naturales y siluetas reconocibles.

**Paleta oficial:**

| Color | Hex |
|-------|-----|
| Azul | `#3F7CF0` |
| Morado | `#7C5CFF` |
| Rosa | `#FF7EB6` |
| Amarillo | `#FFD34D` |
| Verde | `#4CB763` |
| Naranja | `#FFB13D` |
| Turquesa | `#37D5D6` |
| Blanco | `#FFFFFF` |
| Gris | `#ECECEC` |

**Tipografías oficiales:** **Fredoka** (títulos) · **Baloo 2** (subtítulos) · **Nunito** (texto). Integradas vía Google Fonts con respaldo a fuentes del sistema. *(Se descargan por internet la primera vez y quedan en caché; sin conexión la primera vez, se ven con las del sistema.)*

---

## 10. Detalles técnicos

- **App web** `MateAventura.html` (HTML + CSS + JS en línea). Se abre con doble clic, sin internet ni instalación.
- **Imágenes** de personajes en la misma carpeta (PNG con fondo transparente); respaldo SVG automático si falta alguna.
- **Persistencia** con `localStorage` (progreso, insignias, álbumes, pegatinas pegadas, mundos desbloqueados, ajustes).
- **Sin dependencias externas**; funciona offline en tablet o PC.
- **Compatibilidad táctil y mouse** (lámina de pegatinas y casillas usan eventos de puntero).

### PWA (instalable como app)
- `manifest.json` + `sw.js` (service worker) + íconos (`icon-192.png`, `icon-512.png`, versiones *maskable*, `icon-180.png` para iOS) → la app se **instala** en el celular/tablet y **funciona sin internet** tras abrirse una vez.
- `index.html` redirige a la app para que la **raíz** del enlace abra directamente Nilo Explorador (útil en GitHub Pages u otro hosting).
- **Ícono** de "Nilo Explorador": **cara del Nilo azul** (de `nilo_new.png`, fondo removido) sobre degradado azul→morado; generado por código (Pillow) en 192/512, *maskable* y 180 (iOS), conservando los nombres de archivo.
- **Portada** en el inicio (`portada_new.png`, clase `.cover`).
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
| Área de Vocabulario (es↔en, opción múltiple, niveles, banco ampliable) | ✅ |
| Rebranding a "Nilo Explorador" (título, marca, manifest, ícono) | ✅ |
| Expedición: paradas con nombre, mapa 🗺️ y pantalla de bienvenida | ✅ |
| Bastián + Construcciones por constancia (días seguidos) 🪵 | ✅ |
| Tipografías oficiales (Fredoka/Baloo 2/Nunito) + paleta ampliada | ✅ |
| Frase oficial del Art Bible en inicio y bienvenida | ✅ |
| Color/símbolo propio por personaje en los dibujos | ⬜ |
| Expresiones por personaje (feliz, pensando, celebrando…) | ⬜ |
| Multiplicaciones y divisiones | ⬜ |
| Conteo y problemas matemáticos | ⬜ |
| Mundos atados a operación (estructura del PDF) | ⬜ |
| Fondos coleccionables · modo alto contraste · modo concentración | ⬜ |

---

## 12. Visión a futuro

**Fase 1 (en curso):** Sumas · Restas · Vocabulario es↔en · Personajes · Álbum · Expedición (mapa, paradas, bienvenida). *(✅ en su mayoría)*

**Fase 2:** Multiplicaciones · Divisiones · Más áreas de conocimiento · Logros.

**Fase 3:** Aplicación móvil · Sincronización en la nube · Reportes para padres.

**Fase 4:** IA educativa personalizada · Ajuste automático de dificultad · Narrativa completa de Nilo Explorador.

---

## 13. Archivos en la carpeta

- `MateAventura.html` — la aplicación.
- `index.html` — redirección a la app (para que la raíz del enlace la abra).
- `manifest.json`, `sw.js` — configuración PWA (instalable + offline).
- `icon-192.png`, `icon-512.png`, `icon-192-maskable.png`, `icon-512-maskable.png`, `icon-180.png` — íconos de la app.
- `Nilo.png`, `Robi.png`, `Turbo.png`, `Cosmos.png`, `Luna.png`, `Rex.png`, `Draco.png`, `Misi.png`, `Tako.png` — imágenes de personajes (`Nilo.png` = nutria azul actual).
- `nilo_new.png` — imagen oficial del nuevo Nilo azul (fondo negro; fuente del avatar y del ícono).
- `bastian_new.png` — imagen oficial del nuevo Bastián (fondo blanco; fuente del avatar `Bastian.png`).
- `portada_new.png` — **portada** de la app (se muestra en el inicio).
- `Guia_Publicacion.md` — guía para publicarla gratis y compartir el enlace.
- `Mate_Aventura.pdf` — documento conceptual original (origen de esta visión).
- `Nilo Explorador - Art Bible & Design System.pdf` — **biblia de arte y diseño** (v1.0): fuente oficial de marca, paleta, tipografías, personajes y storytelling.
- `CHANGELOG.md` — registro de versiones.
- `proyecto.md` — este documento.
- `Bastian.png` — avatar de Bastián que usa la app (recortado de `bastian_personaje.png`). Si faltara, se usa su dibujo SVG.
- `bastian_personaje.png` — **imagen oficial del personaje** Bastián (cuerpo completo, fondo blanco).
- `bastian_hoja.png` — **lámina de personaje** de Bastián (pose, expresiones, herramientas y construcciones); arte de referencia.

---

*Documento generado para consolidar la visión conceptual y el estado real del prototipo de Nilo Explorador (antes "Mate Aventura").*
