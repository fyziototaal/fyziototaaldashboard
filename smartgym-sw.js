/* SmartGym service worker: nodig om de app op het beginscherm te kunnen zetten.
   Bewaart bewust NIETS in de cache: alles komt altijd vers van het internet,
   zodat de automatische versiecheck van de app blijft werken. */
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(fetch(e.request));
});
