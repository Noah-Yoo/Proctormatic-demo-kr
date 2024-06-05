importScripts(
  "/Proctormatic-demo-global/workbox/workbox-v7.1.0/workbox-sw.js",
  "/Proctormatic-demo-global/workbox/workbox-v7.1.0/workbox-precaching.prod.js",
  "/Proctormatic-demo-global/workbox/workbox-v7.1.0/workbox-routing.prod.js",
  "/Proctormatic-demo-global/workbox/workbox-v7.1.0/workbox-strategies.prod.js",
  "/Proctormatic-demo-global/workbox/workbox-v7.1.0/workbox-cacheable-response.prod.js",
);

if (workbox) {
  console.log(`Workbox is loaded`);

  // 프리캐시된 파일들
  workbox.precaching.precacheAndRoute(self.__WB_MANIFEST, {
    ignoreURLParametersMatching: [/.*/],
  });

  self.addEventListener("install", (event) => {
    self.skipWaiting(); // 새로운 서비스 워커를 즉시 활성화
  });

  // 모든 HTML 파일 캐싱
  workbox.routing.registerRoute(
    ({ request }) => request.destination === "document",
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: "html-cache",
      plugins: [
        new workbox.cacheableResponse.CacheableResponsePlugin({
          statuses: [0, 200],
        }),
      ],
    }),
  );

  // 이미지 파일 캐싱 (png, svg)
  workbox.routing.registerRoute(
    ({ request }) => request.destination === "image",
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: "image-cache",
      plugins: [
        new workbox.cacheableResponse.CacheableResponsePlugin({
          statuses: [0, 200],
        }),
      ],
    }),
  );

  // JS, CSS 파일 캐싱
  workbox.routing.registerRoute(
    ({ request }) =>
      request.destination === "script" || request.destination === "style",
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: "static-resources",
      plugins: [
        new workbox.cacheableResponse.CacheableResponsePlugin({
          statuses: [0, 200],
        }),
      ],
    }),
  );

  // 폰트 파일 캐싱 (woff2)
  workbox.routing.registerRoute(
    ({ request }) => request.destination === "font",
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: "font-cache",
      plugins: [
        new workbox.cacheableResponse.CacheableResponsePlugin({
          statuses: [0, 200],
        }),
      ],
    }),
  );

  // 비디오 파일 캐싱 (mp4)
  workbox.routing.registerRoute(
    ({ request }) => request.destination === "video",
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: "video-cache",
      plugins: [
        new workbox.cacheableResponse.CacheableResponsePlugin({
          statuses: [0, 200],
        }),
      ],
    }),
  );

  // JSON 파일 캐싱
  workbox.routing.registerRoute(
    ({ request }) =>
      request.destination === "json" || request.destination === "fetch",
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: "json-cache",
      plugins: [
        new workbox.cacheableResponse.CacheableResponsePlugin({
          statuses: [0, 200],
        }),
      ],
    }),
  );

  self.addEventListener("activate", (event) => {
    event.waitUntil(self.clients.claim()); // 새로운 서비스 워커가 즉시 클라이언트를 제어하도록 설정
  });
} else {
  console.log(`Workbox didn't load`);
}
