export default function render(virtualDom, container) {
  console.log('Rendering Virtual DOM:', virtualDom);

  // 함수형 컴포넌트 처리
  if (typeof virtualDom.type === 'function') {
    const componentVirtualDom = virtualDom.type(virtualDom.props);
    render(componentVirtualDom, container);
    return;
  }

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
