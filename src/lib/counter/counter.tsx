import React, { useState } from "react";

interface ICounterProps {
  label: string;
  initialNum?: number;
}

export function Counter({ initialNum = 0, ...props }: ICounterProps) {
  const [num, setNum] = useState(initialNum);

  function add() {
    setNum(num + 1);
  }

  function minus() {
    setNum(num - 1);
  }

  return (
    <div className="counter-example">
      <button onClick={add}>+</button>
      <button onClick={minus}>-</button>
      {props.label}:{num}
    </div>
  );
}

