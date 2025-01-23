export default function render(virtualDom, container) {
  if (virtualDom.type === 'fragment') {
    virtualDom.props.children.forEach(child => {
      render(child, container);
    });
    return container;
  }

  if (typeof virtualDom.type === 'function') {
    const componentVirtualDom = virtualDom.type(virtualDom.props);
    render(componentVirtualDom, container);
    return container;
  }

  const element = virtualDom.type === 'TEXT_ELEMENT'
    ? document.createTextNode(virtualDom.props.nodeValue || '')
    : document.createElement(virtualDom.type);

  const propsToApply = Object.keys(virtualDom.props || {})
    .filter((key) => key !== 'children');

  propsToApply.forEach((name) => {
    if (name.startsWith('on')) {
      const eventName = name.toLowerCase().slice(2);
      const handler = virtualDom.props[name];

      switch(eventName) {
        case 'click':
          element.addEventListener('click', (e) => {
            e.preventDefault();
            handler(e);
          });
          break;
          case 'input':
            element.addEventListener('input', (e) => {
              e.preventDefault(); // 이벤트 기본 동작 방지
              const activeElement = document.activeElement; // 현재 포커스된 요소 저장
              handler(e);
              if (element.type === 'text' || element.type === 'textarea') {
                element.value = e.target.value;
                e.target.focus()
              }
              activeElement?.focus(); // 포커스 복원
            });
            break;
            case 'keydown':
            element.addEventListener('keydown', handler);
            break;
        default:
          element.addEventListener(eventName, handler);
      }
    } else {
      element[name] = virtualDom.props[name];
    }
  });

  if (virtualDom.props && virtualDom.props.children) {
    virtualDom.props.children.forEach((child) => {
      render(child, element);
    });
  }

  container.appendChild(element);
  return container;
}