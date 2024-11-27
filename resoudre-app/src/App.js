import React, { useState } from "react";
import CounterDisplay from "./CounterDisplay";  
import CounterControls from "./CounterControls";  
import "./App.css"

function App() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    console.log("Increment clicked");
    setCounter(counter + 1);
  };

  const decrement = () => {
    console.log("Decrement clicked");
    setCounter(counter - 1);
  };

  const reset = () => {
    console.log("Reset clicked");
    setCounter(0);
  };

  return (
    <div>
      <h1>Debug the Counter App</h1>
      <CounterDisplay counter={counter} />
      <CounterControls
        onIncrement={increment}
        onDecrement={decrement}
        onReset={reset}
      />
    </div>
  );
}

export default App;
