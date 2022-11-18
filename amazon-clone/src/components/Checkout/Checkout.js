import "./Checkout.css";
import React from "react";
import Subtotal from "./Subtotal/Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src="Images/banner.jpg" />
        <div>
          <h2 className="checkout__title">Your shopping Basket</h2>
        </div>
        {/* BasketItem */}
      </div>
      <div className="checkout__right">
        <div className="subTotal">
          <Subtotal />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
