<h1>Week1: 개발 환경 구축과 JSX 이해하기</h1>

<h3>Day 1~2 개발 환경 구축 및 JSX 소개</h3>

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
    - 템플릿 리터럴이 아니고 JSX 가 생긴 이유
        - 템플릿 리터럴로도 JSX 를 표현할 수 있지만 ${} 같은 ECMAScript 표현식이 들어갈 때 구문이 복잡해지고 가독성이 떨어진다.
        - 템플릿 리터럴을 이런 식으로 사용하면 코드 에디터나 빌드 도구의 지원이 어려워집니다.
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

1. 선언적 UI 작성 (JSX)
2. 브라우저가 이해할 수 있도록 JSX 문법 JS 로 변환 ( Babel , 브릿지역할)
3. 최종적으로 실행되는 바닐라 JS ( 명령형 DOM 조작)

<h3>createElement 함수 구현과 Virtual DOM 생성</h3>

- Virtual Dom
    - 실제 Dom 에 적용되기 전에 먼저 적용해보고 최종 결과를 Dom에 반영
    - 레이아웃 계산과 리렌더링의 규모는 커지겠지만, 모든 변화를 하나로 묶어서 적용
    - 빠르다 x 유지보수 가능한 앱개발에 충분한 속도를 가지고 있다.
>
><h3 style="padding: 10px 0 0 20px">왜 사용 하는가</h3>
>
> - Dom fragment 를 관리하는 과정을 자동화 ( 변화 내용 감지 포함)
> - 컴포넌트가 DOM 조작 요청을 할 때 다른 컴포넌트들과 상호작용을 하지    않아도 된다.
