
const CACHE_NAME = 'arvaa-tunne-v1';
const filesToCache = [
  './',
  './index.html',
  './manifest.json',
  './metadata.json',
  './icon-192.png',
  './icon-512.png'
  // Ei lisätä yksittäisiä kuvia — ne haetaan dynaamisesti eikä cachettaminen ole pakollista
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(filesToCache);
    }).catch(function(error) {
      console.error('Välimuistin tallennus epäonnistui:', error);
    })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(
        keyList.map(function(key) {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
