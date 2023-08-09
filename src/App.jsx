import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
// import About from "./pages/About";

//- {/* 홈 페이지 : index.html */}
//- {/* 소개 페이지 : about.html */}
//- {/* 제품 목록 페이지 : products.html */}
//- {/* 의뢰 페이지 : contact.html */}

// App 함수 컴포넌트를 작성합니다.
function App() {
  // JSX 값 반환
  return (
    <div className="App">
      <RootLayout>
        <Home />
        {/* <About /> */}
      </RootLayout>
    </div>
  );
}

export default App;

{/* props
<RootLayout>
  <b>페이지의</b>
  <span>주요</span>
  <em>콘텐츠</em>
</RootLayout>
*/}