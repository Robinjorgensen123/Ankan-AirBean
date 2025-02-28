import React from 'react';
import { BrowserRouter } from 'react-router-dom';  // Importera Router
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


