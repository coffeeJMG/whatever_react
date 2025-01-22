### React Hook

Hook은 함수 컴포넌트에서 React state와 생명주기 기능을 연동할 수 있게 해주는 함수입니다. Hook은 class 안에서는 동작하지 않습니다. 대신 class 없이 React를 사용할 수 있게 해주는 것입니다.


### Hook 의 등장 배경 ( 함수형 컴포넌트 )</h3>
- Class 형 컴포넌트의 단점
  1. 컴포넌트간 로직의 재사용성 문제
    - render props나 HOC(Higher Order Component, 고차 컴포넌트) 패턴으로 해결이 가능하나, 코드 추적이 어려워짐
    - 이런 패턴의 과도한 사용은 wrapper hell을 유발
    - HOC 란 컴포넌트를 매개변수로 받아서 새로운 컴포넌트를 반환하는 함수
  2. 클래스의 복잡성
  - this.props 사용으로 인한 this의 mutable한 특성이 바인딩 문제 유발
  - 비동기 작업시 state의 값이 작업 전/후로 달라질 수 있는 문제


```javascript
// HOC 예시
const withUser = (WrappedComponent) => {
  return class extends React.Component {
    state = { user: null };
    render() {
      return <WrappedComponent user={this.state.user} {...this.props} />;
    }
  }
}
```
> Hook의 장점
> - 상태 관련 로직의 재사용 용이
> - 생명주기 메서드의 관련 로직을 함께 유지 가능
> - 직관적인 코드 작성 가능

### State
- 컴포넌트는 상호 작용의 결과로 화면의 내용을 변경한다. Input Form, Carousel 등 컴포넌트는 현재 입력값, 현재 이미지와 같은 것들을 <stong>기억</stong>해야 합니다.
React는 이런 종류의 컴포넌트별 메모리를 state라고 부릅니다.
- 컴포넌트를 새로운 데이터로 업데이트하기 위해선 다음 두 가지가 필요
  - 렌더링 사이에 데이터를 유지
  - React가 새로운 데이터로 컴포넌트를 렌더링 하도록 유발


### useState
useState는 함수형 컴포넌트에서 상태(state)를 관리할 수 있게 해주는 React Hook입니다.
```javascript
const [state, setState] = useState(initialValue);
```

- 동작 원리
1. 상태 값 관리
  - initialValue: 상태의 초기값 설정
  - 첫 번째 반환값(state): 현재 상태 값
  - 두 번째 반환값(setState): 상태를 업데이트하는 함수
2. 주요 특징
  - 컴포넌트가 리렌더링되어도 상태값은 유지됨
  - setState 호출시 상태를 업데이트하고 컴포넌트를 리렌더링함
동일한 컴포넌트 내에서 여러 번 호출 가능


- react 공식문서 참고사항
state 갱신의 취소
State Hook을 현재의 state와 동일한 값으로 갱신하는 경우 React는 자식을 렌더링 한다거나 무엇을 실행하는 것을 회피하고 그 처리를 종료합니다. (React는 Object.is 비교 알고리즘을 사용합니다.)
실행을 회피하기 전에 React에서 특정 컴포넌트를 다시 렌더링하는 것이 여전히 필요할 수도 있다는 것에 주의하세요. React가 불필요하게 트리에 그 이상으로 「더 깊게」는 관여하지 않을 것이므로 크게 신경 쓰지 않으셔도 됩니다만, 렌더링 시에 고비용의 계산을 하고 있다면 useMemo를 사용하여 그것들을 최적화할 수 있습니다.


-초기화 함수를 전달하는 것과 초기 state를 직접 전달하는 것의 차이점
https://ko.react.dev/reference/react/useState#avoiding-recreating-the-initial-state