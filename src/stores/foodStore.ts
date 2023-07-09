import { create } from "zustand";
import { devtools, persist, subscribeWithSelector } from "zustand/middleware";

const initialFoodValue = {
  fish: 0,
  mouse: 0,
};

export const useFoodStore = create<typeof initialFoodValue>()(
  devtools(
    subscribeWithSelector(
      persist(() => initialFoodValue, { name: "food store" })
    ),
    { name: "food store" }
  )
);

export const addOneFish = () =>
  useFoodStore.setState((state) => ({ fish: state.fish + 1 }));

export const removeOneFish = () =>
  useFoodStore.setState((state) => ({ fish: state.fish - 1 }));
export const removeAllFish = () => useFoodStore.setState({ fish: 0 });
