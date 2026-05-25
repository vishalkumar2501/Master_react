// import React, { useEffect, useState } from "react";

// function App() {

//   // State for form data
//   const [formData, setFormData] = useState({
//     studentName: "",
//     email: "",
//     mobile: "",
//     course: ""
//   });

//   // State for submitted data
//   const [submittedData, setSubmittedData] = useState(null);

//   // Restore data from localStorage after reload
//   useEffect(() => {
//     const savedData = localStorage.getItem("studentData");

//     if (savedData) {
//       setFormData(JSON.parse(savedData));
//     }
//   }, []);

//   // Handle input changes
//   const handleChange = (e) => {

//     const { name, value } = e.target;

//     const updatedData = {
//       ...formData,
//       [name]: value
//     };

//     setFormData(updatedData);

//     // Save to localStorage while typing
//     localStorage.setItem("studentData", JSON.stringify(updatedData));
//   };

//   // Handle form submit
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     setSubmittedData(formData);

//     alert("Student Registered Successfully!");
//   };

//   return (
//     <div style={{ padding: "30px", fontFamily: "Arial" }}>

//       <h1>Student Registration Portal</h1>

//       <form onSubmit={handleSubmit}>

//         <div style={{ marginBottom: "15px" }}>
//           <label>Student Name:</label>
//           <br />

//           <input
//             type="text"
//             name="studentName"
//             value={formData.studentName}
//             onChange={handleChange}
//             placeholder="Enter Student Name"
//           />
//         </div>

//         <div style={{ marginBottom: "15px" }}>
//           <label>Email:</label>
//           <br />

//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Enter Email"
//           />
//         </div>

//         <div style={{ marginBottom: "15px" }}>
//           <label>Mobile Number:</label>
//           <br />

//           <input
//             type="text"
//             name="mobile"
//             value={formData.mobile}
//             onChange={handleChange}
//             placeholder="Enter Mobile Number"
//           />
//         </div>

//         <div style={{ marginBottom: "15px" }}>
//           <label>Course:</label>
//           <br />

//           <input
//             type="text"
//             name="course"
//             value={formData.course}
//             onChange={handleChange}
//             placeholder="Enter Course"
//           />
//         </div>

//         <button type="submit">
//           Register Student
//         </button>

//       </form>

//       {/* Display Submitted Details */}

//       {
//         submittedData && (
//           <div style={{ marginTop: "30px" }}>

//             <h2>Registered Student Details</h2>

//             <p>
//               <strong>Name:</strong> {submittedData.studentName}
//             </p>

//             <p>
//               <strong>Email:</strong> {submittedData.email}
//             </p>

//             <p>
//               <strong>Mobile:</strong> {submittedData.mobile}
//             </p>

//             <p>
//               <strong>Course:</strong> {submittedData.course}
//             </p>

//           </div>
//         )
//       }

//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";

function App() {

  // Food item details
  const foodName = "Burger";
  const price = 120;

  // Quantity state
  const [quantity, setQuantity] = useState(1);

  // Increase quantity
  const increaseQuantity = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };

  // Decrease quantity
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Total amount
  const totalAmount = quantity * price;

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      
      <h1>QuickBite Order Manager</h1>

      <h2>{foodName}</h2>

      <h3>Price: ₹{price}</h3>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          margin: "20px"
        }}
      >
        <button onClick={decreaseQuantity}>-</button>

        <span>{quantity}</span>

        <button onClick={increaseQuantity}>+</button>
      </div>

      <h2>Total Amount: ₹{totalAmount}</h2>
    </div>
  );
}

export default App;


import React, { useState } from "react";

function App() {

  // Counter state
  const [count, setCount] = useState(0);

  // Increase counter
  const increment = () => {
    setCount(count + 1);
  };

  // Decrease counter
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  // Reset counter
  const resetCounter = () => {
    setCount(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>

      <h1>React Counter Manager</h1>

      <h2>Counter Value: {count}</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px"
        }}
      >
        <button onClick={increment}>Increment</button>

        <button onClick={decrement}>Decrement</button>

        <button onClick={resetCounter}>Reset</button>
      </div>

    </div>
  );
}

export default App;


import React, { useState } from "react";

function App() {

  // TODO 1:
  // Create counter state



  // TODO 2:
  // Create increment function



  // TODO 3:
  // Create decrement function



  // TODO 4:
  // Create reset function



  return (
    <div>

      <h1>React Counter Manager</h1>

      <h2>Counter Value:</h2>

      <button>Increment</button>

      <button>Decrement</button>

      <button>Reset</button>

    </div>
  );
}

export default App;