import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Importera useNavigate
import { getOrderStatus } from '../../components/Api/apiService';
import droneImg from "../../assets/Images/drone.png";
import "./Status.scss";

const Status = () => {

  const [orderStatus, setOderStatus] = useState(null) // lagra status från APIet
  const { orderNr } = useParams() // UseParam anv för att hämta URL-Parametrar i en komponent
  const navigate = useNavigate(); // React hook, för att kunna navigera till meny sidan


  //useEffet för att hantera hämtningen av ordernr samt ETA("leveranstiden") från apiet när komponenten laddas
  
  useEffect(() => {
    const fetchOrderStatus = async () => {
      try {
        const statusData = await getOrderStatus(orderNr)
        setOderStatus(statusData)
      } catch (err) {
        setError("cannot get orderstatus. Please try again later")
      } finally {
        setLoading(false)
      }
    }

    if (orderNr) {
      fetchOrderStatus()
    }
  }, [orderNr])

  //hanterar eta parametern "tiden för leverens" som hämtas ifrån API:t
  //om värdet är 0 så returneras meddelande att leveransen har levererats
  //annars hämtas antal minuter ifrån apiet
  const formatTime = (eta) => {
    if (eta === 0) {
      return "The order has been delivered" // om tiden är 0, visa Leverarad status
    }
    return `${eta} minutes`; // visa tiden i minuter om den ej är 0
  }


  //klickevent för att navigera från statusPage till menuPage
  const handleClick = () => {
  navigate('/menu');  
  };

  return (
    <article className="status-container">
      <div className="status-card">
        <p>Ordernummer:{orderNr}{/*visa ordernummer */} </p>
        <img className="drone-img"  
          src={droneImg} 
          alt="drone" 
        />
        <h1>Din beställning <br /> är påväg!</h1>
        <p>{orderStatus?.eta !== undefined ? formatTime(orderStatus?.eta) : null}</p>
        <button className="cool-btn" onClick={handleClick}>Ok, cool!</button>
      </div>
    </article>
  );
};

export default Status;
