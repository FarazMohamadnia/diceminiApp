import { create } from 'zustand';

const useTokenStore = create((set) => ({
    token: "", 
    settoken: (newtoken) => set({ token: newtoken }), 
}));

export default useTokenStore;
