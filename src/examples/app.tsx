import React from "react";
import "./app.scss";

import { Button } from "../lib/button";
import { Counter } from "../lib/counter";

export default function App() {
  return (
    <div className="mium-examples">
      <Button label="foo">bar</Button>
      <Counter label="count is"/>
      <Counter  initialNum={-1} />
    </div>
  );
}
