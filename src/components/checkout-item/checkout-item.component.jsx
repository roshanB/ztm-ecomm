import React from "react";
import { connect } from "react-redux";
import "./checkout-item.styles.scss";
import {
  clearItemFromCart,
  removeItem,
  addItem,
} from "../../redux/cart/cart.actions";

//Tried_left_right_destructuring
const CheckoutItem = ({ cartItem, clearItemFromCart, removeItem, addItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => clearItemFromCart(cartItem)}
      >
        &#10005;
      </div>
      {/* Tried_above_is_utf8_character_known_to_browsers */}
    </div>
  );
};
// Tried_mapDispatchToProps_can_also_be_written
const mapDispatchToProps = (dispatch) => {
  return {
    clearItemFromCart: (cartItem) => dispatch(clearItemFromCart(cartItem)),
    removeItem: (cartItem) => dispatch(removeItem(cartItem)),
    addItem: (cartItem) => dispatch(addItem(cartItem)),
  };
};
export default connect(null, mapDispatchToProps)(CheckoutItem);
