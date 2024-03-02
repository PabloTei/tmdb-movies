import React from "react";
import ToggleTheme from "../ToggleTheme/ToggleTheme";

const Header = () => {
  return (
    <header>
      <h1>TMDB</h1>
      <ToggleTheme />
    </header>
  );
};

export default Header;
