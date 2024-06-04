importScripts(
  '/Proctormatic-demo-kr/workbox/workbox-v7.1.0/workbox-sw.js',
  '/Proctormatic-demo-kr/workbox/workbox-v7.1.0/workbox-precaching.prod.js'
);

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);

  // 프리캐싱된 파일들
  workbox.precaching.precacheAndRoute([{"revision":"83ecff8c7e3514bd32c2b034a34f4043","url":"/Proctormatic-demo-kr/css/font.css"},{"revision":"be5bc1ece5ebebef35ed4c705b83cebf","url":"/Proctormatic-demo-kr/css/global.css"},{"revision":"2c81c84886ddd16e3520f1cccc62c030","url":"/Proctormatic-demo-kr/css/index.css"},{"revision":"72e4e651e5ea9c90cf33ae52c48ffe7f","url":"/Proctormatic-demo-kr/css/modal.css"},{"revision":"f5c9274e72019773df543253abaea17d","url":"/Proctormatic-demo-kr/css/reportDown.css"},{"revision":"b239667a7b601768790d45054e714f24","url":"/Proctormatic-demo-kr/css/reportSpecificUp.css"},{"revision":"236b9bb5ebbd405678aa5a8994dccaba","url":"/Proctormatic-demo-kr/css/reportUp.css"},{"revision":"5cdfce9c17960d9ac18d76d02437e332","url":"/Proctormatic-demo-kr/font/Pretendard-Black.woff2"},{"revision":"c45234800c42ff624adc8941a1fa9e8f","url":"/Proctormatic-demo-kr/font/Pretendard-Bold.woff2"},{"revision":"848bff7bea24a318a054979fd53fcd71","url":"/Proctormatic-demo-kr/font/Pretendard-ExtraBold.woff2"},{"revision":"8e7c56a3794737d30cb0806e6716ef57","url":"/Proctormatic-demo-kr/font/Pretendard-ExtraLight.woff2"},{"revision":"8f686c143e28df9c200c189c88f90a40","url":"/Proctormatic-demo-kr/font/Pretendard-Light.woff2"},{"revision":"146472533da4d370f600334864179b5b","url":"/Proctormatic-demo-kr/font/Pretendard-Medium.woff2"},{"revision":"bac296f1fd0973251e94406b8d328847","url":"/Proctormatic-demo-kr/font/Pretendard-Regular.woff2"},{"revision":"b1e912aa560e4d0e6537e42babb7f112","url":"/Proctormatic-demo-kr/font/Pretendard-SemiBold.woff2"},{"revision":"cfe8faacaa8e95d4338ccb53249d6562","url":"/Proctormatic-demo-kr/font/Pretendard-Thin.woff2"},{"revision":"d53bb7d55f6bc5fae43ca80b05cd1ae8","url":"/Proctormatic-demo-kr/img/arrow.svg"},{"revision":"a6321b8cf8980bacd024c53aa571627e","url":"/Proctormatic-demo-kr/img/favicon_16.png"},{"revision":"3104f928293adce7157cc663db4d6027","url":"/Proctormatic-demo-kr/img/favicon_32.png"},{"revision":"3104f928293adce7157cc663db4d6027","url":"/Proctormatic-demo-kr/img/favicon_96.png"},{"revision":"9d61f2281b80d7db337b6662fab7d609","url":"/Proctormatic-demo-kr/img/reportSpecific/arrowLeftWhite.svg"},{"revision":"411f31bb91337fc1d201233d2c5c2c80","url":"/Proctormatic-demo-kr/img/reportSpecific/arrowRightWhite.svg"},{"revision":"4a143e7f893dad64fd933108e89b9bdf","url":"/Proctormatic-demo-kr/img/reportSpecific/Bad.svg"},{"revision":"f2535b789abd7ab67d216f859b21d8bb","url":"/Proctormatic-demo-kr/img/reportSpecific/detectError.svg"},{"revision":"16c1b03f83ceea01ca35efbdbabe0b6d","url":"/Proctormatic-demo-kr/img/reportSpecific/greyX.svg"},{"revision":"b36b4cd1e1d969ad83703e7bbb4c9a35","url":"/Proctormatic-demo-kr/img/reportSpecific/incompleteTest.svg"},{"revision":"c7d1f1e35856c4d306a7d3dee041bfe3","url":"/Proctormatic-demo-kr/img/reportSpecific/normal.svg"},{"revision":"ca48ff767bd2a44a418328c59fe2ad5a","url":"/Proctormatic-demo-kr/img/reportSpecific/settingPhoto/0/0/aroundSetting/1.png"},{"revision":"e8f85aeba5d0e238e995ad79e43bd1e8","url":"/Proctormatic-demo-kr/img/reportSpecific/settingPhoto/0/0/cameraSetting/1.png"},{"revision":"d09ff2dfa9dda6be9d718663ac66e603","url":"/Proctormatic-demo-kr/img/reportSpecific/settingPhoto/0/0/cameraSetting/2.png"},{"revision":"013c057bf517128bb1ca35819995dc81","url":"/Proctormatic-demo-kr/img/reportSpecific/settingPhoto/0/1/aroundSetting/1.png"},{"revision":"231bc9be5fe78006c37e197e819a882c","url":"/Proctormatic-demo-kr/img/reportSpecific/settingPhoto/0/1/cameraSetting/1.png"},{"revision":"09cfd85070f34c4931ab80216fe6f4e3","url":"/Proctormatic-demo-kr/img/reportSpecific/settingPhoto/0/1/cameraSetting/2.png"},{"revision":"94d2acbb3cc76c3f63ca4f345e602953","url":"/Proctormatic-demo-kr/img/reportSpecific/settingPhoto/0/2/aroundSetting/1.png"},{"revision":"17256399155a504c1732b59fe3a096fe","url":"/Proctormatic-demo-kr/img/reportSpecific/settingPhoto/0/2/cameraSetting/1.png"},{"revision":"689cb509ba0205fbd58cc12f90fbf861","url":"/Proctormatic-demo-kr/img/reportSpecific/settingPhoto/0/2/cameraSetting/2.png"},{"revision":"9c594f5373798dc69c5b67c04317ba17","url":"/Proctormatic-demo-kr/img/reportSpecific/sharing.svg"},{"revision":"25dd7e9622778c921d27e7f27dc18e40","url":"/Proctormatic-demo-kr/img/reportSpecific/suspicious.svg"},{"revision":"7778fbea2ee49e7e8b0d8a5c5dd0f882","url":"/Proctormatic-demo-kr/img/reportSpecific/uploaderPhoto/0/0/face-photo.png"},{"revision":"e80f908213d31a2c693a8851f2033129","url":"/Proctormatic-demo-kr/img/reportSpecific/uploaderPhoto/0/1/face-photo.png"},{"revision":"e871418c846037c5c471c47a8e9a5e2d","url":"/Proctormatic-demo-kr/img/reportSpecific/uploaderPhoto/0/2/face-photo.png"},{"revision":"7174c19dacb61b1f29648e14ca951df1","url":"/Proctormatic-demo-kr/img/reportSpecific/uploadNotCompleted.svg"},{"revision":"269f277eb48f6d6aa142301222ecdb7e","url":"/Proctormatic-demo-kr/img/reportSpecific/white_ch.svg"},{"revision":"89f9f45fb94944d4d5351ee08757d9bc","url":"/Proctormatic-demo-kr/img/toggle.svg"},{"revision":"7aebddc449da48cf13792581ab7d9f22","url":"/Proctormatic-demo-kr/img/toggleAfter.svg"},{"revision":"14f2782dd8991e213dd3495ef0336480","url":"/Proctormatic-demo-kr/index.html"},{"revision":"5774b78d3409b96845c32affe4425db2","url":"/Proctormatic-demo-kr/js/dountGraph.js"},{"revision":"6fa17724a56796a2f92e832e4667e13b","url":"/Proctormatic-demo-kr/js/function.js"},{"revision":"38c6a47a8b6990606373ef98ba2809a9","url":"/Proctormatic-demo-kr/js/graph.js"},{"revision":"87f646725b5f7e9e14270847e430b5c7","url":"/Proctormatic-demo-kr/js/physical.js"},{"revision":"8da4cdb6e2c42b038c32085b0d61748d","url":"/Proctormatic-demo-kr/json/beforeUpload.json"},{"revision":"9191217af057aa8034d617ed5a690d96","url":"/Proctormatic-demo-kr/json/finishExam_copy.json"},{"revision":"d8ce4d7cdecf640210437420a388eac1","url":"/Proctormatic-demo-kr/json/finishExam.json"},{"revision":"09c3cf7483dd5f65499237336edc7a1e","url":"/Proctormatic-demo-kr/json/report/eventSummary.json"},{"revision":"0746fe11dee4dc9f207f072cc3a9b1b8","url":"/Proctormatic-demo-kr/json/report/judgeSummary.json"},{"revision":"c0e4f5ddb86f9d21691f1468336f7466","url":"/Proctormatic-demo-kr/json/report/testerList.json"},{"revision":"a8b56ade8ed3d7815b74634e8f39864a","url":"/Proctormatic-demo-kr/json/reportSpecific/rawUserData.json"},{"revision":"b5c2d729455f46a2e85fcd50de1f6264","url":"/Proctormatic-demo-kr/json/reportSpecific/settingURL.json"},{"revision":"c4017a86fd3b615e325b60d18e842fa4","url":"/Proctormatic-demo-kr/json/reportSpecific/uploaderList.json"},{"revision":"d996e01d5d2fa7ac5362323b69dfe4d6","url":"/Proctormatic-demo-kr/json/reportSpecific/userData.json"},{"revision":"2672c3823feaaa8830db971bd60f1747","url":"/Proctormatic-demo-kr/json/reportSpecific/videoURL.json"},{"revision":"40b929d90fca59aa90e9e1ed090869c7","url":"/Proctormatic-demo-kr/json/testSummary.json"},{"revision":"b7b12a7176af5bd4aec3158aa5f38185","url":"/Proctormatic-demo-kr/json/waiting.json"},{"revision":"1fdd42a27438ee139a819ab8e6af706b","url":"/Proctormatic-demo-kr/logo_proctormatic_192.png"},{"revision":"96dc4e3941903065d877575d2cd48c9c","url":"/Proctormatic-demo-kr/logo_proctormatic_512.png"},{"revision":"824a00679d10cddd5976cfb3ff474841","url":"/Proctormatic-demo-kr/manifest.json"},{"revision":"d0e2266e3e20c6fc695dcb8ab04adc22","url":"/Proctormatic-demo-kr/media/reportSpecific/0/0/combined_video.mp4"},{"revision":"bef28c9b23e35170e07ab731197afd60","url":"/Proctormatic-demo-kr/media/reportSpecific/0/1/combined_video.mp4"},{"revision":"e493cd16d99fc52d223c98db7ac235fe","url":"/Proctormatic-demo-kr/media/reportSpecific/0/2/combined_video.mp4"},{"revision":"b84d056b22b0e4435d4082779d2e26cd","url":"/Proctormatic-demo-kr/report.html"},{"revision":"acc12fbd2e38ab9c131b3b1ec9ebb426","url":"/Proctormatic-demo-kr/reportSpecific.html"},{"revision":"4dcfe3f5dd33aa173f96366f492b8d79","url":"/Proctormatic-demo-kr/script.js"},{"revision":"8879ef720b93a227e6da7d7ccaa20ff5","url":"/Proctormatic-demo-kr/workbox-config.js"},{"revision":"994473cfcdc8b193deba39d69c9f0679","url":"/Proctormatic-demo-kr/workbox/workbox-v7.1.0/workbox-core.prod.js"},{"revision":"2b8cabf7ded7e258e972bb8cc9cf90dc","url":"/Proctormatic-demo-kr/workbox/workbox-v7.1.0/workbox-precaching.prod.js"},{"revision":"6b2de8ea95fe4451bc46af600ec37f1a","url":"/Proctormatic-demo-kr/workbox/workbox-v7.1.0/workbox-sw.js"}], {
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

