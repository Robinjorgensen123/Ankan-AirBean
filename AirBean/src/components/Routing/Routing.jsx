import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from '../../pages/About/about';
import Home from '../../pages/Home/home';
import Menu from '../../pages/Menu/menu';
import Status from '../../pages/Status/Status';

const Routing = () => {

  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/status" element={<Status />} />
        </Routes>
      
    </div>
  );
};

export default Routing;
