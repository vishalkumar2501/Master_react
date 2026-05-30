```jsx id="s4j8vn"
import React, { useState, useEffect } from "react";

function App() {

  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  // Load data from localStorage on page load
  useEffect(() => {
    const savedData = localStorage.getItem("studentData");

    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  // Handle input change
  const handleChange = (e) => {

    const { name, value } = e.target;

    const updatedData = {
      ...formData,
      [name]: value
    };

    setFormData(updatedData);

    // Save data in localStorage
    localStorage.setItem(
      "studentData",
      JSON.stringify(updatedData)
    );
  };

  return (
    <div style={{ padding: "30px" }}>

      <h1>Student Form with localStorage</h1>

      <div>
        <label>Name:</label>
        <br />

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter Name"
        />
      </div>

      <br />

      <div>
        <label>Email:</label>
        <br />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter Email"
        />
      </div>

      <hr />

      <h2>Preview</h2>

      <p>
        <strong>Name:</strong> {formData.name}
      </p>

      <p>
        <strong>Email:</strong> {formData.email}
      </p>

    </div>
  );
}

export default App;
```
