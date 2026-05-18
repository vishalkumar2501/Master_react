import React, {
  useContext,
  useState
} from "react";

import {
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Users from "./pages/Users";

import StudentDetails
from "./pages/StudentDetails";

import {
  ThemeContext
} from "./context/ThemeContext";

import "./App.css";

const App = () => {

  const [students] = useState([
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

  const { darkMode } =
    useContext(ThemeContext);

  return (

    <div
      className={
        darkMode
          ? "app dark"
          : "app"
      }
    >

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
          path="/users"
          element={<Users />}
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