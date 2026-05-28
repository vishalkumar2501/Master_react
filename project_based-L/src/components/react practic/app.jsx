```jsx id="v8u2pq"
import React, { useState } from "react";

function App() {

  // State for textarea
  const [text, setText] = useState("");

  // Handle Input Change
  const handleChange = (e) => {
    setText(e.target.value);
  };

  // Character Count
  const charCount = text.length;

  // Word Count
  const wordCount =
    text.trim() === ""
      ? 0
      : text.trim().split(" ").length;

  return (
    <div style={{ padding: "30px" }}>

      <h1>Live Character Counter</h1>

      <textarea
        rows="6"
        cols="40"
        placeholder="Type something..."
        value={text}
        onChange={handleChange}
      />

      <h3>Total Characters: {charCount}</h3>

      <h3>Total Words: {wordCount}</h3>

    </div>
  );
}

export default App;
```
