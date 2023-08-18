import { useEffect, useState } from 'react';

// 컴포넌트 간 로직(logic) 공유
// 사용자 정의 훅(함수)을 작성
export default function useFetchData(endpoint) {
  // 훅의 규칙 (컴포넌트 또는 다른 훅 내부에서만 사용 가능)
  // custome hook 내부에서 built-in hook 사용 가능능
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null); // null | Error

  useEffect(() => {
    // 중단(abort) 컨트롤러(controller) 생성
    const controller = new AbortController();

    setIsLoading(true);

    async function fetchProducts() {
      try {
        const response = await fetch(endpoint, {
          signal: controller.signal,
        })
        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        // 통신 중단에 따른 오류가 아니라면 오류 설정
        if (!(error instanceof DOMException)){
          setError(error);
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchProducts();

    // StrictMode(x2, detect impure function component)
    // mount(1, 요청 1) -> unmount(취소 1) -> mount(2, 요청 2)
    return () => {
      controller.abort();
    }
  }, [endpoint]);

  return { data, isLoading, error};
}

// 사용법
// const { data, isLoading, error } = useFetchData();