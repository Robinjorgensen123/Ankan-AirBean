import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Importera useNavigate
import { getOrderStatus } from '../../components/Api/apiService';
import droneImg from "../../assets/Images/drone.png";
import "./Status.scss";

const Status = () => {

  const [orderStatus, setOderStatus] = useState(null) // lagra status från APIet
  const { orderNr } = useParams()
  const navigate = useNavigate(); // Skapa navigate-funktionen

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

  
  const formatTime = (eta) => {
    if (eta === 0) {
      return "The order has been delivered" // om tiden är 0, visa Leverarad status
    }
    return `${eta} minutes`; // visa tiden i minuter om den ej är 0
  }

  const handleClick = () => {
  navigate('/menu');  /// När knappen trycks, navigera till /about
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
        <p>{formatTime(orderStatus?.eta)}</p>
        <button className="cool-btn" onClick={handleClick}>Ok, cool!</button>
      </div>
    </article>
  );
};

export default Status;
