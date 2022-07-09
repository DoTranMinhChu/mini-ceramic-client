import { createSelector } from "@reduxjs/toolkit";

const carts = (state) => state.cart;


export const getCartsSelector = createSelector(carts, (carts) => {
    return carts;
})

export const getCartByIdSelector = (id) => createSelector(carts, (carts) => {
    console.log('id : ', id)
    const index = carts.findIndex((item) => item.id === id)
    return carts[index];
})

export const getCheckOutByIdSelector = (id, shipping) => createSelector(carts, (carts) => {
    let total = 0
    let subTotal = 0
    let itemNumber = 0
    const index = carts.findIndex((item) => item.id === id)
    const products = carts[index].products;
    for (let i = 0; i < products.length; i++) {
        const product = products[i].product;
        subTotal += product.price * products[i].quantity;
        itemNumber += products[i].quantity;
        total = subTotal + shipping;
    }
    return {
        total: total.toFixed(2),
        subTotal: subTotal.toFixed(2),
        itemNumber: itemNumber,
        shipping: shipping.toFixed(2)
    }
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

