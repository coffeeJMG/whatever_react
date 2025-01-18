export default function createElement(type, props, ...children) {

  // children 재귀함수
  const processChildren = (children) => {
    return children.flat().map((child) => {

      // JSX 내부 삼항 연산자 등에 의한 falsy값 처리
      if (child === null || child === undefined) {
        return null;
      }

      if (typeof child === 'string') {
        return {
          type: 'TEXT_ELEMENT',
          props: { nodeValue: child }
        };
      }

      return child;
    }).filter(Boolean);
  };

  const virtualElement = {
    type,
    props: {
      ...props,
      children: processChildren(children)
    }
  };



  return virtualElement;
}


