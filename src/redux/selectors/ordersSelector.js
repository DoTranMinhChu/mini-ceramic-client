import { createSelector } from "@reduxjs/toolkit";

export const ordersList = (state) => state.order


export const getOrdersSelector = createSelector(ordersList, (ordersList) => {
    return ordersList;
})


export const getOrderByIDSelector = (id) => createSelector(ordersList, (ordersList) => {
    if(!ordersList.data) return null;
    const index = ordersList.data.findIndex((item) => item.id === id)
    return (ordersList.data)[index];
})
