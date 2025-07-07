
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainpage from "./pages/Mainpage";
import Login from "./pages/login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/app" element={<Mainpage />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>

  );
}

export default App;