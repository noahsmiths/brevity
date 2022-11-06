// Imports
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { themeChange } from 'theme-change';



// Pages
import Main from "./pages/Main";
import Settings from "./pages/Settings";

function App() {

  useEffect(() => {
    themeChange(false)
    // 👆 false parameter is required for react project
  }, [])

  return (
    <Routes>
      <Route path="/" element={
        <div>
          <Main />
        </div>

      } />
      <Route path="/settings" element={
        <div>
          <Settings />
        </div>
      } />
    </Routes>
  );
}

export default App;
