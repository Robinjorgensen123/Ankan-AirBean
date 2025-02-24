import { use } from "react";
import droneImg from "../../assets/Images/drone.png";


const status = () => {

useEffect(() => {
    fetch('https://airbean-9pcyw.ondigitalocean.app/api/beans/order/status/12345')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

}, []);



    return (
        <div>
            <p>{orderNr}</p>
            <img className="drone-img"  
            src={droneImg}
             alt="drone" 
             />
            <h1>Din beställning är påväg!</h1>
            <p>{timeLeft}</p>
            <button>Ok,cool!</button>
        </div>
    );
};