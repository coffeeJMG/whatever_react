export default function createElement(type, props, ...children) {
  const virtualElement = {
    type,
    props: {
      ...props,
      children: children.map((child) => (typeof child === 'string'
        ? { type: 'TEXT_ELEMENT', props: { nodeValue: child } }
        : child)),
    },
  };

  console.log('Created Virtual DOM:', virtualElement);
  return virtualElement;
}

// render 함수 추가
function render(virtualDom, container) {
  console.log('Rendering Virtual DOM:', virtualDom);

  const element = virtualDom.type === 'TEXT_ELEMENT'
    ? document.createTextNode('')
    : document.createElement(virtualDom.type);

  // props 처리 (children 제외)
  const propsToApply = Object.keys(virtualDom.props || {})
    .filter((key) => key !== 'children');

  console.log('Applying props:', propsToApply);

  propsToApply.forEach((name) => {
    element[name] = virtualDom.props[name];
  });

  // children을 재귀적으로 처리
  if (virtualDom.props.children) {
    console.log('Processing children:', virtualDom.props.children);
    virtualDom.props.children.forEach((child) => {
      render(child, element);
    });
  }

  container.appendChild(element);
}

const element = (
    <div className="container">
      <h1 className="title">Hello, world</h1>
      <p>kekeke</p>
    </div>
);

console.log('Initial Virtual DOM Tree:', element);
render(element, document.getElementById('root'));
