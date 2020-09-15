import React from "react";
import "./cart-icon.styles.scss";
import { connect } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleCartDropdown } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

const CartIcon = ({ toggleCartDropdown, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartDropdown}>
      {/* Tried_how_span_is_shown_inside_cart_icon_svg */}
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCartDropdown: () => dispatch(toggleCartDropdown()), //Tried_remember_this_is_a_function
  };
};

const mapStateToProps = (state) => {
  return {
    itemCount: selectCartItemsCount(state), //Tried_output_of_createSelector_takes_state
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
