// Budżet domowy – działanie offline.
// Przy każdej nowej wersji zmień numer poniżej (taki sam jak APP_VERSION w index.html i w version.json).
const CACHE = 'budzet-4.0';
const FILES = ['./', './index.html', './manifest.webmanifest', './moneta-192.png', './moneta-512.png', './moneta-maskable.png', './xlsx.full.min.js'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE)
    .then(c => c.addAll(FILES.map(f => new Request(f, {cache: 'reload'}))))
    .then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
// Najpierw pamięć podręczna (działa bez internetu), w tle pobranie nowszej wersji.
// version.json zawsze z internetu – służy do sprawdzania aktualizacji.
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== self.location.origin || url.pathname.endsWith('version.json')) return;
  e.respondWith(caches.open(CACHE).then(async cache => {
    const cached = await cache.match(e.request, {ignoreSearch: true});
    const network = fetch(e.request).then(res => { if (res && res.ok) cache.put(e.request, res.clone()); return res; }).catch(() => null);
    return cached || (await network) || (e.request.mode === 'navigate' ? cache.match('./index.html') : Response.error());
  }));
});
