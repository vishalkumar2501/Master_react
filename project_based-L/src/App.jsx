import React from "react";
import StudentCard from "./components/StudentCard";
import "./App.css";

const App = () => {

  const students = [
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
    },
    {
      id: 3,
      name: "Aman",
      course: "Python",
      attendance: "Present"
    }
  ];

  return (
    <div className="container">

      <h1>Student Dashboard</h1>

      <div className="cardContainer">

        {
          students.map((student) => (
            <StudentCard
              key={student.id}
              name={student.name}
              course={student.course}
              attendance={student.attendance}
            />
          ))
        }

      </div>

    </div>
  );
};

export default App;