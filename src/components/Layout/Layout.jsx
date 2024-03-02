import React from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../../pages/Home/Home";
import Footer from "../Footer/Footer";
import { ThemeProvider, useTheme } from "../../context/ThemeContext";
import "./Layout.css";

const LayoutContent = () => {
  const { isChecked } = useTheme();
  const theme = isChecked ? "dark-mode" : "light-mode";

  return (
    <div className={`container ${theme}`}>
      <Sidebar />
      <Home />
    </div>
  );
};

const Layout = () => {
  return (
    <ThemeProvider>
      <div className="layout">
        <Header />
        <LayoutContent />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
