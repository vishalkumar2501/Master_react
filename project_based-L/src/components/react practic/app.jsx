
import React, { useState } from "react";

function App() {

  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  // Celsius to Fahrenheit
  const convertToFahrenheit = (value) => {

    setCelsius(value);

    if (value === "") {
      setFahrenheit("");
      return;
    }

    setFahrenheit(
      ((Number(value) * 9) / 5 + 32).toFixed(2)
    );
  };

  // Fahrenheit to Celsius
  const convertToCelsius = (value) => {

    setFahrenheit(value);

    if (value === "") {
      setCelsius("");
      return;
    }

    setCelsius(
      (((Number(value) - 32) * 5) / 9).toFixed(2)
    );
  };

  return (
    <div style={{ padding: "30px" }}>

      <h1>Temperature Converter</h1>

      <div>
        <label>Celsius:</label>
        <br />

        <input
          type="number"
          value={celsius}
          onChange={(e) =>
            convertToFahrenheit(e.target.value)
          }
        />
      </div>

      <br />

      <div>
        <label>Fahrenheit:</label>
        <br />

        <input
          type="number"
          value={fahrenheit}
          onChange={(e) =>
            convertToCelsius(e.target.value)
          }
        />
      </div>

    </div>
  );
}

export default App;
```
