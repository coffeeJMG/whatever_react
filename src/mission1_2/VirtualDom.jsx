export function createElement(type, props, ...children) {
  console.log('createElement 호출:', { type, props, children });

  // 실제 DOM 노드를 만드는 대신 객체를 반환
  return {
    type,
    props: {
      ...props,
      children: children.map((child) => (typeof child === 'string'
        ? { type: 'TEXT_ELEMENT', props: { nodeValue: child } }
        : child)),
    },
  };
}

export const Fragment = 'fragment';

// 이제 element는 실제 DOM 노드가 아닌 객체가 됨
const element = <h1 className="title">Hello, world</h1>;

// 콘솔로 확인
console.log(element);
