import React from "react";
import "./CartOverlay.scss"; 
import { useNavigate } from "react-router-dom";
import Menu from "../../pages/Menu/menu";
import { useEffect } from "react";



function CartOverlay({ isVisible, toggleOverlay, kundvagnsArtiklar }) {
  if (!isVisible) return null;

  console.log("Varukorg i CartOverlay:", kundvagnsArtiklar); // Skriver ut för att se om det kommer korrekt

  // Om kundvagnsArtiklar är undefined eller inte en array
  if (!Array.isArray(kundvagnsArtiklar)) {
    console.log("KundvagnsArtiklar är ogiltig eller tom");
    return <div>Varukorgen är tom eller ogiltig.</div>;
  }

  return (
    <div className="cart-overlay-background">
      <div className="cart-overlay-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={toggleOverlay}>X</button>
        <h2 className="h2-overlay">Din beställning</h2>

        {kundvagnsArtiklar.length === 0 ? (
          <p>Din varukorg är tom</p>
        ) : (
          <div>
            {kundvagnsArtiklar.map((item, index) => (
              <div key={index} className="cart-item">
                <p>{item.title} - {item.price} kr</p>
              </div>
            ))}
          </div>
        )}

        <button className="buy-button" onClick={() => navigate('/status')}>Take my money!</button>
      </div>
    </div>
  );
}

export default CartOverlay