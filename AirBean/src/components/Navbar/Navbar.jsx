import { NavLink } from 'react-router-dom';
import Routing from '../Routing/Routing';
/* import './Navbar.scss'; */
import xButton from "../../assets/Images/x.png";
import React, { useState } from 'react';




export function Navbar ({closeMenu, setCloseMenu}) {


    const handleCloseMenu = () => {
        setCloseMenu(false);
        console.log('button clicked');
    }

    return (
        
        <nav className={`navbar ${closeMenu ? 'open' : ''}`}>
            <Routing/>
            <div className='button-container'>
                    <button className='close-button'>
                        <img className='x-icon' onClick={handleCloseMenu} src={xButton} alt="X"/>
                    </button>
                </div>
            <div className="links">
                <NavLink to="/" exact onClick={(e) => e.preventDefault()}>Home</NavLink>
                <NavLink to="/about" onClick={(e) => e.preventDefault()}>About</NavLink>
               
            </div>
        </nav>
    )
}