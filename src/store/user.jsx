import { create } from 'zustand';

const useUserStore = create((set) => ({
    user: {
        active_dots_balance : 0,
        dice_balance : 0,
        inactive_dots_balance:0,
        level:null,
        max_xp : null,
        telegram_id : null,
        telegram_username:null,
        xp:0,
        address : null
    },
    setUser: (userData) => set({ user: userData }), 
    clearUser: () => set({ user: null }),
}));

export default useUserStore;