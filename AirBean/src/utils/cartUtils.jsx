// Hämta kundvagnsartiklar från localStorage
export const getCartItems = () => {
    const items = localStorage.getItem('kundvagnsArtiklar');
    return items ? JSON.parse(items) : [];
  };
  
  // Lägg till en artikel i kundvagnen
  export const addToCart = (item) => {
    const currentItems = getCartItems();
    const updatedItems = [...currentItems, item];
    localStorage.setItem('kundvagnsArtiklar', JSON.stringify(updatedItems));
    return updatedItems;
  };
  
  // Ta bort en artikel från kundvagnen
  export const removeFromCart = (index) => {
    const currentItems = getCartItems();
    const updatedItems = currentItems.filter((_, i) => i !== index);
    localStorage.setItem('kundvagnsArtiklar', JSON.stringify(updatedItems));
    return updatedItems;
  };
  
  // Töm kundvagnen
  export const clearCart = () => {
    localStorage.removeItem('kundvagnsArtiklar');
    return [];
  };
  
  // Hämta antal artiklar i kundvagnen
  export const getCartCount = () => {
    return getCartItems().length;
  };