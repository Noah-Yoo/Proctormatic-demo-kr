Workbox를 사용하여 서비스 워커 생성
Workbox CLI를 사용하여 서비스 워커 파일을 생성합니다. 다음 명령을 실행하여 service-worker.js 파일을 생성합니다:

** workbox generateSW workbox-config.js **

이 명령은 workbox-config.js 설정에 따라 service-worker.js 파일을 생성합니다.

로컬 인증서 생성 방법
mkcert -install
mkcert localhost 127.0.0.1 ::1 OR 내부 IP

https 서버 구동 방법
http-server -S -C localhost(내부)+2.pem -K localhost(내부)+2-key.pem