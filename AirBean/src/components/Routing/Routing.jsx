import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from '../../pages/About/about';
import Menu from '../../pages/Menu/menu';
import Home from '../../pages/Home/home';
import Status from '../../pages/Status/Status';

//Routing komponenten som innehåller Header och Routes
const Routing = () => {

  return (
    <div>
        <Routes>
       <Route path="/" element={<Home/>} />
          <Route path='/menu' element={<Menu/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/status" element={<Status />} />
        </Routes>
      
    </div>
  );
};

export default Routing;
