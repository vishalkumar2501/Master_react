```jsx id="4v3u5k"
import React, { useState } from "react";

function App() {

  // State for count
  const [count, setCount] = useState(0);

  // Increment Function
  const increment = () => {
    setCount(count + 1);
  };

  // Decrement Function
  const decrement = () => {
    setCount(count - 1);
  };

  // Reset Function
  const reset = () => {
    setCount(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>

      <h1>Counter App</h1>

      <h2>{count}</h2>

      <button onClick={increment}>
        Increment
      </button>

      <button
        onClick={decrement}
        style={{ marginLeft: "10px" }}
      >
        Decrement
      </button>

      <button
        onClick={reset}
        style={{ marginLeft: "10px" }}
      >
        Reset
      </button>

    </div>
  );
}

export default App;
```
