import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductEdit from './pages/ProductEdit';
import Contact from './pages/Contact';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import PassingProps from './learn/1-passing-props';

// 구버전 처럼 사용할 사용자를 위한 최신 방법
// 배열 -> JSX
const router = createBrowserRouter(
  // 유틸리티 함수
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="products" element={<Products />} />
      <Route path="product/edit/:productId" element={<ProductEdit />} />
      <Route path="contact" element={<Contact />} />
      <Route path="learn/01" element={<PassingProps />} />
    </Route>
  )
);

export default router;

// 최신 방법 (기본 방법법)
// 배열 -> 객체
// const router = createBrowserRouter([
//   // Router Object
//   // 경로(path), 요소(element <- <component />)
//   {
//     path: '/',
//     element: <RootLayout />,
//     children: [
//       // '/'
//       { index: true, element: <Home /> },
//       // '/products'
//       { path: 'products', element: <Products /> },
//       // '/contact'
//       { path: 'contact', element: <Contact /> },
//     ],
//   }
// ]);
