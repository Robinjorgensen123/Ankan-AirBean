import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getCartItems, removeFromCart } from '../../utils/cartUtils';
import { placeOrder } from '../Api/apiService'; // Justera sökvägen enligt din projektstruktur
import './CartOverlay.scss';

function CartOverlay({ isVisible, toggleOverlay, setStoredAntalIKundvagn }) {
  if (!isVisible) return null;
  console.log('CartOverlay is visible');
  
  const navigate = useNavigate();
  
  // Hämta kundvagnsartiklar från localStorage
  const cartItems = getCartItems();
  
  // Funktion för att hantera klick på "Take my money!"
  const handleClick = async () => {
    try {
      // Förbered order-data enligt API:ets format
      const orderData = {
        details: {
          order: cartItems.map(item => ({
            name: item.title,
            price: item.price
          }))
        }
      };
      
      console.log("Orderdata som skickas till API:", orderData);
      
      // Anropa API för att skapa en order
      const response = await placeOrder(orderData);
      
      console.log("API-svar:", response);
      
      // Hämta ordernummer från API-svaret
      const orderNr = response.orderNr;
      
      // Spara ordernummer och leveranstid i localStorage
      localStorage.setItem('orderNumber', orderNr);
      
      // Om API:et returnerar ETA, spara leveranstid
      if (response.eta) {
        const deliveryTime = new Date();
        deliveryTime.setMinutes(deliveryTime.getMinutes() + response.eta);
        localStorage.setItem('deliveryTime', deliveryTime.toISOString());
      }
      
      // Navigera till status-sidan med ordernumret från API
      navigate(`/status/${orderNr}`);
      
    } catch (error) {
      console.error('Error creating order:', error);
      alert('Det gick inte att skapa din order. Försök igen senare.');
    }
  };
  
  // Funktion för att ta bort en artikel
  const handleRemoveItem = (index) => {
    // Ta bort varan från localStorage
    const updatedItems = removeFromCart(index);

    // Uppdatera antalet varor i Header
    setStoredAntalIKundvagn(updatedItems.length);  // Uppdatera antalet varor i Header

    // Ingen anledning att stänga overlayen här längre
  };

  // Beräkna totalsumma
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-overlay-background">
      <div className="cart-overlay-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={toggleOverlay}>X</button>
        <h2 className="h2-overlay">Din beställning</h2>
        
        {cartItems.length === 0 ? (
          <p>Kundvagnen är tom</p>
        ) : (
          <>
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>
                  <div className="cart-item-content">
                    <div className="cart-item-title">{item.title}</div>
                    <div className="cart-item-price">{item.price} kr</div>
                  </div>
                  <button className="remove-button" onClick={() => handleRemoveItem(index)}>Ta bort</button>
                </li>
              ))}
            </ul>
            
            <div className="total-row">
              <span className="total-text">Total:</span>
              <span className="total-price">{totalPrice} kr</span>
            </div>
            <p className="include">inkl moms + drönarleverans</p>
            
            <button className="buy-button" onClick={handleClick}>
              Take my money!
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default CartOverlay;