/* Mind — service worker: offline support + instant loads.
 * Relative paths so it works at any host/subpath (your server root OR a GitHub Pages subfolder).
 * Network-first for the app shell (new deploys reach you when online), cache fallback when offline.
 * API + WebSocket are never cached. */
const CACHE = "mind-v2";
const ASSETS = ["./", "./index.html", "./manifest.webmanifest",
  "./icon-192.png", "./icon-512.png", "./apple-touch-icon.png"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys()
    .then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener("fetch", (e) => {
  const u = new URL(e.request.url);
  if (e.request.method !== "GET" || u.pathname.includes("/api/") || u.pathname.includes("/ws")) return;
  e.respondWith(
    fetch(e.request)
      .then((r) => { const cp = r.clone(); caches.open(CACHE).then((c) => c.put(e.request, cp)); return r; })
      .catch(() => caches.match(e.request).then((m) => m || caches.match("./index.html") || caches.match("./")))
  );
});
