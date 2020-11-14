import React from "react";
import { CounterContextProvider } from "../context/counter-context";
import CounterButtons from "./CounterButtons";
import CounterDisplay from "./CounterDisplay";

const CounterView = () => {
  return (
    <div className="container">
      <h3>Counter</h3>
      <CounterContextProvider>
        <div>
          <CounterDisplay />
          <CounterButtons />
        </div>
      </CounterContextProvider>
    </div>
  );
}
export default CounterView;