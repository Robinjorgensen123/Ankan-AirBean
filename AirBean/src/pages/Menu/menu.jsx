import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import { getKaffemeny } from '../../components/Api/apiService';
import { addToCart, getCartItems } from '../../utils/cartUtils'; // Importera nya funktioner
import plusIcon from '../../assets/Images/+.png';
import Footer from '../../components/Footer/Footer';
import './Menu.scss';

function Menu() {
  const [menuData, setMenuData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Hämta kundvagnsartiklar från localStorage
  const [kundvagnsArtiklar, setKundvagnsArtiklar] = useState(getCartItems());

  const handlePlusClick = (item) => {
    console.log('Produkt detaljer:', item);
    
    // Använd addToCart-funktionen och uppdatera state
    const updatedCart = addToCart(item);
    setKundvagnsArtiklar(updatedCart);
  };

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        setLoading(true);
        const result = await getKaffemeny();
        setMenuData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  // Lyssna på localStorage-ändringar
  useEffect(() => {
    const handleStorageChange = () => {
      setKundvagnsArtiklar(getCartItems());
    };

    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  if (loading) return <div>Laddar...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!menuData) return <div>Ingen meny tillgänglig</div>;

  return (
    <>
      <div className="menu-page">
      <Header antalIKundvagn={kundvagnsArtiklar.length} />
        <div className="menu-display">
          <h2>Meny</h2>
          <div className="menu-items">
            {menuData && menuData
              .filter(item => item.title !== "Semla")
              .map((item) => (
                <div key={item.id} className="menu-item">
                  <div className="item-content">
                    <img
                      src={plusIcon}
                      alt="Lägg till"
                      className="plus-icon"
                      onClick={() => handlePlusClick(item)}
                    />
                    <div className="item-info">
                      <div className="item-title-row">
                        <h3>{item.title}</h3>
                        <div className="price">{item.price} kr</div>
                      </div>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <Footer />
      </div>
      
    </>
  );
}

export default Menu;