import React from 'react'
import "./home.scss";
import landing from "../../assets/Images/landing.png";

const home = () => {
  return (
    <div className="home-container">
      <img src={landing} alt="landing" />
    </div>
  )
}

export default home



