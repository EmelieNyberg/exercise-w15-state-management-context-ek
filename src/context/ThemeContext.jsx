//ThemeContext.jsx

import { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

  //ADD ALL Functions and stuff that we want to use globally

  //Here is a state i want to use globally
  const [theme, setTheme] = useState("light");

  //Here is a function I want to use globally
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>

  );
};

export const useTheme = () => useContext(ThemeContext);