import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { produce } from 'immer';

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
        produce((state) => {
          state.theme.currentMode = 'light';
        }),
        false,
        'theme/changeLight'
      ),

    changeDarkTheme: () =>
      set(
        produce((state) => {
          state.theme.currentMode = 'dark';
        }),
        false,
        'theme/changeDark'
      ),

    swtichMode: () =>
      set(
        produce((state) => {
          const mode = state.theme.currentMode;
          state.theme.currentMode = mode.includes('light') ? 'dark' : 'light';
        }),
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
);

/* 
    auth: {
      isAuth: false,
      user: null,
      token: '',
    },
    sideMenu: false,
*/

// get
/* 
changeTheme: (themeName) =>
      set((state) => ({
        theme: {
          ...state,
          currentTheme: themeName,
        },
      })),

    getCurrentTheme: () => {
      const { theme } = get();
      return theme[theme.getCurrentTheme];
    },
*/
