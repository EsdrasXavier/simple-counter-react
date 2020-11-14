import React, { useContext, useState } from "react";
import { CounterContext } from "../context/counter-context";

const InputValue = () => {
  const [count, setCount] = useContext(CounterContext);
  const [value, setValue] = useState(0);

  const onChange = ({ target }) => {
    setValue(target.value);
  }

  const onClick = () => {
    console.log(`[InputValue] User inputed ${value} to change on the counter...`);
    setCount(count + Number(value));
  }

  return (
    <div style={{ margin: '2px' }} >
      <input value={value} onChange={onChange} />
      <button onClick={onClick}>Add</button>
    </div>
  );
}

export default InputValue;