// Imports
import { createMemoryHistory } from "history";
import React from "react";
import { Route, Router, Routes } from "react-router-dom";


// Pages
import Main from "./pages/Main";
import Settings from "./pages/Settings";



const history = createMemoryHistory();


function App() {
  return (
    <Router history={history}>
      <Routes>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
