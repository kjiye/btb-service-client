## Beyond the Birthplace

> [Beyond the Birthplace](https://beyondthebirthplace.kr)에서는 조각가 고요손이 자신의 방 안에서 찾은 여러 재료로 제작한 실물 작품을 3D 모델 디지털 파일(GLB)로 변환하여 디지털 트윈 NFT로 선보인다. NFT를 구매할 시 동일한 실물 조각 작품을 함께 수령하게 되고, 반대로 실제 조각 작품을 구매하면 해당 작품의 NFT를 전송 받을 수 있다. 또한 사용자는 웹상에서 작가가 설정한 다양한 주제의 가상 공간을 통해 디지털 조각들을 자유롭게 배치하며 감상할 수 있다.

## Environment

- TypeScript
- React 18
- Next.js 13
- Three.js
- Web3.js
- Ethers.js
- Tailwind CSS
- Sass

## Quick Start

- npm과 Node.js 버전 확인 [(참고)](https://nextjs.org/docs/pages/building-your-application/upgrading/version-13)

- `.env` 파일 수정 : API, 이미지 서버, 블록체인 관련 정보 기입
  
- Dependencies 설치 : `npm install` 또는 `yarn`
  
- 서버 실행 : `npm run dev` 또는 `yarn dev`
  
- `localhost:3000`에서 구동 확인

## Source Directory Structure  

<pre>
└── src
    ├── api : REST API 호출부 관리
    ├── app : Next.js 파일 시스템, 서버 컴포넌트 관리
    ├── component : 인터페이스 공통 요소를 header, footer, button, input, modal 등과 같은 속성 분류로 관리
    ├── context : React Context API provider 생성 관리
    ├── model : TS 타입 선언 관리 (props 관련)
    ├── type : TS 커스텀 타입 정의 (내장 객체, 의존성 패키지 관련)
    └── util : 반복 사용 함수 유틸화, 커스텀 훅 생성 관리
</pre>
    
