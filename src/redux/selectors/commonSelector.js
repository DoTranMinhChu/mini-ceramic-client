import { createSelector } from "@reduxjs/toolkit";

export const common = (state) => state.common


export const getLoadingSelector = createSelector(common, (common) => {
    return common.loading;
})

