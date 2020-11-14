import React from "react";
import CounterButton from "./CounterButton";
import InputValue from "./InputValue";

const CounterButtons = () => {
  return (
    <div>
      <CounterButton text='Add' valueToIncrease={1} />
      <CounterButton text='Minus' valueToIncrease={-1} />
      <CounterButton text='Add 10' valueToIncrease={10} />
      <CounterButton text='Minus 10' valueToIncrease={-10} />
      <InputValue />
    </div>
  );
}

export default CounterButtons;