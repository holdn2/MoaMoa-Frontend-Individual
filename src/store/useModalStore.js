// zustand를 이용한 전역관리
import { create } from "zustand";

// zustand 스토어
const useModalStore = create((set) => ({
  // 초기 로그인 여부
  hasLogin: false,

  // 로그인 시 상태 변경
  setHasLogin: () => set({ hasLogin: true }),

  // 상태 초기화
  resetHasLogin: () => set({ hasLogin: false }),
}));

export default useModalStore;
