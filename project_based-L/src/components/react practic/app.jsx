
import React, { useEffect, useState } from "react";

function App() {

  const [time, setTime] = useState(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {

    const timer = setInterval(() => {

      setTime(
        new Date().toLocaleTimeString()
      );

    }, 1000);

    return () => {
      clearInterval(timer);
    };

  }, []);

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px"
      }}
    >

      <h1>Digital Clock</h1>

      <h2>{time}</h2>

    </div>
  );
}

export default App;
```
