import { createSelector } from "@reduxjs/toolkit";

export const productList = (state) => state.productList
export const productsSelector = createSelector(productList, (productList) => {
    console.log('--- check product list : ', productList)
    return productList;
})