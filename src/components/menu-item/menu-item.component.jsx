import React from "react";
import "./menu-item.component.scss";

const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div className={`${size} menu-item`}>
      {/* Tried_hover_effect note that below two divs are siblings */}
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      {/* Tried_style_on_div - imagUrl not directly assigned, conditional class name */}
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="sub-title">SHOP</span>
      </div>
    </div>
  );
};

export default MenuItem;
