importScripts(
  '/Proctormatic-demo-kr/workbox/workbox-v7.1.0/workbox-sw.js',
  '/Proctormatic-demo-kr/workbox/workbox-v7.1.0/workbox-precaching.prod.js'
);

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);

  // 프리캐싱된 파일들
  workbox.precaching.precacheAndRoute(self.__WB_MANIFEST, {
    ignoreURLParametersMatching: [/.*/] // 모든 쿼리 파라미터 무시
  });

  self.addEventListener('install', (event) => {
    self.skipWaiting(); // 새로운 서비스 워커를 즉시 활성화
  });

  // fetch 이벤트 처리
  self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);
    console.log("요청 url: ", url);
    // 모든 HTML 파일에 대해 쿼리 파라미터를 무시하고 처리
    if (event.request.destination === 'document') {
      // 쿼리 파라미터를 제거한 URL을 생성
      const cacheUrl = new URL(url.origin + url.pathname);
      console.log("제거된 url: ", cacheUrl);

      event.respondWith(
        caches.match(cacheUrl).then((response) => {
          if (response) {
            console.log("캐시에서 응답 반환: ", cacheUrl);
            return response;
          } else {
            console.log("캐시에서 찾지 못함, 네트워크 요청: ", event.request.url);
            return fetch(event.request);
          }
          // 캐시된 응답이 있으면 반환, 없으면 네트워크 요청
          // return response || fetch(event.request);
        }).catch(error => {
          console.error("캐시 및 네트워크 응답 오류: ", error);
        })
      );
    }
  });

  self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim()); // 새로운 서비스 워커가 즉시 클라이언트를 제어하도록 설정
  });

} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

