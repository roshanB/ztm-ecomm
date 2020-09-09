import React from "react";
import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...rest }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...rest}></input>
      {label ? (
        // Tried_apply_shrink to label when there is something in input text
        <label
          className={`form-input-label ${
            rest.value.length > 0 ? "shrink" : ""
          }`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
