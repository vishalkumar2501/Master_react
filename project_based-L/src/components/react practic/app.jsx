
import React, { useState } from "react";

function App() {

  // State for password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Toggle Function
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>

      <h1>Show / Hide Password</h1>

      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter Password"
      />

      <br />
      <br />

      <button onClick={togglePassword}>

        {
          showPassword
            ? "Hide Password"
            : "Show Password"
        }

      </button>

    </div>
  );
}

export default App;

