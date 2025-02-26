const baseURL = "https://airbean-9pcyw.ondigitalocean.app";

export async function placeOrder(orderData) {
  const response = await fetch(`${baseURL}/api/beans/order`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(orderData)
  });

  if (!response.ok) {
    throw new Error("Något gick fel vid skapandet av ordern.");
  }

  const data = await response.json();
  return data;  // Returnerar objektet från API:t (men visar det inte här).
}

export async function getOrderStatus(orderNr) {
  const response = await fetch(`${baseURL}/api/beans/order/status/${orderNr}`);

  if (!response.ok) {
    throw new Error("Något gick fel vid hämtningen av orderstatus.");
  }

  const data = await response.json();
  return data;  // Returnerar status från API:t (men visar det inte här).
}
