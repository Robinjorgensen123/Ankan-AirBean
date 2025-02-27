import React from "react";
import "./CartOverlay.scss"; 

function CartOverlay({ isVisible, toggleOverlay }) {
  if (!isVisible) return null;

  return (
    <div className="cart-overlay-background">
      <div className="cart-overlay-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={toggleOverlay}>X</button>
        <h2 className="h2-overlay">Din beställning</h2>
        <p>Varor här</p>
        <button className="buy-button">Take my money!</button>
      </div>
    </div>
  );
}

export default CartOverlay;
