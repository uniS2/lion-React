/* React, ReactDOM 모듈 불러오기 및 버전 확인 -------------------------------------- */
// React 모듈을 불러오기
import * as React from "react";

//^ globalThis.react => createElement - 브라우저 해석 여부에 따라 React API / JSX 구분 = 표준이 아니므로 브라우저가 해석할 수 없다. 내부적으로 자바스크립트 변환이 되어야만 읽을 수 있다. (변환 도구의 필요성)

// React 버전 확인하기
// console.log(`React.version: ${React.version}`);

// ReactDOM 버전 확인하기
// console.log(`ReactDOM version: ${ReactDOM.version}`);

/* React 요소란? --------------------------------------------------------------- */
// React 요소 작성 (React API)
// const appElement = React.createElement('div');
// console.log(appElement);  // 초기버전: React.Dom.div()

// React 요소 작성 (React API)
const visualBoldElement = React.createElement("b", null, "어썸(awesome)");

const headlineElement = React.createElement(
  "h1",
  {
    title: "React is Awesome!",
  },
  "React는",
  visualBoldElement,
  "해~"
);

const domAbbrElement = React.createElement(
  "abbr",
  { title: "Document Object Model" },
  "DOM"
);

const uiAbbrElement = React.createElement(
  "abbr",
  { title: "User Interface" },
  "UI"
);

const descriptionForReactElement = React.createElement(
  "p",
  {},
  "React는 가상 ",
  domAbbrElement,
  "을 사용하는 ",
  uiAbbrElement,
  "라이브러리입니다."
);

const appElement = React.createElement(
  /* type */
  "div",
  /* props {} */
  {
    className: "App",
    id: "reactAppElement",
    "data-type": "React.ReactElement",
  },
  /* ...children -> [child, child, child, ...] */
  headlineElement,
  descriptionForReactElement
);

// appElement(rootElement) tree
// console.log(appElement);

/* JSX를 사용하는 이유 ------------------------------------------------------------ */
// React 요소 작성 (with JSX)
// const appElementJSX = <div><div/>;
// console.log(appElementJSX);

const appElementJSX = (
  <div className="App" id="reactAppElement" data-type="React.ReactElement">
    <h1 title="React is Awesome!">
      React는 <b>어썸(awesome)</b>해~
    </h1>
    <p>
      React는 가상
      <abbr title="Document Object Model">DOM</abbr>을 사용하는
      <abbr title="User Interface">UI</abbr>
      라이브러리입니다.
    </p>
  </div>
);

// console.log('appElementJSX\n',appElementJSX);

// [동균님] appElementJSX와 appElement가 동일할까요? 다른! React Element 라는 사실은 동일. propotype 은 동일

/* React 요소를 재사용하기 위한 함수 작성--------------------------------- */
{
  // const domAbbrElement = React.createElement(
  //   'abbr',
  //   { title: 'Document Object Model'},
  //   'DOM'
  // );
  
  // const uiAbbrElement = React.createElement(
  //   'abbr',
  //   { title: 'User Interface'},
  //   'UI'
  // );

  // - [ ] React 요소를 반환하는 함수 만들기
  //   1. 함수 작성 createAbbrElement()
  function createAbbrElement(props, ...children) {
    return React.createElement('abbr', props, ...children);
  }

  const domAbbrElement = createAbbrElement({
    title: 'Document Object Model'
  }, 'D', 'O', 'M');

  // console.log(domAbbrElement);
  
  const uiAbbrElement = createAbbrElement({
    title: 'User Interface'
  }, 'UI');
  // console.log(uiAbbrElement);
  

  // 아래 JSX 코드는 React 요소를 생성한다.
  // 그런데 웹 브라우저는 아래 코드가 해석이 안돼요.
  // <abbr title="Document Object Model">DOM</abbr>

  /* function createAbbrElement(title, children) {
      return <abbr title={title}>{children}</abbr>;
  } */

  /* const dom_AbbrElement = createAbbrElement(
    'Document Object Model',
    'DOM'
  ); */
  
  // - [ ] 인수를 전달해 재사용 가능하도록 구현
  //   2. createAbbrElement({ props: { title: '...' } }, '...');
}

// App 함수 컴포넌트 만들기 (React용)

  // function Abbr(props /* {title, children} */){
  //   return <abbr title={props.title}>{props.children}</abbr>;
  // }

  // console.log(React.createElement(Abbr));  // <Abbr />

// App 함수 컴포넌트 만들기
/* const App = (props) => {
  return (  // JSX 반환 : 직접 만든건 대문자
    <div className='App'>
      <Abbr title="Document Object Model"> 
        DOM
      </Abbr>
      <Abbr title="User Interface">
        UI
      </Abbr>
    </div>
  )
} */

// normal function
/* console.log(createAbbrElement(
  'Document Object Model',
  'DOM'
)); */

// JSX (대문자로 시작하는 함수)
// console.log(<App />);


/* React 요소 트리를 DOM에 렌더링하려면? ------------------------------------------ */
// import react 없어도 가능 https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html
// create a root to display React components inside a browser DOM node. https://react.dev/reference/react-dom/client/createRoot

import { StrictMode } from "react";
import { createRoot } from 'react-dom/client';
import App from './App';
// import { createRoot } from '../node_modules/react-dom/client';

// 야무쌤: React로 개발할 때 개발자가 실수 할 수 있는 문제를 알려줄거니까 <StrictMode>로 <App />을 감싸라 -> 2번 출력
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);




/* const reactDomRoot = ReactDOM.createRoot(
  document.getElementById('root')
) */

// React 함수 컴포넌트의 요건
// - 함수 이름은 첫글자가 대문자!
// - JSX를 반환!

// createRoot
// create + Root (React Dom Root)
// ReactDOMRoot 객체를 생성하는 함수
/* createRoot(document.getElementById('root'))
  // ReactDOMRoot 객체는 render() 메서드를 사용해
  // React 요소를 실제 DOM 요소에 렌더링 한다.
  .render(
  // App 컴포넌트를 렌더링할 수 있도록 JSX 구문을 추가합니다.
  <App />
  // <App></App>
); */

/* reactDomRoot.render(
  // App 컴포넌트를 렌더링할 수 있도록 JSX 구문을 추가합니다.
    <App/>
) */

// JSX가 하는 일은 React 요소 생성 -> 마크업 생성
// JSX → 컴파일러(변환기) → React 요소 → ReactDOM → 실제 DOM 요소 생성 → 구조 작성




// ReactDOM.createRoot() 를 사용해서 DOM 요소를 ReactDomRoot 객체로 생성
// ReactDomRoot.render() 메서드로 App을 화면에 표시(렌더링)



/* 
# 리액트에서 우리가 행해야할 규칙

# 1. JSX만 사용하세요.
# 2. 컴포넌트 이름은 첫글자가 항상 대문자로
# 3. 그래야 JSX 구문에서 사용 가능하니까 
*/