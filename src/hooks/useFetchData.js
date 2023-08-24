import { useEffect, useState } from 'react';

const defaultOptions = {
  method: 'GET',
};

function useFetchData(endpoint, options = {}) {
  const [data, setData] = useState(null); // [] ? -> null
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null); // null | Error

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);

    async function fetchData() {
      try {
        const response = await fetch(endpoint, {
          ...defaultOptions,
          ...options,
          signal: controller.signal,
        });
        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        if (!(error instanceof DOMException)) {
          setError(error);
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();

    // StrictMode(x2, detect impure function component)
    // mount(1, 요청 1) -> unmount(취소 1) -> mount(2, 요청 2)
    // 자료: 이펙트를 처리하지 않는 경우
    return () => {
      controller.abort();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endpoint]);

  return { data, isLoading, error };
}

export default useFetchData;

// 사용법
// const { data, isLoading, error } = useFetchData();