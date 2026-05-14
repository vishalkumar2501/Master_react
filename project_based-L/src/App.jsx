import React, { useState } from "react";
import StudentCard from "./components/StudentCard";
import "./App.css";

const App = () => {

  // Students State
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Vishal",
      course: "React",
      attendance: "Present"
    },
    {
      id: 2,
      name: "Rahul",
      course: "Java",
      attendance: "Absent"
    }
  ]);

  // Form States
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [attendance, setAttendance] = useState("Present");

  // Add Student
  const addStudent = () => {

    if(name === "" || course === ""){
      alert("Please fill all fields");
      return;
    }

    const newStudent = {
      id: Date.now(),
      name,
      course,
      attendance
    };

    setStudents([...students, newStudent]);

    // Clear Inputs
    setName("");
    setCourse("");
    setAttendance("Present");
  };

  // Delete Student
  const deleteStudent = (id) => {

    const updatedStudents = students.filter(
      (student) => student.id !== id
    );

    setStudents(updatedStudents);
  };

  return (
    <div className="container">

      <h1>Student Dashboard</h1>

      {/* Form */}
      <div className="form">

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />

        <select
          value={attendance}
          onChange={(e) => setAttendance(e.target.value)}
        >
          <option>Present</option>
          <option>Absent</option>
        </select>

        <button onClick={addStudent}>
          Add Student
        </button>

      </div>

      {/* Cards */}
      <div className="cardContainer">

        {
          students.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
              deleteStudent={deleteStudent}
            />
          ))
        }

      </div>

    </div>
  );
};

export default App;