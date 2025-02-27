import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importera useNavigate
import droneImg from "../../assets/Images/drone.png";
import "./Status.scss";

const Status = () => {
  const navigate = useNavigate(); // Skapa navigate-funktionen

  const handleClick = () => {
     navigate('/menu');  
  };

  return (
    <article className="status-container">
      <div className="status-card">
        <p>Ordernummer </p>
        <img className="drone-img"  
          src={droneImg} 
          alt="drone" 
        />
        <h1>Din beställning <br /> är påväg!</h1>
        <p>test</p>
        <button className="cool-btn" onClick={handleClick}>Ok, cool!</button>
      </div>
    </article>
  );
};

export default Status;
