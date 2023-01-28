import './App.css';
import React from "react";
import Home from './Pages/Home.js'
import About from './Pages/About.js'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Detail from "./Pages/Detail";


function App() {

  return (
      <Router>
        <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/about" element={<About></About>} />
            <Route path="/detail" element={<Detail></Detail>} />
        </Routes>
      </Router>

  );
}

export default App;
