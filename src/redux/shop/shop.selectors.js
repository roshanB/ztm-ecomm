import { createSelector } from "reselect";
import memoize from "lodash.memoize";

/* Tried_before_normalization
const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};*/

const selectShop = (state) => state.shop;

const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => Object.keys(collections).map((key) => collections[key]) //Tried_convert_object_to_array
);

//Tried_selector_accepting_argument based on which state is queried
// Tried_used_memoize_from_lodash
/* Tried_before_normalization
export const selectCollection = memoize((collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections.find(
      (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    )
  )
);*/

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParam] //Tried_accessing_item_using_data_normalization
  )
);

export default selectCollections;
