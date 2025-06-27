import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import About from "./Components/About";
import CorneredButton from "./PropAssets/CorneredButton";
import Home from "./Components/Home";
import Policy from "./Components/Policy";
import Terms from "./Components/Terms";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      <Footer />
      <CorneredButton />
      <div className="app-nav-wrapper">
        <Nav />
      </div>
    </div>
  );
}

export default App;
