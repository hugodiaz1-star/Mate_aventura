/* Service Worker — Mate Aventura (PWA)
   Cachea la app y sus recursos para que funcione sin internet. */
const CACHE = "mate-aventura-v2";
const ASSETS = [
  "index.html",
  "MateAventura.html",
  "manifest.json",
  "icon-192.png",
  "icon-512.png",
  "icon-192-maskable.png",
  "icon-512-maskable.png",
  "icon-180.png",
  "Nilo.png",
  "Robi.png",
  "Turbo.png",
  "Cosmos.png",
  "Luna.png",
  "Rex.png",
  "Draco.png",
  "Misi.png",
  "Tako.png"
];

// Instalación: guardamos los recursos en caché.
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

// Activación: limpiamos cachés viejos.
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Fetch: primero caché, si no, red (y guardamos copia).
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request).then((hit) => {
      if (hit) return hit;
      return fetch(e.request).then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(e.request, copy)).catch(() => {});
        return res;
      }).catch(() => caches.match("MateAventura.html"));
    })
  );
});
