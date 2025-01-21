export default function render(virtualDom, container) {
  console.log('Rendering Virtual DOM:', virtualDom);


   // Fragment면 children만 container에 추가
  if (virtualDom.type === 'fragment') {

    virtualDom.props.children.forEach(child => {
      render(child, container);
    });
    return;
  }

  // 함수형 컴포넌트 처리
  if (typeof virtualDom.type === 'function') {
    const componentVirtualDom = virtualDom.type(virtualDom.props);
    render(componentVirtualDom, container);
    return;
  }


  // 텍스트 타입 별도 처리
  const element = virtualDom.type === 'TEXT_ELEMENT'
    ? document.createTextNode('')
    : document.createElement(virtualDom.type);

  // props 처리
  const propsToApply = Object.keys(virtualDom.props || {})
    .filter((key) => key !== 'children');

  propsToApply.forEach((name) => {
    element[name] = virtualDom.props[name];
  });

  // children 처리
  if (virtualDom.props.children) {
    virtualDom.props.children.forEach((child) => {
      render(child, element);
    });
  }

  container.appendChild(element);
}
