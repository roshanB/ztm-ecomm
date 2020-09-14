import React from "react";
import "./cart-icon.styles.scss";
import { connect } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleCartDropdown } from "../../redux/cart/cart.actions";

const CartIcon = ({ toggleCartDropdown }) => {
  return (
    <div className="cart-icon" onClick={toggleCartDropdown}>
      {/* Tried_how_span_is_shown_inside_cart_icon_svg */}
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCartDropdown: () => dispatch(toggleCartDropdown()), //Tried_remember_this_is_a_function
  };
};

export default connect(null, mapDispatchToProps)(CartIcon);
