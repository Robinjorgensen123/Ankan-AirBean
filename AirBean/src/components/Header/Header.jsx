import React, { useState } from "react";
import "./Header.scss";
import navIcon from "./navicon.png"; // Hamburgermenybild
import bagIcon from "./bag.png"; // Kundvagnsbild
import CartOverlay from "../CartOverlay/CartOverlay";

const Header = () => {
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
                {/* Hamburgermeny-knapp */}
                <button className="hamburger-button" onClick={toggleMenu}>
                    <img className="hamburger-icon" src={navIcon} alt="hamburger-menu" />
                </button>

                {/* Kundvagns-knapp */}
                <section>
                    <button className="cart-button" onClick={toggleOverlay}>
                        <img className="cart-icon" src={bagIcon} alt="cart-icon" />
                        <span className="cart-item-count">0{/* hit skickas props från meny */}</span>
                    </button>
                </section>
            </section>

            {/* CartOverlay, som öppnas när cart-button klickas */}
            <CartOverlay isVisible={isCartOverlayVisible} toggleOverlay={toggleOverlay} />
        </header>
    );
};

export default Header;

