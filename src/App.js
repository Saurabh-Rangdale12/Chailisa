import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

import Navbar from "./component/Navbar/navbar";
import Footer from "./component/Footer/footer";
import Home from "./component/Home/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
        
          
        <Footer />
      </div>
    </Router>
  );
}

export default App;
