
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainpage from "./pages/Mainpage";
import Login from "./pages/login";
import About from "./pages/About";
import Privacy from "./pages/privacy";
import Contact from "./pages/Contact";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/app" element={<Mainpage />} />
        <Route path="/" element={<Login />} />
        <Route path="/app/about" element={<About />} />
        <Route path="/app/privacy" element={<Privacy />} />
        <Route path="/app/contact" element={<Contact />} />
      </Routes>
    </Router>

  );
}

export default App;