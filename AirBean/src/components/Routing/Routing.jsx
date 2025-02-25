import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import About from '../../pages/About/about';
import Status from '../../pages/Status/Status';

//Routing komponenten som innehåller Header och Routes
const Routing = () => {

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<About />} /> {/* Startsidan */}
          <Route path="/about" element={<About />} />
          <Route path="/status" element={<Status />} /> {/* Status-sidan */}
        </Routes>
      </Router>
    </div>
  );
};

export default Routing;
