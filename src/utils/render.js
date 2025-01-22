export default function render(virtualDom, container) {
  // Fragment 처리
  if (virtualDom.type === 'fragment') {
    virtualDom.props.children.forEach(child => {
      render(child, container);
    });
    return container;
  }

  // 함수형 컴포넌트 처리
  if (typeof virtualDom.type === 'function') {
    const componentVirtualDom = virtualDom.type(virtualDom.props);
    render(componentVirtualDom, container);
    return container;
  }

  // 텍스트 노드 처리 개선
  const element = virtualDom.type === 'TEXT_ELEMENT'
    ? document.createTextNode(virtualDom.props.nodeValue || '')  // 실제 텍스트 값 설정
    : document.createElement(virtualDom.type);

  // props 처리
  const propsToApply = Object.keys(virtualDom.props || {})
    .filter((key) => key !== 'children');

  propsToApply.forEach((name) => {
    if (name.startsWith('on')) {
      const eventName = name.toLowerCase().slice(2);

      // 기존 이벤트 리스너 제거 후 재등록
      const existingHandler = element[`__${eventName}Handler`];
      if (existingHandler) {
        element.removeEventListener(eventName, existingHandler);
      }

      element.addEventListener(eventName, virtualDom.props[name]);
      // 핸들러 참조 저장
      element[`__${eventName}Handler`] = virtualDom.props[name];
    } else {
      element[name] = virtualDom.props[name];
    }
  });

  // children 처리
  if (virtualDom.props && virtualDom.props.children) {
    virtualDom.props.children.forEach((child) => {
      render(child, element);
    });
  }

  container.appendChild(element);
  return container;
}