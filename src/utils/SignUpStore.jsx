// src/utils/useSignInStore.js
import { create } from 'zustand';

const useSignUpStore = create((set) => ({
  isClickedUp: false,
  setIsClickedUp: (value) => set({ isClickedUp: value }), // mettre true ou false
//   toggleSignIn: () => set((state) => ({ isClicked: !state.isClicked })), // alterner
}));

export default useSignUpStore;
