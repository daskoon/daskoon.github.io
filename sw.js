const CACHE_NAME = 'overstory-v1';
const urlsToCache = [
  './',
  './index.html',
  './script.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

// Install event - cache resources
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        // Cache essential files first
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        // Cache assets dynamically as they're requested
        console.log('Essential files cached');
      })
  );
});

// Fetch event - serve from cache when offline, cache assets on first request
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  

  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        
        return fetch(event.request).then(response => {
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          const responseToCache = response.clone();

          if (event.request.url.includes('/assets/') || 
              event.request.url.match(/\.(png|jpg|jpeg|svg|wav|mp3|ogg)$/)) {
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });
          }

          return response;
        });
      })
      .catch(() => {
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

