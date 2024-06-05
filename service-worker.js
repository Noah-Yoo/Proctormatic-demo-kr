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
  workbox.precaching.precacheAndRoute([{"revision":"cd200fc42f9f043fe02b505b2a4552d3","url":"/Proctormatic-demo-kr/css/font.css"},{"revision":"4fe735469da6f01c2653a7352ce45c0e","url":"/Proctormatic-demo-kr/css/global.css"},{"revision":"2c81c84886ddd16e3520f1cccc62c030","url":"/Proctormatic-demo-kr/css/index.css"},{"revision":"72e4e651e5ea9c90cf33ae52c48ffe7f","url":"/Proctormatic-demo-kr/css/modal.css"},{"revision":"f5c9274e72019773df543253abaea17d","url":"/Proctormatic-demo-kr/css/reportDown.css"},{"revision":"b239667a7b601768790d45054e714f24","url":"/Proctormatic-demo-kr/css/reportSpecificUp.css"},{"revision":"236b9bb5ebbd405678aa5a8994dccaba","url":"/Proctormatic-demo-kr/css/reportUp.css"},{"revision":"5cdfce9c17960d9ac18d76d02437e332","url":"/Proctormatic-demo-kr/font/Pretendard-Black.woff2"},{"revision":"c45234800c42ff624adc8941a1fa9e8f","url":"/Proctormatic-demo-kr/font/Pretendard-Bold.woff2"},{"revision":"848bff7bea24a318a054979fd53fcd71","url":"/Proctormatic-demo-kr/font/Pretendard-ExtraBold.woff2"},{"revision":"8e7c56a3794737d30cb0806e6716ef57","url":"/Proctormatic-demo-kr/font/Pretendard-ExtraLight.woff2"},{"revision":"8f686c143e28df9c200c189c88f90a40","url":"/Proctormatic-demo-kr/font/Pretendard-Light.woff2"},{"revision":"146472533da4d370f600334864179b5b","url":"/Proctormatic-demo-kr/font/Pretendard-Medium.woff2"},{"revision":"bac296f1fd0973251e94406b8d328847","url":"/Proctormatic-demo-kr/font/Pretendard-Regular.woff2"},{"revision":"b1e912aa560e4d0e6537e42babb7f112","url":"/Proctormatic-demo-kr/font/Pretendard-SemiBold.woff2"},{"revision":"cfe8faacaa8e95d4338ccb53249d6562","url":"/Proctormatic-demo-kr/font/Pretendard-Thin.woff2"},{"revision":"d53bb7d55f6bc5fae43ca80b05cd1ae8","url":"/Proctormatic-demo-kr/img/arrow.svg"},{"revision":"a6321b8cf8980bacd024c53aa571627e","url":"/Proctormatic-demo-kr/img/favicon_16.png"},{"revision":"3104f928293adce7157cc663db4d6027","url":"/Proctormatic-demo-kr/img/favicon_32.png"},{"revision":"3104f928293adce7157cc663db4d6027","url":"/Proctormatic-demo-kr/img/favicon_96.png"},{"revision":"9d61f2281b80d7db337b6662fab7d609","url":"/Proctormatic-demo-kr/img/reportSpecific/arrowLeftWhite.svg"},{"revision":"411f31bb91337fc1d201233d2c5c2c80","url":"/Proctormatic-demo-kr/img/reportSpecific/arrowRightWhite.svg"},{"revision":"ce2d1a890f7dc7a0ab90fed6e5875f3b","url":"/Proctormatic-demo-kr/img/reportSpecific/Bad.svg"},{"revision":"dbfbad78101363c9f02b83f61d4e9ff5","url":"/Proctormatic-demo-kr/img/reportSpecific/detectError.svg"},{"revision":"16c1b03f83ceea01ca35efbdbabe0b6d","url":"/Proctormatic-demo-kr/img/reportSpecific/greyX.svg"},{"revision":"f907de02cb096898a754d68b994b8ae5","url":"/Proctormatic-demo-kr/img/reportSpecific/incompleteTest.svg"},{"revision":"663efa7a4072ab4e9bf032388da7dd9d","url":"/Proctormatic-demo-kr/img/reportSpecific/normal.svg"},{"revision":"ca48ff767bd2a44a418328c59fe2ad5a","url":"/Proctormatic-demo-kr/img/reportSpecific/settingPhoto/0/0/aroundSetting/1.png"},{"revision":"e8f85aeba5d0e238e995ad79e43bd1e8","url":"/Proctormatic-demo-kr/img/reportSpecific/settingPhoto/0/0/cameraSetting/1.png"},{"revision":"d09ff2dfa9dda6be9d718663ac66e603","url":"/Proctormatic-demo-kr/img/reportSpecific/settingPhoto/0/0/cameraSetting/2.png"},{"revision":"013c057bf517128bb1ca35819995dc81","url":"/Proctormatic-demo-kr/img/reportSpecific/settingPhoto/0/1/aroundSetting/1.png"},{"revision":"231bc9be5fe78006c37e197e819a882c","url":"/Proctormatic-demo-kr/img/reportSpecific/settingPhoto/0/1/cameraSetting/1.png"},{"revision":"09cfd85070f34c4931ab80216fe6f4e3","url":"/Proctormatic-demo-kr/img/reportSpecific/settingPhoto/0/1/cameraSetting/2.png"},{"revision":"94d2acbb3cc76c3f63ca4f345e602953","url":"/Proctormatic-demo-kr/img/reportSpecific/settingPhoto/0/2/aroundSetting/1.png"},{"revision":"17256399155a504c1732b59fe3a096fe","url":"/Proctormatic-demo-kr/img/reportSpecific/settingPhoto/0/2/cameraSetting/1.png"},{"revision":"689cb509ba0205fbd58cc12f90fbf861","url":"/Proctormatic-demo-kr/img/reportSpecific/settingPhoto/0/2/cameraSetting/2.png"},{"revision":"9c594f5373798dc69c5b67c04317ba17","url":"/Proctormatic-demo-kr/img/reportSpecific/sharing.svg"},{"revision":"b09fbc3cff6f3b96f96cdfbf4e851d87","url":"/Proctormatic-demo-kr/img/reportSpecific/suspicious.svg"},{"revision":"7778fbea2ee49e7e8b0d8a5c5dd0f882","url":"/Proctormatic-demo-kr/img/reportSpecific/uploaderPhoto/0/0/face-photo.png"},{"revision":"e80f908213d31a2c693a8851f2033129","url":"/Proctormatic-demo-kr/img/reportSpecific/uploaderPhoto/0/1/face-photo.png"},{"revision":"e871418c846037c5c471c47a8e9a5e2d","url":"/Proctormatic-demo-kr/img/reportSpecific/uploaderPhoto/0/2/face-photo.png"},{"revision":"1bf08da7909037291523ffefda60f4cb","url":"/Proctormatic-demo-kr/img/reportSpecific/uploadNotCompleted.svg"},{"revision":"269f277eb48f6d6aa142301222ecdb7e","url":"/Proctormatic-demo-kr/img/reportSpecific/white_ch.svg"},{"revision":"89f9f45fb94944d4d5351ee08757d9bc","url":"/Proctormatic-demo-kr/img/toggle.svg"},{"revision":"7aebddc449da48cf13792581ab7d9f22","url":"/Proctormatic-demo-kr/img/toggleAfter.svg"},{"revision":"ca35ea451ed51bb0b3bf6fe6187619f3","url":"/Proctormatic-demo-kr/index.html"},{"revision":"bd4ce7650edd94b07da9d4997df83a0c","url":"/Proctormatic-demo-kr/js/dountGraph.js"},{"revision":"fb75bedb2f50f4ca7847b1000af1e278","url":"/Proctormatic-demo-kr/js/function.js"},{"revision":"0a8995e4262b66ab99c8fc948fb91f4b","url":"/Proctormatic-demo-kr/js/graph.js"},{"revision":"9cafcefa13bf008585f106421bca83bf","url":"/Proctormatic-demo-kr/js/physical.js"},{"revision":"aab62c9c0c810c67ad06f77688e2bb77","url":"/Proctormatic-demo-kr/json/beforeUpload.json"},{"revision":"9191217af057aa8034d617ed5a690d96","url":"/Proctormatic-demo-kr/json/finishExam_copy.json"},{"revision":"7f85893f6c6a529dd97a1be0ed84cc18","url":"/Proctormatic-demo-kr/json/finishExam.json"},{"revision":"38f99c3d9c5e3498686550583564dc04","url":"/Proctormatic-demo-kr/json/report/eventSummary.json"},{"revision":"83e1c5c602cf04a5d3c30820d7206a36","url":"/Proctormatic-demo-kr/json/report/judgeSummary.json"},{"revision":"296ff3892fdaf2364c3b57c068dbf11b","url":"/Proctormatic-demo-kr/json/report/testerList.json"},{"revision":"ff2c01e917f2e258837555e99321aee8","url":"/Proctormatic-demo-kr/json/reportSpecific/rawUserData.json"},{"revision":"5373fb0ce8d073c0045f90bbb694df64","url":"/Proctormatic-demo-kr/json/reportSpecific/settingURL.json"},{"revision":"c4017a86fd3b615e325b60d18e842fa4","url":"/Proctormatic-demo-kr/json/reportSpecific/uploaderList.json"},{"revision":"15a1aec78b5945683bee9a877bd149bf","url":"/Proctormatic-demo-kr/json/reportSpecific/userData.json"},{"revision":"589da7dcd5ede7520e5697c3bb6efcbc","url":"/Proctormatic-demo-kr/json/reportSpecific/videoURL.json"},{"revision":"9057744463adefaccf2e821ffa1aaabe","url":"/Proctormatic-demo-kr/json/testSummary.json"},{"revision":"d3754f33a7868eb39e3c05550a87b32e","url":"/Proctormatic-demo-kr/json/waiting.json"},{"revision":"1fdd42a27438ee139a819ab8e6af706b","url":"/Proctormatic-demo-kr/logo_proctormatic_192.png"},{"revision":"96dc4e3941903065d877575d2cd48c9c","url":"/Proctormatic-demo-kr/logo_proctormatic_512.png"},{"revision":"2666fd681712c519ac3baf303834362d","url":"/Proctormatic-demo-kr/manifest.json"},{"revision":"d0e2266e3e20c6fc695dcb8ab04adc22","url":"/Proctormatic-demo-kr/media/reportSpecific/0/0/combined_video.mp4"},{"revision":"bef28c9b23e35170e07ab731197afd60","url":"/Proctormatic-demo-kr/media/reportSpecific/0/1/combined_video.mp4"},{"revision":"e493cd16d99fc52d223c98db7ac235fe","url":"/Proctormatic-demo-kr/media/reportSpecific/0/2/combined_video.mp4"},{"revision":"00d5d62053031a0dacba374570b4e2c5","url":"/Proctormatic-demo-kr/report.html"},{"revision":"f503fb5cd7b1bd3b9c35df05d1dd9196","url":"/Proctormatic-demo-kr/reportSpecific.html"},{"revision":"11bd4e82630254f4cf55dcccaf995813","url":"/Proctormatic-demo-kr/script.js"},{"revision":"966eb6a687d6c0077c35e691877511bd","url":"/Proctormatic-demo-kr/workbox-config.js"},{"revision":"cf880dbaa143a8a4a092190c65ea7701","url":"/Proctormatic-demo-kr/workbox/workbox-v7.1.0/workbox-cacheable-response.prod.js"},{"revision":"994473cfcdc8b193deba39d69c9f0679","url":"/Proctormatic-demo-kr/workbox/workbox-v7.1.0/workbox-core.prod.js"},{"revision":"2b8cabf7ded7e258e972bb8cc9cf90dc","url":"/Proctormatic-demo-kr/workbox/workbox-v7.1.0/workbox-precaching.prod.js"},{"revision":"b907c3d53e7ec5e995a8a81de4c21c9b","url":"/Proctormatic-demo-kr/workbox/workbox-v7.1.0/workbox-routing.prod.js"},{"revision":"a1b45f187a34aabf82a57c1116e99883","url":"/Proctormatic-demo-kr/workbox/workbox-v7.1.0/workbox-strategies.prod.js"},{"revision":"6b2de8ea95fe4451bc46af600ec37f1a","url":"/Proctormatic-demo-kr/workbox/workbox-v7.1.0/workbox-sw.js"}], {
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
