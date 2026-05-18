import React from "react";

import {
  Link
} from "react-router-dom";

import ThemeButton
from "./ThemeButton";

const Navbar = () => {

  return (
    <nav className="navbar">

      <h2>Student Dashboard</h2>

      <div className="navLinks">

        <Link to="/">
          Home
        </Link>

        <Link to="/about">
          About
        </Link>

        <Link to="/users">
          Users
        </Link>

        <ThemeButton />

      </div>

    </nav>
  );
};

export default Navbar;