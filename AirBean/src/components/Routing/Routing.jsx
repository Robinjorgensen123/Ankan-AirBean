import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from '../../pages/About/about';
import Menu from '../../pages/Menu/menu';
/* import Status from '../../pages/Status/Status'; */

//Routing komponenten som innehåller Header och Routes
const Routing = () => {

  return (
    <div>
        <Routes>
         {/*  { <Route path="/" element={< />} /> {/* Startsidan }  */}
          <Route path="/about" element={<About />} />
          {/* <Route path="/home" element={<Home/>} /> */}
         {/*  <Route path="/status" element={<Status />} /> {/* Status-sidan */}
        </Routes>
      
    </div>
  );
};

export default Routing;
