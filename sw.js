const CACHE_NAME = 'overstory-v3-stable';
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
        console.log('[SW] Opened cache');
        // Cache essential files first
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('[SW] Essential files cached');
        self.skipWaiting(); // Force activation
      })
  );
});

// Activate event - claim clients immediately
self.addEventListener('activate', event => {
  console.log('[SW] Activating and claiming clients...');
  event.waitUntil(self.clients.claim());
});

let assetMap = null;
let normalizedMap = null;

async function getAssetMap() {
  if (normalizedMap) return normalizedMap;
  try {
    const response = await fetch('./overstory-core/asset-map.json');
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    assetMap = await response.json();
    
    // Normalize map keys to lowercase for case-insensitive lookup
    normalizedMap = {};
    for (const spriteName in assetMap) {
      normalizedMap[spriteName.toLowerCase()] = assetMap[spriteName];
    }
    console.log('[SW] Asset map loaded and normalized');
    return normalizedMap;
  } catch (err) {
    console.error('[SW] Failed to load asset map:', err);
    return null;
  }
}

// Fetch event - serve from cache when offline, cache assets on first request
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  
  // BYPASS: Direct network fetch for bulk media assets to prevent S25 stalls
  if (url.pathname.includes('/assets/') || url.pathname.includes('/sb3-temp/')) {
    event.respondWith(fetch(event.request));
    return;
  }

  // Intercept overstory-core asset requests
  const assetMatch = url.pathname.match(/\/overstory-core\/([^/]+)\/(costumes|sounds)\/([^/]+)/);
  
  if (assetMatch) {
    const spriteName = decodeURIComponent(assetMatch[1]).toLowerCase();
    const type = assetMatch[2]; // 'costumes' or 'sounds'
    const fileName = decodeURIComponent(assetMatch[3]).toLowerCase();
    
    console.log(`[SW] Intercepted asset check: sprite=${spriteName}, type=${type}, file=${fileName}`);

      event.respondWith((async () => {
        const map = await getAssetMap();
        if (map && map[spriteName] && map[spriteName][type]) {
          // Case-insensitive filename lookup
          const typeMap = map[spriteName][type];
          let foundKey = null;
          for (const key in typeMap) {
            if (key.toLowerCase() === fileName) {
              foundKey = key;
              break;
            }
          }
          
          if (foundKey) {
            const hashName = typeMap[foundKey];
            const newUrl = new URL('./sb3-temp/' + hashName, self.location.origin);
            console.log(`[SW] ✅ PROXY: ${spriteName}/${type}/${fileName} -> ${hashName}`);
            
            try {
              const proxyResponse = await fetch(newUrl);
              const contentType = proxyResponse.headers.get('Content-Type');
              // If we get an SPA redirect (HTML) for a binary asset, fail the promise so we don't cache junk
              if (!proxyResponse.ok || (contentType && contentType.includes('text/html'))) {
                console.error(`[SW] ❌ INVALID RESPONSE for ${hashName}: status=${proxyResponse.status}, type=${contentType}`);
                return new Response('Asset load failed', { status: 404 });
              }
              return proxyResponse;
            } catch (err) {
              console.error(`[SW] ❌ FETCH ERROR for ${hashName}:`, err);
              return new Response('Asset fetch error', { status: 500 });
            }
          }
        }
        
        console.warn(`[SW] ❌ MISSING in map: ${spriteName}/${type}/${fileName}`);
        return fetch(event.request);
      })());
    return;
  }

  // Default Leopard/PWA behavior
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        
        return fetch(event.request).then(response => {
          // STRATEGY: Hardened Validation
          // 1. Only cache if 200 OK
          // 2. NEVER cache HTML as a binary asset (prevents 404/SPA poisoning)
          // 3. BYPASS cache for large media (>1MB) to allow OS-level streaming performance
          
          if (!response || response.status !== 200) {
            return response;
          }

          const contentType = response.headers.get('content-type') || '';
          const contentLength = parseInt(response.headers.get('content-length') || '0', 10);
          const isLargeMedia = contentLength > 1024 * 1024; // 1MB

          // If we expected an asset but got HTML, do NOT cache it.
          if (contentType.includes('text/html')) {
            console.warn(`[SW] Blocked HTML caching for: ${event.request.url}`);
            return response;
          }

          if (isLargeMedia) {
            console.log(`[SW] Large media bypass (>1MB): ${event.request.url}`);
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

