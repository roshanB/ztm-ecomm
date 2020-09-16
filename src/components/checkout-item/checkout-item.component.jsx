import React from "react";
import "./checkout-item.styles.scss";

//Tried_left_right_destructuring
const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => (
  <div className="checkout-item">
    <div className="image-container">
      <img alt="item" src={imageUrl} />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">{quantity}</span>
    <span className="price">{price}</span>
    <div className="remove-button">&#10005;</div>
    {/* Tried_above_is_utf8_character_known_to_browsers */}
  </div>
);

export default CheckoutItem;
