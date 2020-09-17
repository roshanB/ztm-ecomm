import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import { connect } from "react-redux";
import "./directory.component.scss";
import { createStructuredSelector } from "reselect";
import selectSections from "../../redux/directory/directory.selectors";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {/* Tried_destructured_in_map */}
      {sections.map(({ id, ...rest }) => (
        // <MenuItem key={id} imageUrl={imageUrl} title={title} size={size} />
        <MenuItem key={id} {...rest} />
      ))}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  sections: selectSections,
});
export default connect(mapStateToProps)(Directory);
