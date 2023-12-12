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

https://nextjs.org/docs/getting-started

## 1. **Library vs Framework**
라이브러리와 프레임워크의 주요 차이점은 "Inversion of Control"(통제의 역전)
라이브러리에서 메서드를 호출하면 사용자가 제어할 수 있다. 하지만 프레임워크에서는 제어가 역전되어 프레임워크가 사용자를 호출한다.

**라이브러리**   
사용자가 파일 이름이나 구조 등을 정하고, 모든 결정을 내림

**프레임워크**  
파일 이름이나 구조 등을 정해진 규칙에 따라 만들고 따름