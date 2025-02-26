import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';  // Importera Router
import Routing from './Components/Routing/Routing'; // Importera Routing-komponenten
import About from './pages/About/about';
import Header from "./Components/Header/Header";
import OrderForm from "./components/Api/OrderForm";
import OrderStatus from "./components/Api/OrderStatus";
import CartManager from "./components/CartOverlay/CartManager";
import DataDisplay from "./components/Api/Coffemenu";
import "./App.css";


function App() {
  return (
    <>
      <Header />
      <Router> 
      <div className="app-container">
        <Routing/>
        <DataDisplay />
        <CartManager />
        <About />
        <OrderForm />
        <OrderStatus />
      </div>
      </Router> 
    </>
  );
}

export default App;
