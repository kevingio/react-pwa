// Flag for enabling cache in production
var doCache = false;
var CACHE_NAME = 'pwa-portfolio-cache';
// Delete old caches
this.addEventListener('activate', event => {
  const currentCachelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys()
      .then(keyList => 
        Promise.all(keyList.map(key => {
          if (!currentCachelist.includes(key)) {
            return caches.delete(key);
          }
        }))
      )
  );
});
// This triggers when user starts the app
this.addEventListener('install', function (event) {
  if (doCache) {
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(function (cache) {
          fetch('asset-manifest.json')
            .then(response => {
              response.json();
            })
            .then(assets => {
              // We will cache initial page and the main.js
              // We could also cache assets like CSS and images
              const urlsToCache = [
                '/',
                '/country',
                assets['main.js']
              ];
              cache.addAll(urlsToCache);
            })
        })
    );
  }
});
// Here we intercept request and serve up the matching files
this.addEventListener('fetch', function (event) {
  if (doCache) {
    event.respondWith(
      caches.match(event.request).then(function (response) {
        return response || fetch(event.request);
      })
    );
  }
});