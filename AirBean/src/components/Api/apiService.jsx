const baseURL = "https://airbean-9pcyw.ondigitalocean.app";

//Api för att Posta produkterna skickas till Cart
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

// denna data hanteras i Status.jsx
export async function getOrderStatus(orderNr) {
  const response = await fetch(`${baseURL}/api/beans/order/status/${orderNr}`);

  if (!response.ok) {
    throw new Error("Något gick fel vid hämtningen av orderstatus.");
  }

  const data = await response.json();
  return data;  // Returnerar status från API:t (men visar det inte här).
}


//api för att hämta kaffemenyn
export const getKaffemeny = async () => {
  try {
    const response = await fetch(`${baseURL}/api/beans`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    console.log('Kaffe API array:', data.menu);
    
    return data.menu;
  } catch (error) {
    console.error('Fel vid hämtning av kaffemeny:', error);
    throw error;
  }
};