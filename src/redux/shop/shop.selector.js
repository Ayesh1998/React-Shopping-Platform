import {createSelector} from 'reselect';

const selectShop = state => state.shop;

export const selectCollection = createSelector(
    [selectShop],
    shop => shop.collection
)

export const selsctCollection =(collectionUrlParam) => createSelector(
    [selectCollection],
    collection => collection[collectionUrlParam]
)

export const selectCollectionForPreview = createSelector(
    [selectCollection],
    collection => Object.keys(collection).map(key => collection[key])
);