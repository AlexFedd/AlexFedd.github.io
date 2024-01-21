import { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0)
  return (
    <div className="app">
      <h1>{number}</h1>
      <button onClick={() => {setNumber(number + 1)}}>+</button>
      <button onClick={() => {setNumber(number - 1)}}>-</button>
      <button onClick={() => {setNumber(0)}}>Set to 0</button>
    </div>
  );
}

export default App;
