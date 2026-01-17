// src/utils/useMenuStore.js
import { create } from 'zustand';

const useOperationContextProvider = create((set) => ({
  isCliked: false,
  setIsCliked: (value) => set({ isCliked: value }),
  toggleContext: () => set((state) => ({ isCliked: !state.isCliked })),
}));

export default useOperationContextProvider;
