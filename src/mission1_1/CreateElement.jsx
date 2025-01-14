// import '../style.css';

// export function createElement(type, props, ...children) {
//   console.log('createElement 호출:', { type, props, children });

//   const element = document.createElement(type);

//   if (props) {
//     Object.keys(props).forEach((key) => {
//       element[key] = props[key];
//     });
//   }

//   // children 은 string or Node
//   // Node 형태로 DOM 에 추가해야 하기 때문에 2개의 조건문 생성
//   children.forEach((child) => {
//     if (typeof child === 'string') {
//       element.appendChild(document.createTextNode(child));
//     } else if (child instanceof Node) {
//       element.appendChild(child);
//     }
//   });

//   return element;
// }

// export const Fragment = 'fragment';

// const element = <h1 className="title">Hello, world</h1>;

// document.getElementById('root').appendChild(element);
