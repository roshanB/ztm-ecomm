import React from "react";
import "./collection-preview.styles.scss";
import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title}</h1>
    <div className="preview">
      {/* Tried_take_first_4_items_in_array */}
      {items
        .filter((item, idx) => idx < 4)
        // Tried_commented_as_we_need_whole_item
        // .map(({ id, ...rest }) => (
        //   <CollectionItem key={id} {...rest} />
        // ))
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
