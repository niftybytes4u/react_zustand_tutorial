import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { createSelectors } from "../utils/createSelectors";
import { devtools } from "zustand/middleware";

type TCatStoreState = {
  cats: {
    bigCats: number;
    smallCats: number;
  };
  increaseBigCats: () => void;
  increaseSmallCats: () => void;
  summary: () => void;
};

export const useCatStore = createSelectors(
  create<TCatStoreState>()(
    immer(
      devtools(
        (set, get) => ({
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
        }),
        {
          enabled: true,
          name: "cat store",
        }
      )
    )
  )
);
