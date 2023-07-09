import { BearBox } from "./components/BearBox";
import { FoodBox } from "./components/FoodBox";

function App() {
  return (
    <div className="container">
      <h1>Zustand Tutorial</h1>
      <div>
        <BearBox />
        <FoodBox />
      </div>
    </div>
  );
}

export default App;
