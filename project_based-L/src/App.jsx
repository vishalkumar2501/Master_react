import React, { useState } from "react";
import {
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import StudentDetails from "./pages/StudentDetails";

import "./App.css";

const App = () => {

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

  return (
    <div>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={
            <Home students={students} />
          }
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/student/:id"
          element={
            <StudentDetails
              students={students}
            />
          }
        />

      </Routes>

    </div>
  );
};

export default App;
