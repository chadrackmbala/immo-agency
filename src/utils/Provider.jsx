// src/utils/useMenuStore.js
import { create } from 'zustand';

const useMenuStore = create((set) => ({
  isMenuOpen: false,
  openMenu: () => set({ isMenuOpen: true }),
  closeMenu: () => set({ isMenuOpen: false }),
}));

export default useMenuStore;
