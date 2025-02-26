import { use } from "react";
import droneImg from "../../assets/Images/drone.png";
import { useEffect } from "react";
import { useState } from "react";


const Status = () => {


    return (
        <div>
            <p></p>
            <img className="drone-img"  
            src={droneImg}
             alt="drone" 
             />
            <h1>Din beställning är påväg!</h1>
            <p></p>
            <button>Ok,cool!</button>
        </div>
    );
};

export default Status;