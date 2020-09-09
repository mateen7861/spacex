import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Launches from "./components/Launches";
import LaunchDetails from "./components/LaunchDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <br />
        <Routes>
          <Route path="/" element={<Launches />} />
          <Route path="/:id" element={<LaunchDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
