import { createSelector } from "@reduxjs/toolkit";

export const productList = (state) => state.productList
export const cartList = (state) => state.cartList
export const productsSelector = createSelector(productList, (productList) => {
    return productList;
})


export const cartsSelector = createSelector(cartList, (cartList) => {
    return cartList;
})

