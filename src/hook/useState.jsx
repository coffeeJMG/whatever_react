import render from "../utils/render.js"
import App from "../App.jsx"


const states = [];
let stateIndex = 0;
let activeInput = null; // 현재 활성화된 input 요소 추적

const useState = (initState) => {
  const currentIndex = stateIndex++;

  // states 에 아무 상태도 저장 안된 경우
  if (states[currentIndex] === undefined) {
    states[currentIndex] = initState;
  }


  const setState = (newState) => {

    // newState 가 함수인 경우 처리
    states[currentIndex] = typeof newState === 'function'
    ? newState(states[currentIndex])
    : newState;

    stateIndex = 0;

    // 현재 포커스된 input 저장 => onInput focus out 처리
    activeInput = document.activeElement;

    const rootElement = document.getElementById('root');
    // 새로운 상태로 render한 가상 DOM 생성
    const newChild = render(<App />, document.createElement('div'));
    rootElement.replaceChild(newChild, rootElement.firstChild);

    // 리렌더링 후 포커스 복원
    if (activeInput) {
      const newInput = document.querySelector('input[type="text"]');
      if (newInput) newInput.focus();
    }
  };

  return [states[currentIndex], setState];
};
export default useState