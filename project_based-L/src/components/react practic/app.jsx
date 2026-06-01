
import React, { useState } from "react";

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "#fff",
        color: darkMode ? "#fff" : "#000",
        height: "100vh",
        textAlign: "center",
        paddingTop: "50px"
      }}
    >

      <h1>
        {darkMode ? "Dark Mode" : "Light Mode"}
      </h1>

      <button onClick={toggleTheme}>
        Switch Theme
      </button>

    </div>
  );
}

export default App;
```
