import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';  // Importera Router
import Routing from './Components/Routing/Routing'; // Importera Routing-komponenten
import About from './pages/About/about';
import Home from './pages/Home/home';
import OrderForm from "./components/Api/OrderForm";
import OrderStatus from "./components/Api/OrderStatus";
import CartManager from "./components/CartOverlay/CartManager";
import DataDisplay from "./components/Api/Coffemenu";
import "./App.css";
import Menu from './pages/Menu/menu';
import Status from './pages/Status/Status';


function App() {
  return (
    <>
      <Router> 
      <div className="app-container">
        <Routing/>
        <DataDisplay />
        <CartManager />
        <Home />
        <About />
        <Menu />
        <OrderForm />
        <OrderStatus />
        <Status/>
      </div>
      </Router> 
    </>
  );
}

export default App;