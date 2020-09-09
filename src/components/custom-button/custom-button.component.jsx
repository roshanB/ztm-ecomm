import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, isGoogleButton, ...rest }) => {
  return (
    <button
      className={`${isGoogleButton ? "google-sign-in" : ""} custom-button`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default CustomButton;
