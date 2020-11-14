import React, { useContext, useEffect } from "react";
import { CounterContext } from "../context/counter-context";

const CounterDisplay = () => {
  const [count] = useContext(CounterContext);

  useEffect(() => {
    console.log('[CounterDisplay] Updating counter...');
  }, [count])

  return (
    <div>
      <p>Counter: {count}</p>
    </div>
  );
}

export default CounterDisplay;