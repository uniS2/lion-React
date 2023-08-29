import { create } from 'zustand';
// import { createWithEqualistyFn }

// store (define state & action)

// const [상태, set상태] = useState(초기값);

const listStore = (set /* state, setState() */) => {
  // return store's state & actions
  return {
    // state
    list: [
      {
        id: crypto.randomUUID(),
        title: 'Zustand는 츄-스탄트로 발음합니다.',
      },
    ],
    // actions
    addItem: (newItemTitle) =>
      set((state) => ({
        list: [
          ...state.list,
          {
            id: crypto.randomUUID(),
            title: newItemTitle,
          },
        ],
      })),
    deleteItem: (deleteId) =>
      set((state) => ({
        list: state.list.filter((item) => item.id !== deleteId),
      })),
  };
};

// hook (bind component) <- store (define state & action)
export const useListStore = create(listStore);
