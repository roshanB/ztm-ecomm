import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./cart-dropdown.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartDropdown } from "../../redux/cart/cart.actions";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {/* Tried_type_coercion */}
      {cartItems.length ? (
        cartItems.map((item) => <CartItem key={item.id} item={item} />)
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        dispatch(toggleCartDropdown()); //Tried_dispatch_as_prop
        history.push("/checkout");
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

//Tried_destructured_state.cart.cartItems
// const mapStateToProps = ({ cart: { cartItems } }) => {
const mapStateToProps = (state) => {
  return {
    cartItems: selectCartItems(state),
  };
};

//Tried_accessing_router_props_using_with_router
export default withRouter(connect(mapStateToProps)(CartDropdown));
