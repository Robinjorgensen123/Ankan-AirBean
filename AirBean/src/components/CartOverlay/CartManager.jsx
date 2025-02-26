
import React, { useState } from "react";
import Header from "../Header/Header";
import CartOverlay from "./CartOverlay";

function CartManager() {

  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const toggleOverlay = () => {
    setIsOverlayOpen((prev) => !prev);
  };

  return (
    <>

      <Header toggleCart={toggleOverlay} />

      <CartOverlay 
        isVisible={isOverlayOpen} 
        toggleOverlay={toggleOverlay}
      />
    </>
  );
}

export default CartManager;