// Imports
import React from "react";
import { Route, Routes } from "react-router-dom";

// Pages
import Main from "./pages/Main";
import Settings from "./pages/Settings";





function App() {
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
