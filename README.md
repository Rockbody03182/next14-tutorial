# NextJS Introduction - 2023.11.29
Next.js Getting Started

Next.js 프로젝트 초기화
npx create-next-app@latest

Next.js 프로젝트 초기화(+타입스크립트)
npx create-next-app@latest --typescript

√ What is your project named? ... nextjs-info  
√ Would you like to use TypeScript? ... No / Yes  
√ Would you like to use ESLint? ... No / Yes  
√ Would you like to use Tailwind CSS? ... No / Yes  
√ Would you like to use `src/` directory? ... No / Yes  
√ Would you like to use App Router? (recommended) ... No / Yes  
√ Would you like to customize the default import alias (@/*)? ... No / Yes    
7개의 질문에 답이 끝나면 설치가 시작된다.  

API Key: 10923b261ba94d897ac6b81148314a3f

https://nextjs.org/docs/getting-started

## 1. **Library vs Framework**
라이브러리와 프레임워크의 주요 차이점은 "Inversion of Control"(통제의 역전)
라이브러리에서 메서드를 호출하면 사용자가 제어할 수 있다. 하지만 프레임워크에서는 제어가 역전되어 프레임워크가 사용자를 호출한다.

**라이브러리**   
사용자가 파일 이름이나 구조 등을 정하고, 모든 결정을 내림

**프레임워크**  
파일 이름이나 구조 등을 정해진 규칙에 따라 만들고 따름

## 2. **Custom App**
Next.js는 App 컴포넌트를 사용하여 page를 초기화한다. 이를 재정의하고 페이지 초기화를 제어할 수 있습니다. 이를 통해 다음과 같은 놀라운 일을 할 수 있다.

1. 페이지 변경 간에 레이아웃 유지
2. 페이지 탐색 시 state 유지
3. componentDidCatch를 사용한 Custom 에러 처리
4. 페이지에 추가 데이터 삽입
5. Global CSS 추가

파일명.module.css 파일 형태를 제외한 모든 나머지 css파일들은 _app.js에서만 import해와서 사용해야 한다. (글로벌 css간의 충돌을 피하기 위해서이다.)

## 3. **Redirect and Rewrite**
next.config.js 또는 next.config.mjs 파일을 만들 수 있습니다. next.config.js는 JSON 파일이 아닌 일반 Node.js 모듈이다. Next.js 서버 및 빌드 단계에서 사용되며 브라우저 빌드에는 포함되지 않는다.

**Redirects** (URL변경됨)
redirects은 source, destination 및 permanent 속성이 있는 객체를 포함하는 배열을 반환하는 비동기 함수이다.  
**source**: 들어오는 request 경로 패턴 (request 경로)  
**destination**: 라우팅하려는 경로 (redirect할 경로)  
**permanent**: true인 경우 클라이언트와 search 엔진에 redirect를 영구적으로 cache하도록 지시하는 308 status code를 사용하고, false인 경우 일시적이고 cache되지 않은 307 status code를 사용한다

**Rewrites** (URL변경되지 않음)
Rewrites를 사용하면 들어오는 request 경로를 다른 destination 경로에 매핑할 수 있다.  
Rewrites은 URL 프록시 역할을 하고 **destination** 경로를 mask하여 사용자가 사이트에서 위치를 변경하지 않은 것처럼 보이게 한다.반대로 redirects은 새 페이지로 reroute되고 URL 변경 사항을 표시한다.