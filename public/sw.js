//Asignar nombre y versión al caché

const CACHE_NAME = 'v1_cache_102';

//Archivos a guardar

var urlsToCache = [
    './img/Courier_.png',
    './img/Logo_Coyotes.webp',
    './img/Papas_bolsa.webp',
    './img/personajes.webp',
    './img/potato (1).webp',
    './img/potato (2).webp',
    './img/Rei Ayanami (1).jpeg:.png',
    './img/Rei Ayanami (2).jpeg:.png',
    './img/SLIDER_Empresa.webp',
    './',
    './styles/styles.css',
    './input.css',
    './jquery.js',
    './main.js',
    '/manifest.json',
    './package-lock.json',
    './package.json',
    './sw.js',
    './tailwind.config.js'
];

//Install - Instalación del SW
self.addEventListener('install', e => {      
    e.waitUntil(
        caches.open(CACHE_NAME)   
        .then(cache => {
            cache.addAll(urlsToCache) 
            .then(() =>{
                self.skipWaiting();
            })
        })
        .catch(err => {
            console.log('error!', err);
        })
    )
});

//Activar

self.addEventListener('activate', e =>{
    const cacheWhitelist = [CACHE_NAME]
    e.waitUntil(
        caches.keys()
        .then(cacheNames =>{
            return Promise.all(
                cacheNames.map(cacheName =>{
                    if(cacheWhitelist.indexOf(cacheName) == -1){
                        return caches.delete(cacheName);
                    }
                })
            );
        })
        .then(() => {
            self.clients.claim();
        })
    );
})

//Fetch

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request)
            .then(res => {
                if (res) {
                    return res;
                }
                return fetch(e.request).then(networkRes => {
                    if (!networkRes || networkRes.status !== 200 || networkRes.type !== 'basic') {
                        return networkRes;
                    }
                    let responseToCache = networkRes.clone();
                    caches.open(CACHE_NAME).then(cache => {
                        cache.put(e.request, responseToCache);
                    });
                    return networkRes;
                });
            })
            .catch(() => caches.match('./offline.html')) // Archivo de fallback
    );
});