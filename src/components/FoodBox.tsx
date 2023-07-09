import React from "react";
import { useFoodStore } from "../stores/foodStore";

export const FoodBox = () => {
  const { fish, addOneFish, removeOneFish, removeAllFish } = useFoodStore();
  return (
    <div className="box">
      <h1>Food Box</h1>
      <p>fish: {fish}</p>
      <div>
        <button onClick={addOneFish}>add one fish</button>
        <button onClick={removeOneFish}>remove one fish</button>
        <button onClick={removeAllFish}>remove all fish</button>
      </div>
    </div>
  );
};
