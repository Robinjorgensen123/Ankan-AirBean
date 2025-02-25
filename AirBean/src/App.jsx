import React from "react";
import Header from "./Components/Header/Header";
import "./App.css";
import About from "./pages/About/about";
import OrderForm from "./components/OrderForm";
import OrderStatus from "./components/OrderStatus";
import CartManager from "./components/CartManager";

function App() {
  return (
    <>
      <Header />
      
      <div className="app-container">
        <CartManager />
        <About />
        <OrderForm />
        <OrderStatus />
      </div>
    </>
  );
}

export default App;
