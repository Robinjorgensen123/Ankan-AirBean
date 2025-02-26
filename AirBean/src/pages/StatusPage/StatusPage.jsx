import { use } from "react";
import droneImg from "../../assets/Images/drone.png";
import "./StatusPage.scss"


const Status = () => {

    const hadleClick = () => {

    }


    return (
        <article className="status-container">
        <div className="status-card">
            <p>Ordernummer </p>
            <img className="drone-img"  
            src={droneImg}
             alt="drone" 
             />
            <h1>Din beställning <br></br> är påväg!</h1>
            <p>test</p>
            <button className="cool-btn" >Ok, cool!</button>
        </div>
    </article>
    );
};

export default Status;