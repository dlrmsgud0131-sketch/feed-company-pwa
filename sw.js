// 최소 서비스워커 — PWA 설치 요건(fetch 핸들러 존재)만 충족시키고, 오프라인 캐싱은 하지 않음.
// 이 앱은 Supabase 실시간 데이터에 의존하고 자체 버전관리(APP_VERSION)로 최신본을 즉시 반영하는 구조라,
// 여기서 index.html을 캐시해버리면 오히려 새 버전이 안 뜨는 사고로 이어질 수 있어 일부러 캐싱을 안 함.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
