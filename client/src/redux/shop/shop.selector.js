import { createSelector } from "reselect"

const selectShop = (state) => state.shop

const selectShopCollections = createSelector(
    [selectShop],
    (shop) => shop.collections
)

export const selectShopCollectionsForPreview = createSelector(
    [selectShopCollections] ,
    (collections) => collections ? Object.keys(collections).map((keys) => collections[keys]) : []
)

export const selectShopCollection = (collectionUrlParam) => 
    createSelector(
        [selectShopCollections], 
        (collections) => collections ? collections[collectionUrlParam] : null
    )
 
export const isCollectionsFetching = createSelector(
    [selectShop] ,
    (shop) => shop.isFetching
)

export const isCollectionsLoaded = createSelector(
    [selectShop] ,
    (shop) => !!shop.collections
)

export default selectShopCollectionsForPreview