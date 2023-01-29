import './App.css';
import React from "react";
import Home from './Pages/Home.js'
import About from './Pages/About.js'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Detail from "./Pages/Detail";
import SearchPlanet from "./Pages/SearchPlanet";
import Master from "./Pages/Master";


function App() {

  return (
      <Router>
        <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/about" element={<About></About>} />
            <Route path="/detail" element={<Detail></Detail>} />
            <Route path="/searchplanet" element={<SearchPlanet></SearchPlanet>} />
            <Route path="/master" element={<Master></Master>} />
        </Routes>
      </Router>

  );
}

export default App;
