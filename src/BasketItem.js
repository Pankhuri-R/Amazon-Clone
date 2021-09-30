import React from "react";
import "./BasketItem.css";
import { useStateValue } from "./StateProvider";

function BasketItem({ id, title, image, price, rating, hidden }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="basketItem">
      <div className="basket__left">
        <img className="basket__image" src={image} alt="" />
      </div>
      <div className="basket__right">
        <h3>{title}</h3>
        <p className="item__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        {!hidden && (
          <button onClick={removeFromBasket} className="remove__btn">
            Remove From Basket
          </button>
        )}
      </div>
    </div>
  );
}

export default BasketItem;
