import { create } from 'zustand';

const useCounterStore = create((set) => ({
    amount: 0,
    setamount: (value) => set({ amount: value }),
}));

export default useCounterStore;