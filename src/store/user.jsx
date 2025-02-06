import { create } from 'zustand';

const useUserStore = create((set) => ({
    user: {
        active_dots_balance : null,
        dice_balance : null,
        inactive_dots_balance:null,
        level:null,
        max_xp : null,
        telegram_id : null,
        telegram_username:null,
        xp:null,
        address : null
    },
    setUser: (userData) => set({ user: userData }), 
    clearUser: () => set({ user: null }),
}));

export default useUserStore;