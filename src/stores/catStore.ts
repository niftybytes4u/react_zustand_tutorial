import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type TCatStoreState = {
  cats: {
    bigCats: number;
    smallCats: number;
  };
  increaseBigCats: () => void;
  increaseSmallCats: () => void;
  summary: () => void;
};

export const useCatStore = create<TCatStoreState>()(
  immer((set, get) => ({
    cats: {
      bigCats: 0,
      smallCats: 0,
    },
    increaseBigCats: () =>
      set((state) => {
        state.cats.bigCats++;
      }),
    increaseSmallCats: () =>
      set((state) => {
        state.cats.smallCats++;
      }),
    summary: () => {
      const total = get().cats.bigCats + get().cats.smallCats;
      return `There are ${total} cats in total. `;
    },
  }))
);
