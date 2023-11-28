const CACHE_NAME = 'my-cache';

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            return cache.addAll([
                '',
                'index.html',
                'style.css',
                'utp.png',
                'yo.jpg',
                'pwa.png'
                // Agrega aquí más recursos estáticos que quieras cachear
            ]);
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
