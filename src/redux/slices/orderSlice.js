import { createSlice } from '@reduxjs/toolkit';


const ordersSlice = createSlice({
    name: 'ordersSlice',
    initialState: {
        metaData: null,
        data: null
    }
    ,
    reducers: {
        setOrders: (state, action) => {
            state.data = action.payload.data;
            state.metaData = action.payload.metaData;
        },

    }
})

export default ordersSlice.reducer;
export const { setOrders } = ordersSlice.actions
