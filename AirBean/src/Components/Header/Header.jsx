import React, { useState } from 'react';
import './Header.scss';

const Header = () => {
            // håller koll på om nenyn är öppen eller stängd
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }


    return (
        <header className="header">
            <section className="header-container">
                <button className='hambuger-button' onClick={toggleMenu}>
                    <img 
                    src="\src\Components\Header\navicon.png" 
                    alt="hamburger-menu" 
                    />
                    </button> 

            </section>
        
        </header>
    )
}

export default Header;