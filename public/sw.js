self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open("portfolio-static-v1").then((cache) =>
      cache.addAll([
        "/",
        "/about",
        "/skills",
        "/projects",
        "/experience",
        "/contact",
        "/manifest.json",
      ])
    )
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== "portfolio-static-v1") {
            return caches.delete(key);
          }
          return null;
        })
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;

      return fetch(event.request)
        .then((response) => {
          const responseClone = response.clone();
          caches.open("portfolio-static-v1").then((cache) => {
            cache.put(event.request, responseClone);
          });
          return response;
        })
        .catch(() => caches.match("/"));
    })
  );
});
