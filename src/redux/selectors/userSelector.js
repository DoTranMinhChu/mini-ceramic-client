import {createSelector } from "@reduxjs/toolkit";

export const getUser = (state) => state.user


export const getUserSelector = createSelector(getUser, (getUser) => {
    return getUser;
})

