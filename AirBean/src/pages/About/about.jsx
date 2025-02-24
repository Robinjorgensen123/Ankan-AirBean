import React from 'react';
import './about.scss';
import evaImage from '../../assets/images/eva-cortado.jpg';

function About() {
  return (
    <div className="coffee-page">
      <div className="coffee-content">
        <h1>Vårt kaffe</h1>
        
        <section className="coffee-description">
          <p>
            Välkommen till AirBean, där vårt kaffe är så hipster att det har skägg 
            och lyssnar på vinylskivor! Våra kaffebönor är så exklusiva att de har 
            gått på privatskola i Schweiz och mediterar dagligen för optimal smakbalans.
          </p>

          <p>
            Varje kopp bryggs med vatten som har åkt bergochdalbana sju gånger för 
            maximal syresättning. Våra 
            baristas kan göra 
            lattekonst som får Mona Lisa att se ut som ett kladdigt fingeravtryck.
          </p>

          <p>
            Vi har till och med en kaffepsykolog på plats som håller gruppterapisessioner 
            för stressade espressobönor och relationskurser för mocca och grädde som 
            har svårt att blanda sig med andra. Vår senaste innovation är 
            "Mindful Brewing" där varje kaffekopp får en personlig meditation innan 
            servering. Det är därför vårt kaffe alltid är så... balanserat! 
          </p>

          <p>
            Våra kaffekoppar går på yoga varje morgon för att hålla sig flexibla, 
            och våra servetter är handvävda av pensionerade baristas som berättar 
            kaffehistorier medan de väver. Kaffekvarnarna har genomgått en intensivkurs 
            i mindfulness för att kunna mala bönorna med rätt sinnestillstånd, och 
            våra tekannor har ett eget bokningssystem för spa-behandlingar. Vi har 
            till och med installerat en mini-biograf där kaffebönorna får titta på 
            dokumentärer om sin egen förträfflighet innan de mals.
          </p>

        </section>

        <section className="barista-profile">
          <div className="profile-container">
            <img src={evaImage} alt="Eva Cortado" />
            <div className="profile-info">
              <h3>Eva Cortado</h3>
              <p>VD & Grundare</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;