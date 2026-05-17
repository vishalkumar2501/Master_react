import React, {
  createContext,
  useState
} from "react";

// Create Context
export const ThemeContext =
  createContext();

const ThemeContextProvider = ({
  children
}) => {

  const [darkMode, setDarkMode] =
    useState(false);

  // Toggle Function
  const toggleTheme = () => {

    setDarkMode(!darkMode);
  };

  return (

    <ThemeContext.Provider
      value={{
        darkMode,
        toggleTheme
      }}
    >

      {children}

    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;