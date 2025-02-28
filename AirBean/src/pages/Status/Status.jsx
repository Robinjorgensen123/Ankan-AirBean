 import React, { useState, useEffect } from 'react';
 import { useParams, useNavigate } from 'react-router-dom';
 import droneImg from "../../assets/Images/drone.png";
 import "./Status.scss";
 
 const Status = () => {
 
   const [etaTime, setEtaTime] = useState(null);  
   const [loading, setLoading] = useState(true);  
   const [error, setError] = useState(null);  
   const { orderNr } = useParams();  
   const navigate = useNavigate();  
 
   // useEffect för att hämta leveranstid från localStorage och beräkna minuter kvar
   useEffect(() => {
     const deliveryTimeString = localStorage.getItem("deliveryTime"); // Hämta leveranstid från localStorage
     console.log("deliveryTime från localStorage:", deliveryTimeString);  // Debugging: skriv ut vad vi får
 
     if (deliveryTimeString) {
       const deliveryDate = new Date(deliveryTimeString);  // Konvertera till ett Date-objekt
       const now = new Date();  // Nuvarande tid
 
       // Beräkna skillnaden i minuter
       const timeDiff = Math.floor((deliveryDate - now) / 60000);  // Skillnad i minuter
       setEtaTime(timeDiff);  // Sätt tiden i state
       setLoading(false);  // Stäng av loading efter att datan har hämtats
     } else {
       setError("Ingen leveranstid hittades i localStorage.");
       setLoading(false);  // Stäng av loading även om inget finns
     }
   }, []);
 
   // Funktion för att formatera och visa ETA-tiden
   const formatTime = (eta) => {
     if (eta <= 0) {
       return "Beställningen har levererats!";
     }
     return `${eta} minuter kvar`;  // Visa nedräkningen om tiden är större än 0
   };
 
   // Funktion för att hantera när man klickar på "Ok, cool!" och navigerar tillbaka till menyn
   const handleClick = () => {
     navigate('/menu');
   };
 
   // Visa laddningsindikator eller felmeddelande om något går fel
   if (loading) {
     return <p>Laddar...</p>;
   }
 
   // Hantera fel (om vi inte får något ordernummer eller om API-anropet misslyckas)
   if (error) {
     return <p>{error}</p>;
   }
 
   return (
     <article className="status-container">
       <div className="status-card">
         <p>Ordernummer: {orderNr}</p>
         <img className="drone-img" src={droneImg} alt="drone" />
         <h1>Din beställning är på väg!</h1>
         <p>{etaTime !== null ? formatTime(etaTime) : "Ingen ETA tillgänglig"}</p>
         <button className="cool-btn" onClick={handleClick}>Ok, cool!</button>
       </div>
     </article>
   );
 };
 
 export default Status;