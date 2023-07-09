import { StateCreator, create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { createSelectors } from "../utils/createSelectors";
import { devtools, persist, subscribeWithSelector } from "zustand/middleware";

type TCatStoreState = {
  cats: {
    bigCats: number;
    smallCats: number;
  };
  increaseBigCats: () => void;
  increaseSmallCats: () => void;
  summary: () => void;
};

const createCatSlice: StateCreator<
  TCatStoreState,
  [
    ["zustand/immer", never],
    ["zustand/devtools", unknown],
    ["zustand/subscribeWithSelector", never],
    ["zustand/persist", unknown]
  ]
> = (set, get) => ({
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
});
export const useCatStore = createSelectors(
  create<TCatStoreState>()(
    immer(
      devtools(
        subscribeWithSelector(
          persist(createCatSlice, {
            name: "cat store",
          })
        ),
        {
          enabled: true,
          name: "cat store",
        }
      )
    )
  )
);
