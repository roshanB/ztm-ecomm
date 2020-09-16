import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { createStructuredSelector } from "reselect";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      {/* Tried_how_logo_svg_used */}
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link to="/shop" className="option">
        SHOP
      </Link>
      <Link to="/contact" className="option">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {/* Tried_CartDropdown_is_outside_above_div */}
    {hidden ? null : <CartDropdown />}
  </div>
);

// Tried_state_is_root_reducer_state
// Tried_observe_following_destructuring
// const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => { //Tried_left_side_prop_name
/* Tried_before_createStructuredSelector
const mapStateToProps = (state) => {
  return {
    currentUser: selectCurrentUser(state),
    hidden: selectHidden(state),
  };
};*/
//Tried_after_createStructuredSelector
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectHidden,
});

export default connect(mapStateToProps)(Header); //Tried_Header_passed_to_a_func_returned_by_connect
