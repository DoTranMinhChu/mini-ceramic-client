import { createSelector } from "@reduxjs/toolkit";

const carts = (state) => state.cart;


export const getCartsSelector = createSelector(carts, (carts) => {
    return carts;
})

export const getTotalProduct = createSelector(carts, (carts) => {
    const size = carts.reduce((preValue, cart) => {
        return preValue + cart.products.length
    }, 0)
    return size;
})


export const getTotalProductQuantity = createSelector(carts, (carts) => {
    const size = carts.reduce((preValue, cart) => {
        const totalProduct = cart.products.reduce((preValue, product) => {
            return preValue + product.quantity;
        }, 0)
        return preValue + totalProduct;
    }, 0)
    return size;
})

