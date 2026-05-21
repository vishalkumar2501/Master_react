import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import {
  BrowserRouter
} from "react-router-dom";

import ThemeContextProvider
from "./context/ThemeContext";

ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <BrowserRouter>

    <ThemeContextProvider>

      <App />

    </ThemeContextProvider>

  </BrowserRouter>

);
import {
  Provider
} from "react-redux";

import { store }
from "./app/store";