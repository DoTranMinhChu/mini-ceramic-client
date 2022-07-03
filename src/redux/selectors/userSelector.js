import { createSelector } from "@reduxjs/toolkit";

const getInfomation = (state) => state.user.information


export const getInfomationSelector = createSelector(getInfomation, (getInfomation) => {
    return getInfomation;
})

const getLogged = (state) => state.user.logged


export const getLoggedSelector = createSelector(getLogged, (getLogged) => {
    return getLogged;
})


