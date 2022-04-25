import React from "react";
import { Encrypt, Decrypt } from "./components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages";
import * as ROUTES from "./constants/routes";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.ENCRYPT} element={<Encrypt />} />
        <Route path={ROUTES.DECRYPT} element={<Decrypt />} />
      </Routes>
    </Router>
  );
}

export default App;
