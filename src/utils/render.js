

export default function render(virtualDom, container) {

      if (virtualDom.type === 'fragment') {
        virtualDom.props.children.forEach(child => {
          render(child, container);
        });
        return container;
      }


      // 함수 타입 처리
      if (typeof virtualDom.type === 'function') {
        const componentVirtualDom = virtualDom.type(virtualDom.props);
        render(componentVirtualDom, container);
        return container;
      }

      // 텍스트 노드처리
      const element = virtualDom.type === 'TEXT_ELEMENT'
        ? document.createTextNode(virtualDom.props.nodeValue || '')
        : document.createElement(virtualDom.type);

      // 자식 노드를 제외한 모든 props의 키를 배열로 생성
      const propsToApply = Object.keys(virtualDom.props || {})
      .filter((key) => key !== 'children');

      // 각 prop을 실제 DOM 요소에 적용
      propsToApply.forEach((name) => {

      // 이벤트 리스너 처리 (onClick, onInput 등)
      if (name.startsWith('on')) {
        const eventName = name.toLowerCase().slice(2);
        const handler = virtualDom.props[name];

        switch(eventName) {
          case 'click':
            // 클릭 이벤트 처리
            element.addEventListener('click', (e) => {
            e.preventDefault();
              handler(e);
            });
            break;
          case 'input':
            // 입력 이벤트 처리
            element.addEventListener('input', (e) => {
              e.preventDefault();
              handler(e);
              // input, textarea의 value 동기화
              if (element.type === 'text' || element.type === 'textarea') {
                element.value = e.target.value;
              }
            });
            break;
          case 'keydown':
            // 키보드 이벤트 처리
            element.addEventListener('keydown', handler);
            break;
          default:
            // 기타 이벤트 처리
            element.addEventListener(eventName, handler);
        }
      } else {
        // 일반 속성 처리 (className, src 등)
        element[name] = virtualDom.props[name];
      }
      });

      // 자식 노드들을 재귀적으로 렌더링
      if (virtualDom.props && virtualDom.props.children) {
      virtualDom.props.children.forEach((child) => {
        render(child, element);
      });
      }

      // 생성된 요소를 컨테이너에 추가
      container.appendChild(element);
      return container;
}
