import React, { useState } from "react";

interface ICounterProps {
  initialNum?: number;
}
export const Counter: React.SFC<ICounterProps> = props => {
  const [num, setNum] = useState(props.initialNum);
  return (
    <div className="counter-example">
      <button onClick={() => setNum(num! + 1)}>+</button>
      <button onClick={() => setNum(num! - 1)}>-</button>
      {num}
    </div>
  );
};

Counter.defaultProps = {
  initialNum: 0
};
