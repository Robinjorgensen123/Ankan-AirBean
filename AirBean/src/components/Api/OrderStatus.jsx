import React, { useState } from "react";
import { getOrderStatus } from "./apiService";

function OrderStatus() {
  const [orderNr, setOrderNr] = useState("");
  const [statusResponse, setStatusResponse] = useState(null);

  const handleGetStatus = async () => {
    try {
      const response = await getOrderStatus(orderNr);
      setStatusResponse(response);
      console.log("Status-respons:", response);
    } catch (error) {
      console.error("Ett fel uppstod:", error);
    }
  };

  return (
    <div style={{ border: "1px solid #ddd", padding: "1rem", margin: "1rem 0" }}>
      <h2>OrderStatus</h2>
      <input
        type="text"
        placeholder="Ange ordernummer"
        value={orderNr}
        onChange={(e) => setOrderNr(e.target.value)}
      />
      <button onClick={handleGetStatus}>Hämta status</button>
    </div>
  );
}

export default OrderStatus;