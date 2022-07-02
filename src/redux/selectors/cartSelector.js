import { createSelector } from "@reduxjs/toolkit";

export const cartList = (state) => state.cart


export const getCartsSelector = createSelector(cartList, (cartList) => {
    return cartList;
})

