// # Problem Statement

// ## [ReactJS] Student Registration Form with localStorage

// ### Difficulty Level

// Easy to Medium

// ---

// # Problem Description

// You are required to build a ReactJS application for a college registration system.

// The application should allow users to enter student details such as:

// * Student Name
// * Email
// * Mobile Number
// * Course

// The entered data must be automatically saved into `localStorage` while the user types so that the form data is not lost after refreshing the browser.

// When the page reloads, previously saved data should automatically appear inside the form fields.

// After clicking the **Register Student** button:

// * Display submitted student details on the screen
// * Show a success alert message

// ---

// # Objectives

// Your task is to complete the implementation in `App.js`.

// ---

// # Functional Requirements

// ## Task 1 — Create Registration Form

// Create input fields for:

// 1. Student Name
// 2. Email
// 3. Mobile Number
// 4. Course

// ---

// ## Task 2 — Controlled Components

// Use React `useState()` hook to manage all form fields.

// ---

// ## Task 3 — Save Data in localStorage

// While typing in any field:

// * Save updated form data into `localStorage`

// ---

// ## Task 4 — Restore Data After Refresh

// When the page reloads:

// * Retrieve saved form data from `localStorage`
// * Automatically populate all fields

// ---

// ## Task 5 — Form Submission

// When user clicks on:

// ### Register Student

// * Prevent default form refresh
// * Display submitted details below the form

// ---

// ## Task 6 — Success Alert

// After successful submission:

// * Show alert message:

// ```text
// Student Registered Successfully!
// ```

// ---

// # UI Requirements

// The page must contain:

// ## Title

// ```text
// Student Registration Portal
// ```

// ## Button

// ```text
// Register Student
// ```

// ---

// # Technical Specifications

// ## Tech Stack

// * ReactJS

// ---

// # Constraints

// * Use Functional Components only
// * Use Hooks (`useState`, `useEffect`)
// * Do NOT use class components
// * Do NOT use external state management libraries

// ---

// # Expected Behaviour

// ## Example Flow

// ### User Input

// ```text
// Name: Vishal Kumar
// Email: vishal@gmail.com
// Mobile: 9876543210
// Course: ReactJS
// ```

// ### After Refresh

// All values should still remain inside the form.

// ### After Submit

// Display:

// ```text
// Registered Student Details

// Name: Vishal Kumar
// Email: vishal@gmail.com
// Mobile: 9876543210
// Course: ReactJS
// ```

// And show alert:

// ```text
// Student Registered Successfully!
// ```

// ---

// # Sample UI Layout

// ```text
// -----------------------------------
//       Student Registration Portal
// -----------------------------------

// Student Name   : [______________]

// Email          : [______________]

// Mobile Number  : [______________]

// Course         : [______________]

//         [ Register Student ]

// -----------------------------------
// Registered Student Details
// -----------------------------------

// Name   : Vishal Kumar
// Email  : vishal@gmail.com
// Mobile : 9876543210
// Course : ReactJS
// ```

// ---

// # Evaluation Criteria

// Your solution will be evaluated based on:

// * Correct use of React Hooks
// * Controlled Components
// * localStorage implementation
// * UI rendering
// * Form handling
// * Code readability

// ---

// # Time Limit

// 45 Minutes

// ---

// # Bonus Challenge (Optional)

// * Add validation for email and mobile number
// * Disable submit button if fields are empty
// * Add Clear Form button




import React, { useEffect, useState } from "react";

function App() {

  // State for form data
  const [formData, setFormData] = useState({
    studentName: "",
    email: "",
    mobile: "",
    course: ""
  });

  // State for submitted data
  const [submittedData, setSubmittedData] = useState(null);

  // Restore data from localStorage after reload
  useEffect(() => {
    const savedData = localStorage.getItem("studentData");

    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  // Handle input changes
  const handleChange = (e) => {

    const { name, value } = e.target;

    const updatedData = {
      ...formData,
      [name]: value
    };

    setFormData(updatedData);

    // Save to localStorage while typing
    localStorage.setItem("studentData", JSON.stringify(updatedData));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmittedData(formData);

    alert("Student Registered Successfully!");
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>

      <h1>Student Registration Portal</h1>

      <form onSubmit={handleSubmit}>

        <div style={{ marginBottom: "15px" }}>
          <label>Student Name:</label>
          <br />

          <input
            type="text"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            placeholder="Enter Student Name"
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
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

        <div style={{ marginBottom: "15px" }}>
          <label>Mobile Number:</label>
          <br />

          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Enter Mobile Number"
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Course:</label>
          <br />

          <input
            type="text"
            name="course"
            value={formData.course}
            onChange={handleChange}
            placeholder="Enter Course"
          />
        </div>

        <button type="submit">
          Register Student
        </button>

      </form>

      {/* Display Submitted Details */}

      {
        submittedData && (
          <div style={{ marginTop: "30px" }}>

            <h2>Registered Student Details</h2>

            <p>
              <strong>Name:</strong> {submittedData.studentName}
            </p>

            <p>
              <strong>Email:</strong> {submittedData.email}
            </p>

            <p>
              <strong>Mobile:</strong> {submittedData.mobile}
            </p>

            <p>
              <strong>Course:</strong> {submittedData.course}
            </p>

          </div>
        )
      }

    </div>
  );
}

export default App;

