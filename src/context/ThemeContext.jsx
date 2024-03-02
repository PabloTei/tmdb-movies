import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleTheme = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isChecked, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
