const FragmentType = 'fragment';

const customCreateElement = (type, props, ...children)=> {


  // children 재귀함수
  const processChildren = (children) => {
    return children.flat().map((child) => {


      // JSX 내부 삼항 연산자 등에 의한 falsy값 처리
      if (child === null || child === undefined) {
        return null;
      }


      // 문자열은 바로 Node 에 추가할 수 없으므로 별도 처리
      if (typeof child === 'string' || typeof child === 'number') {
        return {
          type: 'TEXT_ELEMENT',
          props: { nodeValue: child }
        };
      }

      return child;
    }).filter(Boolean);
  };

  // Fragment 체크
  if (type === FragmentType) {
    return {
      type: FragmentType,
      props: {
        children: processChildren(children)
      }
    };
  }

  const virtualElement = {
    type,
    props: {
      ...props,
      children: processChildren(children)
    }
  };

  return virtualElement;
}

export { FragmentType as Fragment, customCreateElement as createElement };