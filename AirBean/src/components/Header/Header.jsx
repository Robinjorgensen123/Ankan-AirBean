import { Navbar } from '../Navbar/Navbar';
import React, { useState, useEffect } from 'react'; // Lägg till useEffect
import navIcon from '../../assets/Images/navicon.png'; // Hamburgermenybild
import bagIcon from '../../assets/Images/bag.png'; // Kundvagnsbild
import CartOverlay from '../CartOverlay/CartOverlay';
import './Header.scss';

const Header = ({ antalIKundvagn = 0 }) => {
  // State för meny & cart overlay
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOverlayVisible, setIsCartOverlayVisible] = useState(false);
  
  // Ny state för att hantera kundvagnsantalet från localStorage
  const [storedAntalIKundvagn, setStoredAntalIKundvagn] = useState(() => {
    // Hämta antal från localStorage eller använd prop-värdet
    const storedItems = localStorage.getItem('kundvagnsArtiklar');
    if (storedItems) {
      return JSON.parse(storedItems).length;
    }
    return antalIKundvagn;
  });

  // Uppdatera storedAntalIKundvagn när antalIKundvagn props ändras
  useEffect(() => {
    if (antalIKundvagn > 0) {
      setStoredAntalIKundvagn(antalIKundvagn);
    }
  }, [antalIKundvagn]);

  // Lyssna på localStorage-ändringar
  useEffect(() => {
    const handleStorageChange = () => {
      const storedItems = localStorage.getItem('kundvagnsArtiklar');
      if (storedItems) {
        setStoredAntalIKundvagn(JSON.parse(storedItems).length);
      } else {
        setStoredAntalIKundvagn(0);
      }
    };

    // Lyssna på storage-event (för ändringar mellan flikar)
    window.addEventListener('storage', handleStorageChange);
    
    // Städa upp event listener när komponenten avmonteras
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  // Funktion för att öppna/stänga menyn
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Funktion för att öppna/stänga cart overlay
  const toggleOverlay = () => {
    setIsCartOverlayVisible(!isCartOverlayVisible);
  };

  return (
    <header className="header">
      <section className="header-container">
        <button className="hamburger-button" onClick={toggleMenu}>
          <img 
            className="hamburger-icon"
            src={navIcon}
            alt="hamburger-menu"
          />
        </button>
        
        {isMenuOpen && <Navbar closeMenu={() => setIsMenuOpen(false)}/>}
        
        <section>
          <button className="cart-button" onClick={toggleOverlay}>
            <img className="cart-icon"
              src={bagIcon}
              alt="cart-icon"
            />
            {/* Använd storedAntalIKundvagn istället för antalIKundvagn */}
            {storedAntalIKundvagn > 0 && (
              <span className="cart-item-count">{storedAntalIKundvagn}</span>
            )}
          </button>
          <CartOverlay isVisible={isCartOverlayVisible} toggleOverlay={toggleOverlay} setStoredAntalIKundvagn={setStoredAntalIKundvagn} />
        </section>
      </section>
    </header>
  );
};

export default Header;