import React from "react";
import "./App.css";
import Home from "./Pages/Home/Homescreen";
import Navbar from "./Pages/Home/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
      <div>
          <Navbar />
          <Routes>
            {/* <Route path="/" element={<Home />}></Route>
            <Route path="*" element={<div>404 Not Found</div>}></Route> */}

            {/* Render Home component for any route */}
            <Route path="*" element={<Home />} />

            {/* Handle 404 Not Found */}
            {/* Note: This route should come after the generic route */}
            <Route path="/404" element={<div>404 Not Found</div>} />
          </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
