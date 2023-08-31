import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

// 스토어: sideMenu 표시 전환을 위한 상태 관리
// 어떤 상태? : displaySideMenu (boolean)
// 어떤 액션? : toggleSideMenu 함수

// 커스텀 훅: useSideMenuStore 내보내기
// 생성 : create() 함수
export const useSideMenuStore = create(
  devtools((set) => ({
    displaySideMenu: false,
    toggleSideMenu: () =>
      // set(callback, replace, labelForReduxDevtools)
      // set(())
      set(
        (state) => ({
          displaySideMenu: !state.displaySideMenu,
        }),
        // 상태 덮어쓰기 유무
        // Zustand의 상태 덮어쓰기(true) 설정 기본 값: false
        // Zustand의 상태 처리 방법: 얕은 합성(false)
        false,
        // Redux 개발 도구 레이블 (label)
        // 크롬에서 확장자로 확인
        'sidemenu/toggler'
      ),
  }))
);
