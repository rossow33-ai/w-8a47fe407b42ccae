const C="w1";self.addEventListener("install",e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(["./","index.html","payload.json","icon-192.png"])))});
self.addEventListener("activate",e=>e.waitUntil(clients.claim()));
self.addEventListener("fetch",e=>{e.respondWith(fetch(e.request).then(r=>{const k=r.clone();caches.open(C).then(c=>c.put(e.request,k));return r}).catch(()=>caches.match(e.request)))});
