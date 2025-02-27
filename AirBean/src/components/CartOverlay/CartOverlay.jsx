import React from "react";
import "./CartOverlay.scss"; 
import { useNavigate } from "react-router-dom";



function CartOverlay({ isVisible, toggleOverlay }) {
  if (!isVisible) return null;
  console.log('CartOverlay is visible');
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/status')
  }

  return (
    <div
      className="cart-overlay-background"
    >
      <div
        className="cart-overlay-content"
        onClick={(e) => e.stopPropagation()} 
      >
        <button className="close-button" onClick={toggleOverlay}>X</button>
        <h2 className="h2-overlay">Din beställning</h2>
        <p>Varor här</p>
        <button className="buy-button" onClick={handleClick}>Take my money!</button>
      </div>
    </div>
  );
}
//testar saker här

export default CartOverlay;
