import { create } from 'zustand';

// use 훅 생성 (내보내기) + 스토어(상태 관리 저장소 작성)
export const useCatsStore = create((set) => ({
  cats: [
    { id: crypto.randomUUID(), name: '찐빵', age: 2, gender: 'male' }, // 고유한 ID
    { id: crypto.randomUUID(), name: '참치', age: 2, gender: 'male' },
    { id: crypto.randomUUID(), name: '히로', age: 2, gender: 'male' },
  ],

  // 고양이(반려묘) 추가
  addCat: (catInfo) =>
    set((state) => ({
      cats: [
        ...state.cats,
        {
          id: crypto.randomUUID(),
          ...catInfo,
        },
      ],
    })),

  // 고양이(반려묘) 제거
  removeCat: (removeCatName) =>
    set((state) => ({
      cats: state.cats.filter((cat) => cat.name !== removeCatName),
    })),
}));
