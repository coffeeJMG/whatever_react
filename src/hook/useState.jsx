import App from "../App";
import render from "../utils/render";



let states = new Map();
let stateIndex = 0;  // useState 호출 순서 추적

const useState = (initState) => {
  const currentComponent = document.getElementById('root'); // 변하는 부분만 감지가 아닌 아직 App 전체를 리렌더링

  const currentIndex = stateIndex++;  // 현재 상태의 인덱스
  const key = `${currentIndex}`;  // 고유한 키 생성

  if (!states.has(key)) {
    states.set(key, initState);
  }

  let state = states.get(key);

  const setState = (newState) => {
    if (typeof newState === 'function') {
      const currentState = states.get(key);
      const nextState = newState(currentState);
      states.set(key, nextState);
    } else {
      states.set(key, newState);
    }

    stateIndex = 0;  // 리렌더링 전에 인덱스 초기화 그렇지 않으면 계속 1,2,3,4 증가해서 항상 같은 순서의 useState 를 호출 할 수 없음
    currentComponent.innerHTML = '';
    render(<App />, currentComponent);
  }

  return [state, setState];
}

export default useState