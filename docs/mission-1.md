<h1>Week1: 개발 환경 구축과 JSX 이해하기</h1>

<h3>Day 1-2 개발 환경 구축 및 JSX 소개</h3>

-   vite 는 번들링 도구로 번들링의 역할은 다음과 같다.
    -   코드 최적화 (불필요한 코드 제거)
    -   개발 서버 제공 (hot reload 기능)
    -   다양한 파일 형식 지원 (.ts, .jsx, .css, .vue 등)
    -   빠른 빌드 속도 (ES modules 활용)
-   Babel 은 트랜스파일링 도구로 역할은 다음과 같다.
    -   JSX 문법을 JS로 변환
    -   최신 JavaScript를 구버전 브라우저에서 동작하게 변환
-   bable.config.json, vite.config.js
    -   babel~ 은 프로덕션 빌드할 때 실제 코드 변환 규칙을 정의
    -   vite~ 은 개발서버에서 코드 변환 규칙 정의 ( npm run dev)
-   JSX 
    - 다양한 전처리기(트랜스파일러)에서 이러한 토큰을 표준 ECMAScript로 변환하는 데 사용되도록 의도된 것입니다.
    - React <strong>element</strong>를 생성한다.
        - element 생성이란 JSX 코드를 작성하면<br/>
        실제 브라우저가 이해할 수 있는 DOM 요소가 만들어지는 과정을 의미한다.
        > ```javascript
        > const element = <h1>Hello World</h1>
        >{
        >type : 'h1',                                          
        >props : {children: 'Hello World'}
        >}
        > ```
        > 이렇게 트랜스파일링 된 코드를 DOM 요소 생성까지의 과정     
<h3 style="color:red;">Day 1~2 요약</h3>
- Babel은 JSX를 만나면 사전에 정의된 함수(우리의 경우 createElement)를 호출하는 일반 JavaScript 코드로 변환해요