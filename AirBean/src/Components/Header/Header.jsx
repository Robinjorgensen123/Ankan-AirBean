import React, { useState } from 'react';
import './Header.scss';
import navIcon from './navicon.png'; // importerar hamburgermeny bilden

const Header = () => {
            // håller koll på om nenyn är öppen eller stängd
    const [isMenuOpen, setIsMenuOpen] = useState(false);

   
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        console.log('button clicked');
    }


    return (
        <header className="header">
            <section className="header-container">
                <button className='hambuger-button' onClick={toggleMenu}>
                    <img className='hambuger-icon'
                    src={navIcon} 
                    alt="hamburger-menu" 
                    />
                    </button>
                    <section>
                        <button>

                        </button>
                    </section>

            </section>
        
        </header>
    )
}

export default Header;