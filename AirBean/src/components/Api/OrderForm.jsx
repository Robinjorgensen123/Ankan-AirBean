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
      // Här har du nu API-svaret i "serverResponse"
      // Du visar det dock inte om du inte vill,
      // men kan console.log för att se datan.
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
      {/* Inget visas per default. Du kan visa eller inte visa utifrån behov. */}
    </div>
  );
}

export default OrderForm;