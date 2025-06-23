
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("arvaa-tunne").then(cache => {
      return cache.addAll(["/", "/index.html", "/manifest.json", "/peli.js", "/metadata.json"]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
