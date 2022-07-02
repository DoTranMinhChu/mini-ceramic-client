import { createSelector } from "@reduxjs/toolkit";

export const productList = (state) => state.product


export const getProductsSelector = createSelector(productList, (productList) => {
    return productList;
})

