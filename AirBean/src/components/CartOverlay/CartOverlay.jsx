// src/components/CartOverlay.jsx
import React from "react";
import "./CartOverlay.scss"; // Importera SCSS-filen

function CartOverlay({ isVisible, toggleOverlay }) {
  if (!isVisible) return null;

  return (
    <div
      className="cart-overlay-background"
      onClick={toggleOverlay} // Klick utanför stänger
    >
      <div
        className="cart-overlay-content"
        onClick={(e) => e.stopPropagation()} // Förhindra stängning vid klick på innehållet
      >
        <h2 className="h2-overlay">Din beställning</h2>
        <p>Här visas din cart-information</p>
        <button onClick={toggleOverlay}>Stäng</button>
      </div>
    </div>
  );
}

export default CartOverlay;

