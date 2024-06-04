// script.js

// 기존의 스크립트 내용
document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript is running offline!');
});

// 서비스 워커 등록
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/Proctormatic-demo-kr/service-worker.js')
      .then(registration => {
        console.log('Service Worker registered with scope:', registration.scope);
        if (registration) {
          registration.update();
        }
      })
      .catch(error => {
        console.log('Service Worker registration failed:', error);
      });
  });
}