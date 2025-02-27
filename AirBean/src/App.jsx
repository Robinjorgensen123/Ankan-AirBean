import React from 'react';
import { BrowserRouter } from 'react-router-dom';  // Importera Router
import "./App.css";
import Routing from './Components/Routing/Routing';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routing/>
      </BrowserRouter>
    </>
  );
}

export default App; 


{/* <div className="app-container">
      
      </div> */}