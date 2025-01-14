// CreateElement.jsx
export default function createElement(type, props, ...children) {
  // Virtual DOM 객체 생성
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
