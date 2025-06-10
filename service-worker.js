const CACHE_NAME = "overstory-cache-v1";
const urlsToCache = [
  "./",
  "./index.html",
  "./script.js",
  "./manifest.json",
  "./icon.png",
  // Add all assets from the assets folder
  // This will be a long list, it's better to fetch them dynamically or list them if known
  // For now, let's assume the game dynamically loads assets from the ./assets/ directory
  // and the service worker will intercept these requests.
  // A more robust approach would be to list all assets here or use a build tool.
];

self.addEventListener("install", function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log("Opened cache");
        // Add core files to cache. Assets will be cached on first fetch.
        return cache.addAll([
          "./",
          "./index.html",
          "./script.js",
          "./manifest.json",
          "./icon.png"
        ]);
      })
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        // Not in cache - fetch and cache
        return fetch(event.request).then(
          function(response) {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== "basic" && response.type !== "cors") {
              return response;
            }

            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(function(cache) {
                // Only cache GET requests
                if (event.request.method === "GET") {
                    cache.put(event.request, responseToCache);
                }
              });

            return response;
          }
        );
      })
    );
});

self.addEventListener("activate", function(event) {
  var cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

