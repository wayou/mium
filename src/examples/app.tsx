import React from "react";
import "./app.scss";

import { Button } from "../lib/components/button";
import { Counter } from "../lib/counter";

export default function App() {
  let a = 1;
  return (
    <div className="mium-examples">
      <Button label="foo">bar</Button>
      <Counter label="count is"/>
      <Counter label={'wut'} initialNum={-1} />
    </div>
  );
}
