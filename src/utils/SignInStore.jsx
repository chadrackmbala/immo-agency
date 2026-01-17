// src/utils/useSignInStore.js
import { create } from 'zustand';

const useSignInStore = create((set) => ({
  isClicked: false,
  setIsClicked: (value) => set({ isClicked: value }), // mettre true ou false
//   toggleSignIn: () => set((state) => ({ isClicked: !state.isClicked })), // alterner
}));

export default useSignInStore;
