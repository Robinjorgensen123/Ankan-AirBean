import React from "react";
import Header from "./Components/Header/Header";
import "./App.css";
import About from "./pages/About/about";
import OrderForm from "./components/Api/OrderForm";
import OrderStatus from "./components/Api/OrderStatus";
import CartManager from "./components/CartOverlay/CartManager";
import DataDisplay from "./components/Api/Coffemenu";



function App() {
  return (
    <>
      <Header />
      
      <div className="app-container">
        <DataDisplay />
        <CartManager />
        <About />
        <OrderForm />
        <OrderStatus />
      </div>
    </>
  );
}

export default App;