import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

// Enters integer value of COLLECTION_ID_MAP outputs corresponding collection
// <memoize> checks if (collectionUrlParam) has changed, if not returns same value as the previous run
export const selectCollection = memoize((collectionUrlParam) =>
  createSelector(
    [selectCollections],
    (collection) => collection[collectionUrlParam]
  )
);
