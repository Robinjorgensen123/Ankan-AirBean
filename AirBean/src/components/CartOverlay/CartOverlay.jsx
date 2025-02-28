import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getCartItems, removeFromCart } from '../../utils/cartUtils';
import { placeOrder } from '../Api/apiService'; 
import './CartOverlay.scss';

function CartOverlay({ isVisible, toggleOverlay, setStoredAntalIKundvagn }) {
  if (!isVisible) return null;
  console.log('CartOverlay is visible');
  
  const navigate = useNavigate();
  const cartItems = getCartItems();
  const hasCoffee = cartItems.some(item => item.title === "Bryggkaffe");
  const hasPastry = cartItems.some(item => item.title === "Gustav Adolfsbakelse");
  const discount = (hasCoffee && hasPastry) ? 49 : 0;  
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0) - discount;  
  

  const handleClick = async () => {
    try {
      const orderData = {
        details: {
          order: cartItems.map(item => ({
            name: item.title,
            price: item.price
          }))
        }
      };
      
      console.log("Orderdata som skickas till API:", orderData);
      
      const response = await placeOrder(orderData);
      
      console.log("API-svar:", response);
      
      const orderNr = response.orderNr;
      
      localStorage.setItem('orderNumber', orderNr);
      
      if (response.eta) {
        const deliveryTime = new Date();
        deliveryTime.setMinutes(deliveryTime.getMinutes() + response.eta);
        localStorage.setItem('deliveryTime', deliveryTime.toISOString());
      }
      
      navigate(`/status/${orderNr}`);
      
    } catch (error) {
      console.error('Error creating order:', error);
      alert('Det gick inte att skapa din order. Försök igen senare.');
    }
  };
  
  const handleRemoveItem = (index) => {
   
    const updatedItems = removeFromCart(index);
    
    setStoredAntalIKundvagn(updatedItems.length); 
  };

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
            {discount > 0 && (
              <div className="discount-row">
                <span className="discount-text">Rabatt (kampanj): -{discount} kr</span>
              </div>
            )}
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

