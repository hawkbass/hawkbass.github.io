/**
 * Kill-switch service worker.
 *
 * The redesigned site no longer registers a service worker, but visitors
 * from the previous design still have one active. Browsers re-fetch sw.js
 * on navigation, install this version, and it unregisters itself and
 * clears every cache it left behind. Safe to delete this file once the
 * old worker population has drained.
 */
self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.map((key) => caches.delete(key)));
      await self.registration.unregister();
      // Reload open tabs so they detach from this worker immediately.
      const clients = await self.clients.matchAll({ type: "window" });
      clients.forEach((client) => client.navigate(client.url));
    })()
  );
});
