import { create } from "zustand";

const useUpgradeData = create((set) => ({
  isUpgraded: false,
  toggleUpgrade: () => set((state) => ({ isUpgraded: !state.isUpgraded })),
}));

export default useUpgradeData;
