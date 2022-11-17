import React from "react";
import "./Product.css";

function Product({ id, title, price, image, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p className="info__title">{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={id}>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="product image" />

      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
