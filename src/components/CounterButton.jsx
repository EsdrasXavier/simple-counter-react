import React, { useContext } from "react";
import { CounterContext } from "../context/counter-context";

const CounterButton = ({ valueToIncrease, text }) => {
  const [count, setCount] = useContext(CounterContext);
  const updateValue = () => {
    console.log(`[CounterButton] Button ${text} pressed...`);
    setCount(count + valueToIncrease);
  }

  return (
    <button style={{ margin: '2px' }} onClick={updateValue}>
      {text}
    </button>
  );
}

export default CounterButton;