
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("arvaa-tunne").then(cache => {
      return cache.addAll([
        "/",
        "/index.html",
        "/manifest.json",
        "/service-worker.js",
        "/metadata.json",
        "/kuvat/tunne_1.jpg",
        "/kuvat/tunne_2.jpg",
        "/kuvat/tunne_3.jpg",
        "/kuvat/tunne_4.jpg",
        "/kuvat/tunne_5.jpg",
        "/kuvat/tunne_6.jpg",
        "/kuvat/tunne_7.jpg",
        "/kuvat/tunne_8.jpg",
        "/kuvat/tunne_9.jpg",
        "/kuvat/tunne_10.jpg",
        "/kuvat/tunne_11.jpg",
        "/kuvat/tunne_12.jpg",
        "/kuvat/tunne_13.jpg",
        "/kuvat/tunne_14.jpg",
        "/kuvat/tunne_15.jpg",
        "/kuvat/tunne_16.jpg",
        "/kuvat/tunne_17.jpg",
        "/kuvat/tunne_18.jpg",
        "/kuvat/tunne_19.jpg",
        "/kuvat/tunne_20.jpg",
        "/kuvat/tunne_21.jpg",
        "/kuvat/tunne_22.jpg",
        "/kuvat/tunne_23.jpg",
        "/kuvat/tunne_24.jpg",
        "/kuvat/tunne_25.jpg",
        "/kuvat/tunne_26.jpg",
        "/kuvat/tunne_27.jpg",
        "/kuvat/tunne_28.jpg",
        "/kuvat/tunne_29.jpg",
        "/kuvat/tunne_30.jpg",
        "/kuvat/tunne_31.jpg",
        "/kuvat/tunne_32.jpg",
        "/kuvat/tunne_33.jpg",
        "/kuvat/tunne_34.jpg",
      ]);
    })
  );
});
self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
