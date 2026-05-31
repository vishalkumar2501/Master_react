
import React, { useState } from "react";

function App() {

  const [search, setSearch] = useState("");

  const students = [
    "Vishal",
    "Rahul",
    "Aman",
    "Priya",
    "Sneha",
    "Rohit",
    "Ankit"
  ];

  const filteredStudents = students.filter((student) =>
    student.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "30px" }}>

      <h1>Search Filter App</h1>

      <input
        type="text"
        placeholder="Search Student..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <hr />

      <ul>
        {filteredStudents.map((student, index) => (
          <li key={index}>{student}</li>
        ))}
      </ul>

    </div>
  );
}

export default App;
```
