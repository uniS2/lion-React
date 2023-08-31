import { create } from 'zustand';
// import { createWithEqualityFn } from 'zustand/traditional';
import { devtools, persist } from 'zustand/middleware';
import { immer } from '@/middlewares/immer';

const initialTheme = {
  currentTheme: 'light',
  light: {
    fg: '#000',
    bg: '#fff',
  },
  dark: {
    fg: '#fff',
    bg: '#000',
  },
};

export const useStore = create(
  persist(
    immer(
      devtools((set) => ({
        list: [
          {
            id: crypto.randomUUID(),
            title: 'Zustand는 츄~스탄트로 발음합니다.',
          },
        ],

        addItem: (newItemTitle) =>
          set(
            (state) => ({
              list: [
                ...state.list,
                {
                  id: crypto.randomUUID(),
                  title: newItemTitle,
                },
              ],
            }),
            false,
            'list/addItem'
          ),
        deleteItem: (deleteId) =>
          set(
            (state) => ({
              list: state.list.filter((item) => item.id !== deleteId),
            }),
            false,
            'list/removeItem'
          ),

        // ----------------------------------------

        theme: initialTheme,
        changeLightTheme: () =>
          set(
            (state) => {
              state.theme.currentMode = 'light';
            },
            false,
            'theme/changeLight'
          ),

        changeDarkTheme: () =>
          set(
            (state) => {
              state.theme.currentMode = 'dark';
            },
            false,
            'theme/changeDark'
          ),

        swtichMode: () =>
          set(
            (state) => {
              const mode = state.theme.currentMode;
              state.theme.currentMode = mode.includes('light')
                ? 'dark'
                : 'light';
            },
            false,
            'theme/switchMode'
          ),

        resetTheme: () =>
          set(
            () => ({
              theme: initialTheme,
            }),
            false,
            'theme/reset'
          ),
      }))
    ),
    {
      name: 'appStore',
    }
  )
);
