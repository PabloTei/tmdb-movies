import React from "react";
import Layout from "./components/Layout/Layout";
import { ThemeProvider } from "./context/ThemeContext";
import "./index.css";

const App = () => {
  return (
    <ThemeProvider>
      <div>
        <Layout />
      </div>
    </ThemeProvider>
  );
};

export default App;
