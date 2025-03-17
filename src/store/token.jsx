import { create } from 'zustand';

const useTokenStore = create((set) => ({
    token: "d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35", 
    settoken: (newtoken) => set({ token: newtoken }), 
}));

export default useTokenStore;
