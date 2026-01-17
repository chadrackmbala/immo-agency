// src/utils/useMenuStore.js
import { create } from 'zustand';

const useMenuStore = create((set) => ({
  // 🔹 Menu mobile principal
  isOpen: false,
  setOpen: (value) => set({ isOpen: value }),

  // 🔹 Overlay
  overLay: false,
  setOverLay: (value) => set({ overLay: value }),

  // 🔹 Sous-menus
  openSubMenu: null, // 'location' | 'achat' | 'vente' | null
  setOpenSubMenu: (value) => set({ openSubMenu: value }),

  // 🔥 ACTION GLOBALE
  closeAllMenus: () =>
    set({
      isOpen: false,
      overLay: false,
      openSubMenu: null,
    }),
}));

export default useMenuStore;
