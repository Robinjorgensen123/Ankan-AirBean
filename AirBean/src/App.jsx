import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';  // Importera Router
import Routing from './Components/Routing/Routing'; // Importera Routing-komponenten
import { Navbar } from './Components/Navbar/Navbar'; // Importera Navbar-komponenten
import About from './pages/About/about';

function App() {
  return (
    <Router> 
      <div className="app-container">
        <About/>
      </div>
    </Router>  
  );
}

export default App;
