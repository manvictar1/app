// Incrémentez VERSION à chaque mise à jour.
const VERSION='absences-v4',CORE=['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png'];
const save=(rq,r)=>{const cp=r.clone();caches.open(VERSION).then(c=>c.put(rq,cp));return r};
self.addEventListener('install',e=>e.waitUntil(caches.open(VERSION).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==VERSION).map(x=>caches.delete(x)))).then(()=>clients.claim())));
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(e.request.method!=='GET'||u.hostname==='api.github.com')return;
if(u.origin===location.origin)e.respondWith(fetch(u.href,{cache:'no-cache'}).then(r=>save(e.request,r)).catch(()=>caches.match(e.request).then(m=>m||caches.match('index.html'))));
else e.respondWith(caches.match(e.request).then(m=>m||fetch(e.request).then(r=>save(e.request,r))))});
