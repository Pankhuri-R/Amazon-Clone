import React from "react";
import "./Subtotal.css";

function Subtotal() {
  return (
    <div className="subtotal">
      <p>Your cart total (2 items):</p>
      <input type="checkbox" name="giftCard" id="giftCard" />
      <label>I have a gift card</label>
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
