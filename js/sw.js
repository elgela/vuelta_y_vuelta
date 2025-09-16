////////////service worker//////////////

// service-worker.js
self.addEventListener('install', event => {
  console.log('Service Worker instalado');
});

self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request));
});

navigator.serviceWorker.register('./sw.js')