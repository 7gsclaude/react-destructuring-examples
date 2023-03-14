import React, { useState } from "react";

function App() {
  //calling count like this allows you to refer to this value later on too
  const [count, setCount] = useState(0);
  //Updating state
  //write setCount so that it can update

  //destructureing
  //r is mapped to the first value and so on
  const [r, g, b] = [9, 132, 227];

  console.log(b);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}
export default App;
