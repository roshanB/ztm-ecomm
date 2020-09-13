import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";

const Header = ({ currentUser }) => (
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
    </div>
  </div>
);

// Tried_state_is_root_reducer_state
const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser, //Tried_left_side_prop_name
  };
};

export default connect(mapStateToProps)(Header); //Tried_Header_passed_to_a_func_returned_by_connect
