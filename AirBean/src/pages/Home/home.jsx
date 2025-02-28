
import React, { useState } from 'react';
import "./home.scss";
import landing from "../../assets/images/landing.png";
import { Navbar } from "../../components/Navbar/Navbar";

const Home = () => {
  // Skapa en state för att kontrollera om navbaren är öppen
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  // Funktion för att toggla navbarens öppning
  const toggleNavbar = (e) => {
    // Om användaren klickar på navbaren, stoppa händelsen så navbaren inte stängs
    if (e.target.closest('.navbar')) {
      return;  // Ingenting görs om man klickar på navbaren
    }

    // Om användaren klickar utanför navbaren, toggla navbarens synlighet
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <div className="home-container" onClick={toggleNavbar}>
      <img src={landing} alt="landing" className='home-image' />

      {/* Skicka ner en funktion för att stänga navbaren */}
      {isNavbarOpen && <Navbar closeMenu={() => setIsNavbarOpen(false)} />}
    </div>
  );
};

export default Home;




