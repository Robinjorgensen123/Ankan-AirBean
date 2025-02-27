import { NavLink } from 'react-router-dom';
import Routing from '../Routing/Routing';
import './Navbar.scss';
import xButton from "../../assets/Images/x.png";
import React, { useState } from 'react';




export function Navbar ({ closeMenu }) {


    const handleCloseMenu = () => {
        closeMenu();
        console.log('button clicked');
    }

    return (
        <nav className="navbar">
          <div className="button-container">
            <button className="close-button" onClick={handleCloseMenu}>
              <img className="x-icon" src={xButton} alt="Close Menu" />
            </button>
          </div>
    
          <div className="links">
            <NavLink to="/menu">Meny</NavLink>
            <NavLink to="/about">Vårt kaffe</NavLink>
            <NavLink to="/status">Orderstatus</NavLink>
          </div>
        </nav>
      );
    }