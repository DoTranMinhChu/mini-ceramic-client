import { createSelector } from "@reduxjs/toolkit";

export const ordersList = (state) => state.order


export const getOrdersSelector = createSelector(ordersList, (ordersList) => {
    return ordersList;
})

