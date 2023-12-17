import React from "react";
import "./App.css";
import Home from "./Pages/Home/Homescreen";
import Navbar from "./Pages/Home/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
    <Router>
      <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="*" element={<div>404 Not Found</div>}></Route>
          </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
