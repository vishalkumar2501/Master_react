import React, { useEffect, useState } from "react";
import StudentCard from "./components/StudentCard";
import "./App.css";

const App = () => {

  // LocalStorage Data Load
  const [students, setStudents] = useState(() => {

    const savedStudents =
      localStorage.getItem("students");

    return savedStudents
      ? JSON.parse(savedStudents)
      : [
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
        ];
  });

  // Form States
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [attendance, setAttendance] =
    useState("Present");

  // Search State
  const [search, setSearch] = useState("");

  // Filter State
  const [filter, setFilter] = useState("All");

  // Save to LocalStorage
  useEffect(() => {

    localStorage.setItem(
      "students",
      JSON.stringify(students)
    );

  }, [students]);

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

  // Toggle Attendance
  const toggleAttendance = (id) => {

    const updatedStudents = students.map(
      (student) => {

        if(student.id === id){

          return {
            ...student,
            attendance:
              student.attendance === "Present"
                ? "Absent"
                : "Present"
          };
        }

        return student;
      }
    );

    setStudents(updatedStudents);
  };

  // Search + Filter Logic
  const filteredStudents = students.filter(
    (student) => {

      const matchSearch =
        student.name
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchFilter =
        filter === "All"
          ? true
          : student.attendance === filter;

      return matchSearch && matchFilter;
    }
  );

  // Counts
  const totalStudents = students.length;

  const presentStudents = students.filter(
    (student) =>
      student.attendance === "Present"
  ).length;

  return (
    <div className="container">

      <h1>Student Dashboard</h1>

      {/* Stats */}
      <div className="stats">

        <h3>
          Total Students:
          {totalStudents}
        </h3>

        <h3>
          Present Students:
          {presentStudents}
        </h3>

      </div>

      {/* Form */}
      <div className="form">

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <input
          type="text"
          placeholder="Enter Course"
          value={course}
          onChange={(e) =>
            setCourse(e.target.value)
          }
        />

        <select
          value={attendance}
          onChange={(e) =>
            setAttendance(e.target.value)
          }
        >
          <option>Present</option>
          <option>Absent</option>
        </select>

        <button onClick={addStudent}>
          Add Student
        </button>

      </div>

      {/* Search + Filter */}
      <div className="searchFilter">

        <input
          type="text"
          placeholder="Search Student"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <select
          value={filter}
          onChange={(e) =>
            setFilter(e.target.value)
          }
        >
          <option>All</option>
          <option>Present</option>
          <option>Absent</option>
        </select>

      </div>

      {/* Cards */}
      <div className="cardContainer">

        {
          filteredStudents.map((student) => (

            <StudentCard
              key={student.id}
              student={student}
              deleteStudent={deleteStudent}
              toggleAttendance={
                toggleAttendance
              }
            />

          ))
        }

      </div>

    </div>
  );
};

export default App;