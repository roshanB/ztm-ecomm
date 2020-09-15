import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, isGoogleButton, inverted, ...rest }) => {
  return (
    <button
      className={` ${inverted ? "inverted" : ""} ${
        isGoogleButton ? "google-sign-in" : ""
      } custom-button`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default CustomButton;
