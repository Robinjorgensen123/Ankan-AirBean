
import { Navbar } from '../Navbar/Navbar';
import React, { useState } from "react";
import "./Header.scss";
import navIcon from "../../assets/Images/navicon.png"; // Hamburgermenybild
import bagIcon from '../../assets/Images/bag.png'; // Kundvagnsbild
import CartOverlay from "../CartOverlay/CartOverlay";

const Header = ({ antalIKundvagn = 0 }) => {
    // State för meny & cart overlay
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCartOverlayVisible, setIsCartOverlayVisible] = useState(false);

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
                <button className='hamburger-button' onClick={toggleMenu}>
                    <img className='hambuger-icon'
                    src={navIcon} 
                    alt="hamburger-menu"
                    />
                    </button>
                    {isMenuOpen && <Navbar closeMenu={() => setIsMenuOpen(false)}/>}
                    <section>
                        <button className='cart-button' onClick={toggleOverlay}>
                        <img className='cart-icon'
                        src={bagIcon}
                        alt="cart-icon"
                        />
                         <span className="cart-item-count">{antalIKundvagn}</span>
                        </button>
                        <CartOverlay isVisible={isCartOverlayVisible} toggleOverlay={toggleOverlay} />
                    </section>

            </section>

            {/* CartOverlay, som öppnas när cart-button klickas */}
            
        </header>
    );
};

export default Header;

