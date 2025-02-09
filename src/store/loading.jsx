import { create } from 'zustand';

const useLoadingStore = create((set) => ({
  isLoading: true,
  setLoading: (loading) => set({ isLoading: loading }),
}));

export default useLoadingStore;
