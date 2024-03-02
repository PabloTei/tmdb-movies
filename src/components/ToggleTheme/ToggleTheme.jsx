import React from "react";
import { useTheme } from "../../context/ThemeContext";
import "./ToggleTheme.css";

const ToggleTheme = () => {
  const { isChecked, toggleTheme } = useTheme();
  return (
    <label className="switch">
      <input type="checkbox" checked={isChecked} onChange={toggleTheme} />
      <span className="slider"></span>
    </label>
  );
};

export default ToggleTheme;
