
import React, { useState } from "react";

function App() {

  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(0);

  const add = () => {
    setResult(Number(num1) + Number(num2));
  };

  const subtract = () => {
    setResult(Number(num1) - Number(num2));
  };

  const multiply = () => {
    setResult(Number(num1) * Number(num2));
  };

  const divide = () => {
    setResult(Number(num1) / Number(num2));
  };

  return (
    <div style={{ padding: "30px" }}>

      <h1>Simple Calculator</h1>

      <input
        type="number"
        placeholder="Enter First Number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Enter Second Number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <br /><br />

      <button onClick={add}>Add</button>

      <button
        onClick={subtract}
        style={{ marginLeft: "10px" }}
      >
        Subtract
      </button>

      <button
        onClick={multiply}
        style={{ marginLeft: "10px" }}
      >
        Multiply
      </button>

      <button
        onClick={divide}
        style={{ marginLeft: "10px" }}
      >
        Divide
      </button>

      <hr />

      <h2>Result: {result}</h2>

    </div>
  );
}

export default App;
```
