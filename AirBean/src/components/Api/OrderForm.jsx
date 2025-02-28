import React, { useState } from "react";
import { placeOrder } from "./apiService";

function OrderForm() {
  const [orderData, setOrderData] = useState({ order: [] });
  const [serverResponse, setServerResponse] = useState(null);

  const handleSetOrder = () => {
    setOrderData({
      order: [
        {
          id: 1,
          title: "Caffe Latte",
          price: 49
        }
      ]
    });
  };

  const handlePlaceOrder = async () => {
    try {
      const response = await placeOrder(orderData);
      setServerResponse(response);
   
      console.log("Order-respons:", response);
    } catch (error) {
      console.error("Ett fel uppstod:", error);
    }
  };

  return (
    <div style={{ border: "1px solid #ddd", padding: "1rem", margin: "1rem 0" }}>
      <h2>OrderForm</h2>
      <button onClick={handleSetOrder}>Lägg till exempel-order i state</button>
      <br />
      <button onClick={handlePlaceOrder}>Skicka order</button>
    </div>
  );
}

export default OrderForm;