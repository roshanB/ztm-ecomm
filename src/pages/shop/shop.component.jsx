import React from "react";
import { Route } from "react-router-dom";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      {/* Tried_exact_required_below_as_collectionoverview was reender for /shop/hats too
          and for that we are rendering Category
          
       */}
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      {/* Tried_nested_routes_following routes are sub routes of /shop, hence in ShopPage */}
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};
export default ShopPage;
