import React from "react";
import "./BasketItem.css";

function BasketItem() {
  return (
    <div className="basketItem">
      <div className="basket__left">
        <img
          className="basket__image"
          src="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
          alt=""
        />
      </div>
      <div className="basket__right">
        <h3>
          The Lean Startup : How Constant Innovation Creates Radically
          Successful Businesses PaperBack{" "}
        </h3>
        <p className="item__price">
          <small>$</small>
          <strong>11.96</strong>
        </p>
        <div className="rating">
          <p>⭐</p>
          <p>⭐</p>
          <p>⭐</p>
          <p>⭐</p>
        </div>
        <button className="remove__btn">Remove From Basket</button>
      </div>
    </div>
  );
}

export default BasketItem;
