// Incrementez VERSION a chaque deploiement : l'app se mettra a jour toute seule
const VERSION="2026.10.09-6";
const CORE=`core-${VERSION}`,RUNTIME="ocr-runtime-v1";
const FILES=["./","index.html","data.js","brands.js","manifest.webmanifest","icon.svg"];

self.addEventListener("install",e=>{
  e.waitUntil(caches.open(CORE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()));
});
self.addEventListener("activate",e=>{
  e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CORE&&k!==RUNTIME).map(k=>caches.delete(k))))
    .then(()=>self.clients.claim()));
});
self.addEventListener("fetch",e=>{
  const req=e.request;if(req.method!=="GET")return;
  const url=new URL(req.url);
  if(url.origin===location.origin){
    e.respondWith(caches.match(req,{ignoreSearch:true}).then(r=>r||fetch(req).catch(()=>caches.match("index.html"))));
  }else{
    e.respondWith(caches.open(RUNTIME).then(async c=>{
      const hit=await c.match(req);if(hit)return hit;
      const res=await fetch(req);if(res.ok||res.type==="opaque")c.put(req,res.clone());return res;
    }));
  }
});
