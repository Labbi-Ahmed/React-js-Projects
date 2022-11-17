import "./Checkout.css";
import React from "react";

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
          <h2>The Subtotal will go here</h2>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
