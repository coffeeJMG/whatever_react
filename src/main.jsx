import './style.css';

// JSX를 실제 DOM으로 변환하는 함수
function createElement(type, props, ...children) {
  // 트랜스 파일링 결과 확인
  console.log('createElement 호출:', { type, props, children });

  // 실제 DOM 요소 생성
  const element = document.createElement(type);
  element.textContent = children.join('');
  return element;
}

// JSX 코드 (Babel이 createElement 호출로 변환)
const element = <h1>Hello, world</h1>;

// DOM에 추가
document.getElementById('root').appendChild(element);
