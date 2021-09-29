import React from "react";
import { Link } from "react-router-dom";
import BasketItem from "./BasketItem";
import "./Payment.css";
import { useStateValue } from "./StateProvider";

function Payment() {
  const [{ user, basket }, dispatch] = useStateValue();
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout(<Link to="/checkout">{basket?.length}</Link>items )
        </h1>
        <div className="payment__section">
          {/* Delivery address */}
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>
        <div className="payment__section">
          {/* Review items */}
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((basketItem) => (
              <BasketItem
                id={basketItem.id}
                title={basketItem.title}
                image={basketItem.image}
                price={basketItem.price}
                rating={basketItem.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment__section">
          {/* Payment method */}
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details"></div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
