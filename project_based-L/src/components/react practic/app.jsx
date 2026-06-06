
import React, { useState } from "react";

function App() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {

    e.preventDefault();

    // Dummy Credentials
    const validUsername = "admin";
    const validPassword = "12345";

    if (
      username === validUsername &&
      password === validPassword
    ) {
      setMessage("Login Successful ✅");
    } else {
      setMessage("Invalid Username or Password ❌");
    }
  };

  return (
    <div style={{ padding: "30px" }}>

      <h1>Login Form</h1>

      <form onSubmit={handleLogin}>

        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
        />

        <br />
        <br />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <br />
        <br />

        <button type="submit">
          Login
        </button>

      </form>

      <h3>{message}</h3>

    </div>
  );
}

export default App;



if (
  username === validUsername &&
  password === validPassword
)
