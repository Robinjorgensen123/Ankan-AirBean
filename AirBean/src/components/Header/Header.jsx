import React, { useState } from 'react';
import './Header.scss';
import navIcon from './navicon.png'; // importerar hamburgermeny bilden
import bagIcon from "./bag.png"; // importerar kundvagns bilden
import { Navbar } from '../Navbar/Navbar';

const Header = () => {
            // håller koll på om nenyn är öppen eller stängd
    const [isMenuOpen, setIsMenuOpen] = useState(false);
            // håller koll på hur många items som finns i kundvagnen
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        console.log('button clicked');
    }
        //kollar om cartItems är större än 0 och lägger till 1


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
                        <button className='cart-button'>
                        <img className='cart-icon'
                        src={bagIcon}
                        alt="cart-icon"
                        />
                         <span className='cart-item-count'>0{/*hit skickas props från meny sidan */}</span>
                        </button>
                        
                    </section>

            </section>
        
        </header>
    )
}

export default Header;