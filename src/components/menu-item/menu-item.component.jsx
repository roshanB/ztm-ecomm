import React from "react";
import "./menu-item.component.scss";
import { withRouter } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
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
// Tried_withRouter
export default withRouter(MenuItem);
