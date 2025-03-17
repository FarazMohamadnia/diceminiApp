import { create } from "zustand";

export const useStore = create((set) => ({
  player_id: null,
  activePredict: null,
  predictList: [],
  slots: 1,
  shareLink: "",

  setPlayer_id: (id) => set({ player_id: id }),
  setPredicts: (props) =>
    set({
      predictList: props.predictions,
      slots: props.slots,
      activePredict: props.predictions[0],
    }),
  updatePredicts: (props) => set(props),
  setActivePredict: (predict) => set({ activePredict: predict }),
  setShareLink: (link) => set({ shareLink: link }),
}));
