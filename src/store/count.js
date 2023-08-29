import { create } from 'zustand';

const initialCount = 9;

export const useCountStore = create((set) => ({
  // 상태
  count: initialCount,
  // actions
  increment: (by) =>
    set((state) => ({
      count: state.count + by,
    })),
  decrement: (by) =>
    set((state) => ({
      count: state.count - by,
    })),
  reset: () =>
    set(() => ({
      count: initialCount,
    })),
}));
