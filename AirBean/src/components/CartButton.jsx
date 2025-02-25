import React from "react";

function CartButton({ isOverlayOpen, toggleOverlay }) {
  return (
    <button 
      className="cart-button" 
      onClick={toggleOverlay}
      style={{ margin: "1rem", padding: "0.5rem 1rem" }}
    >
      {isOverlayOpen ? "Stäng" : "Kundvagn"}
    </button>
  );
}

export default CartButton;
