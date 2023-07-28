# 🗺 Next Map
Next.js 학습을 위한 지도 서비스 개발

<br>

## 🔍 프로젝트 기능
✔️ 지도 위 매장 표시 & 선택 & 해제
- 커스텀 마크로 지도 위 매장을 표시합니다.
- 매장을 선택 & 해제할 수 있으며 선택하여 간단한 매장 정보를 볼 수 있습니다.

✔️ 매장 자세히 보기
- 매장 상세 페이지에서 매장의 정보를 볼 수 있습니다.

✔️ 매장 공유
- 매장 URL을 공유하여 공유된 URL로 접속 시 지도 위에 해당 매장으로 zoom 됩니다.

✔️ 피드백
- 피드백 내용을 등록할 수 있습니다.

<br>

## ✨ 프로젝트 목적
### 1. `Next.js` 학습을 위한 지도 서비스 개발
- `next/lint`를 통해 CSR 방식으로 라우팅 합니다.
- `next/image`를 사용하여 이미지를 최적화합니다.
- `next/script`로 네이버 지도를 불러옵니다.
- `getStaticPaths`로 각 매장의 상세 페이지를 만듭니다.
- `SWR`로 상태 관리 합니다.

### 2. Lighthouse 성능 검사 및 개선
- 웹 접근성 개선
  - `button`태그 `aria-*` 속성을 사용한 accessible name 추가
  - `a`태그 `aria-*` 속성을 사용한 accessible name 추가
- SEO 개선
  - title, description meta tag 추가
    
### 3. 배포
- 네이버 서치어드바이저 등록
- 구글 서치 콘솔 등록
- 구글 애널리틱스 추가

### 4. Firebase (TBU)

<br />

## 🛠 개발도구
### Client
- Next.js
- React.js
- Typescript
- SWR
- Sass
- Firebase

### Deploy
- Vercel
- Naver Searchadvisor
- Google Search Console
- Google Analytics

<br />

## 👩🏻‍💻 Install
```bash
npm run dev
# or
yarn dev
```