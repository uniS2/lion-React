import { createContext, useCallback, useMemo, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from './partials/Header';
import Main from './partials/Main';

function ReactContextIssue() {
  return (
    <>
      <Helmet>
        <title>React Context Issue - Learn</title>
      </Helmet>
      <DemoApp />
    </>
  );
}

export default ReactContextIssue;

/* -------------------------------------------------------------------------- */

export const DemoAppContext = createContext();

function DemoApp() {
  // -----------------------------------------------------------------

  const itemRef = useRef(null);

  // -----------------------------------------------------------------

  const [list, setList] = useState([
    {
      id: crypto.randomUUID(),
      title: 'Zustand를 배워볼까?',
    },
  ]);

  const addItem = useCallback((newItem) => {
    setList((list) => [
      ...list,
      {
        id: crypto.randomUUID(),
        title: newItem,
      },
    ]);
  }, []);

  const deleteItem = useCallback((deleteId) => {
    setList((list) => list.filter((item) => item.id !== deleteId));
  }, []);

  const listValue = useMemo(
    () => ({
      data: list,
      addItem,
      deleteItem,
    }),
    [list, addItem, deleteItem]
  );

  // -----------------------------------------------------------------

  const [count, setCount] = useState(() => list.length); // 지연된 초기화

  const incrementCount = useCallback((by) => {
    // type func - useCallback
    // setCount(count + by), [count] ; 스냅샷 -> 큐 = 대기열 사용. 종속성 줄임
    setCount((count) => count + by);
  }, []);

  const decrementCount = useCallback((by) => {
    setCount((count) => count - by);
  }, []);

  const countValue = useMemo(
    () => ({
      data: count,
      incrementCount,
      decrementCount,
    }),
    [count, decrementCount, incrementCount]
  );

  const value = useMemo(() => {
    return {
      // 참조형 데이터는 memo 데이터 기반
      itemRef,
      list: listValue,
      count: countValue,
    };
  }, [listValue, countValue]);

  // -----------------------------------------------------------------

  return (
    <DemoAppContext.Provider value={value}>
      <Header />
      <Main />
    </DemoAppContext.Provider>
  );
}
