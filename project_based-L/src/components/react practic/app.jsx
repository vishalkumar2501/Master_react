
import React, { useState } from "react";

function App() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {

    let newErrors = {};

    // Name Validation
    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
    }

    // Email Validation
    if (!formData.email.includes("@")) {
      newErrors.email = "Valid email required";
    }

    // Mobile Validation
    if (formData.mobile.length !== 10) {
      newErrors.mobile = "Mobile must be 10 digits";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (validate()) {
      alert("Form Submitted Successfully!");
    }
  };

  return (
    <div style={{ padding: "30px" }}>

      <h1>Form Validation App</h1>

      <form onSubmit={handleSubmit}>

        <div>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
          />
          <br />
          <span>{errors.name}</span>
        </div>

        <br />

        <div>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
          />
          <br />
          <span>{errors.email}</span>
        </div>

        <br />

        <div>
          <input
            type="text"
            name="mobile"
            placeholder="Enter Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
          />
          <br />
          <span>{errors.mobile}</span>
        </div>

        <br />

        <button type="submit">
          Submit
        </button>

      </form>

    </div>
  );
}

export default App;
```
