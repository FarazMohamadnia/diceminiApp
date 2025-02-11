import { create } from 'zustand';

const useNotificationStore = create((set) => ({
  isToggled: true,
  toggle: () => set((state) => ({ isToggled: !state.isToggled })), 
  setTrue: () => set({ isToggled: true }), 
  setFalse: () => set({ isToggled: false }) 
}));

export default useNotificationStore;
