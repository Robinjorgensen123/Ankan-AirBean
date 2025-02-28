import React, { useState, useEffect } from 'react';
import './Menu.scss';
import { getKaffemeny } from '../../components/Api/apiService';
import Header from '../../components/Header/Header';
import plusIcon from '../../assets/Images/+.png'; 
import Footer from '../../components/Footer/Footer';
import CartOverlay from '../../components/CartOverlay/CartOverlay';

function Menu() {
  const [menuData, setMenuData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [kundvagnsArtiklar, setKundvagnsArtiklar] = useState([]);

  const [isCartOverlayVisible, setIsCartOverlayVisible] = useState(false);
  
  const toggleOverlay = () => {
    setIsCartOverlayVisible(!isCartOverlayVisible);
  };

  useEffect(() => {
    const savedCart = localStorage.getItem('kundvagn');
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      console.log("Varukorg hämtad från localStorage:", parsedCart); // Kontrollera vad som hämtas
      setKundvagnsArtiklar(parsedCart); // Återställ varukorgen från localStorage
    } else {
      console.log("Ingen varukorg i localStorage");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("kundvagn", JSON.stringify(kundvagnsArtiklar));
    console.log("Sparar kundvagn i localStorage:", kundvagnsArtiklar);
  }, [kundvagnsArtiklar]);

  const handlePlusClick = (item) => {
    setKundvagnsArtiklar(previous => [...previous, item]);
  };

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        setLoading(true);
        const result = await getKaffemeny();
        console.log('Menydata hämtad', result);
        setMenuData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
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
              ))
            }
          </div>
        </div>
        <Footer />

        {/* 🔹 Skickar alltid uppdaterad kundvagnsArtiklar */}
        <CartOverlay 
          isVisible={isCartOverlayVisible} 
          toggleOverlay={toggleOverlay} 
          kundvagnsArtiklar={kundvagnsArtiklar} 
        />
      </div>
    </>
  );
}

export default Menu;