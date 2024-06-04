module.exports = {
  globDirectory: './',
  globPatterns: [
    '**/*.{html,js,css,png,svg,json,woff2,mp4}'
  ],
  swDest: 'service-worker.js',
  swSrc: 'src-sw.js',
  // clientsClaim: true,
  // skipWaiting: true,
  modifyURLPrefix: {
    '': '/Proctormatic-demo-kr/'  // 여기에 리포지토리 이름을 입력합니다.
  },
  maximumFileSizeToCacheInBytes: 80 * 1024 * 1024, // 80MB
};