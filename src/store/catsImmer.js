import { create } from 'zustand';
import { produce } from 'Immer';

// 스토어(상태 관리 저장소) 작성
const catsStore = (set) => {
  // 상태(state)
  // 명사(props), 동사(function:actions)
  return {
    // 고양이들 (집합)
    // 읽기 (GET, 불변 데이터 관리)
    cats: [
      { id: crypto.randomUUID(), name: '찐빵', age: 2, gender: 'male' }, // 고유한 ID
      { id: crypto.randomUUID(), name: '참치', age: 2, gender: 'male' },
      { id: crypto.randomUUID(), name: '히로', age: 2, gender: 'male' },
    ],

    // 쓰기(SET)
    // 고양이(반려묘) 추가
    // 추가할 고양이 정보: { 이름, 나이, 성별 }
    addCat(catInfo) {
      // Immer 라이브러리(설치) 후, 미들웨어 구성
      return set(
        produce((state) => {
          // JavasScript 불변, 객체 업데이트 방식 사용 가능
          state.cats.push({
            id: crypto.randomUUID(),
            ...catInfo,
          });
        })
      );
    },

    // 고양이(반려묘) 제거
    removeCat(removeCatId) {
      return set(
        produce((state) => {
          const removeCatIndex = state.cats.findIndex(
            (cat) => cat.id === removeCatId
          );
          state.cats.splice(removeCatIndex, 1); // 요소 하나만 삭제
        })
      );
    },
  };
};

// use 훅 생성 (내보내기)
export const useCatsStore = create(catsStore);

/*-------------------------------------------------------- */
// React의 방식  (객체 업데이트, 전개 구문)
// return set((state) => {
//   // 다음 상태 반환
//   /* ...이전의 고양이들 */
//   console.log(state.cats);
//   /* 새로운 고양이 */
//   const newCat = {
//     id: crypto.randomUUID(),
//     ...catInfo,
//   };
//   return {
//     cats: [...state.cats, newCat],
//   };
// });
