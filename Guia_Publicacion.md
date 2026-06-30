# Guía de publicación gratuita — Nilo Explorador

Esta guía explica cómo poner Nilo Explorador en internet **gratis**, obtener un **enlace (link)** y compartirlo por WhatsApp, Messenger, correo o un **código QR** para que cualquiera la abra y la **agregue a su pantalla de inicio**.

> Importante: por mensajería **se comparte el enlace, no el archivo**. La app debe estar alojada con **https** para que funcione bien e instalable. No envíes el `.html` suelto: la otra persona recibiría un archivo, no una app.

---

## Qué vas a subir

Sube **toda la carpeta** (la app + imágenes + archivos PWA), no solo el HTML. Archivos necesarios:

- `MateAventura.html` (la app)
- `manifest.json` y `sw.js` (hacen que sea instalable y funcione sin internet)
- Íconos: `icon-192.png`, `icon-512.png`, `icon-192-maskable.png`, `icon-512-maskable.png`, `icon-180.png`
- Personajes: `Nilo.png`, `Robi.png`, `Turbo.png`, `Cosmos.png`, `Luna.png`, `Rex.png`, `Draco.png`, `Misi.png`, `Tako.png`

> Importante (PWA): **no renombres** `MateAventura.html`. La configuración del PWA apunta a ese nombre. Si quieres una URL más corta tipo `https://tusitio.netlify.app/`, basta con compartir el enlace con `/MateAventura.html` al final, o avísame y ajusto la app para usar `index.html`.

---

## Opción A — Netlify Drop (la más fácil, sin cuenta técnica)

1. Entra a **https://app.netlify.com/drop**
2. **Arrastra la carpeta** completa (con el HTML y las imágenes) a la zona que dice *Drag and drop your site folder here*.
3. Espera unos segundos: Netlify te da una URL tipo `https://nombre-al-azar.netlify.app`.
4. (Opcional) Crea una cuenta gratis para conservar el sitio y poder **cambiar el nombre** del enlace a algo como `https://nilo-explorador.netlify.app` (Site settings → Change site name).
5. ¡Listo! Ese enlace ya se puede compartir.

> Para **actualizar** la app más adelante: vuelve a arrastrar la carpeta (o, con cuenta, en *Deploys* arrastras de nuevo) y el mismo enlace mostrará la versión nueva.

---

## Opción B — GitHub Pages (alternativa gratuita y permanente)

1. Crea una cuenta gratis en **https://github.com**
2. Crea un repositorio nuevo (botón *New*), por ejemplo `nilo-explorador`, márcalo **Public**.
3. Sube los archivos: *Add file → Upload files* → arrastra el HTML y las imágenes → *Commit*.
4. Ve a **Settings → Pages**.
5. En *Branch* elige `main` y carpeta `/ (root)` → *Save*.
6. En 1–2 minutos te dará una URL tipo `https://tuusuario.github.io/nilo-explorador/`.

---

## Cómo compartirla por mensajería

- Copia el enlace y pégalo en **WhatsApp, Messenger, Telegram, correo**, etc.
- O genera un **código QR** del enlace (en cualquier generador gratuito de QR) e imprímelo o compártelo como imagen; los papás lo escanean con la cámara.

---

## Cómo se instala en el celular ("Agregar a pantalla de inicio")

### Android (Chrome)
1. Abrir el enlace.
2. Menú **⋮** → **"Agregar a pantalla de inicio"** / **"Instalar app"**.
3. Aparece el ícono como una app.

### iPhone / iPad (Safari)
1. **Importante:** si abren el link dentro de WhatsApp/Messenger, primero toca **"Abrir en Safari"** (en el navegador interno no aparece la opción de instalar).
2. En Safari: botón **Compartir** (cuadro con flecha hacia arriba) → **"Agregar a pantalla de inicio"**.
3. Aparece el ícono como una app.

---

## Notas y buenas prácticas

- **Privacidad:** la app no recopila datos; todo el progreso se guarda en el propio dispositivo (localStorage). No requiere registro ni internet una vez abierta.
- **Funciona sin conexión:** tras convertirla en **PWA** (siguiente paso), se podrá usar sin internet y se verá a pantalla completa, como una app real.
- **Distribución libre:** el pie de la app indica "Hecho por Hugo I. Díaz · Sin fines de lucro · Distribución libre", así que puedes compartir el enlace con quien quieras.
- **Costo:** $0. Netlify y GitHub Pages son gratuitos para este uso.

---

## Ya es una PWA ✅

Nilo Explorador ya incluye `manifest.json`, `sw.js` e íconos, así que al publicarla con **https** (Netlify o GitHub Pages):
- Se instala con su **ícono de Nilo (con brújula)** y se abre a **pantalla completa**, como una app nativa.
- **Funciona sin internet** después de abrirla una vez (los recursos quedan en caché).
- No pasa por las tiendas ni tiene costo.

> Nota: las funciones de PWA (instalación e ícono propio, modo sin conexión) **solo se activan cuando la app está en un servidor https**. Si abres el archivo con doble clic (file://) la app funciona, pero no como PWA.

### Cómo actualizar la app más adelante
Cuando cambie la app, sube de nuevo la carpeta **y** edita en `sw.js` la línea `const CACHE = "mate-aventura-v6";` subiendo el número (`v7`, `v8`, …). Eso obliga a los celulares a tomar la versión nueva. *(El prefijo `mate-aventura-` es solo el nombre interno de la caché; no afecta al nombre de la app.)*

*Guía preparada para Nilo Explorador — publicación web gratuita (PWA).*
