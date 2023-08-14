import Switcher from '@/components/Switcher/Switcher';
import {useState} from 'react';

// 로컬 변수
/* {let myName = '로컬 변수';
  
// 로컬 뮤테이션션
function handleUpdateMyName(){
  myName += 'Wow~';
  console.log(myName)
}

console.log('컴포넌트 렌더링 myName = ', myName)} */

function DemoPage() {

  // 다크 모드 상태 관리
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // 리듀스 모션 상태 관리
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  const handleToggleReducedMotion = () => {
    setIsReducedMotion((prevState) => {
      console.log(prevState); // true -> false
      const nextState = !prevState; // false + true
      return nextState  // false -> true
    });
  };

  // 상태 관리는 페이지 컴포넌트에서 진행
  // React.useState() 훅으로 선언된 상태로 제어
  // on / off 상태 변수 (관리할 데이터 타입은 Boolean)
  
  // const readyState = React.useState(false);

  // const isReady = readyState[0];  // tuple [state, setState]
  // const setIsReady = readyState[1]; // setState

  const [isReady, setIsReady] = useState(true);  // 초깃값

  // 리액트가 요구되는 방법대로 상태를 업데이트(변경)이란?
  // 렌더링 트리거 -> 컴포넌트 렌더링 -> DOM 커밋 순으로 진행

  const handleToggleReady = () => {
    setIsReady(!isReady);
  };

  return (
    <div
      style={{
        padding: 40,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',
        gap: 8,
      }}
    >
      {/* Atomic Component */}
      {/* <p>{myName}</p> */}
      {/* <button type="button" onclick={handleUpdateMyName}>나의 이름을 바꿔줘</button> */}
      <Switcher
        on={isDarkMode}
        label="다크 모드"
        onClick={handleToggleDarkMode}
      />
      <Switcher
        on={isReducedMotion}
        onText="on"
        offText="off"
        label="리듀스 모션"
        onClick={handleToggleReducedMotion}
      />
      <Switcher
        on={isReady}
        // onText="on"
        label="아 U 레디?"
        onClick={handleToggleReady}
      />
    </div>
  );
}

export default DemoPage;