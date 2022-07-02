import { createSlice } from '@reduxjs/toolkit';


const productsSlice = createSlice({
    name: 'productsSlice',
    initialState: {
        metaData: null,
        data: null
    }
    ,
    reducers: {
        setProducts: (state, action) => {
            state.data = action.payload.data;
            state.metaData = action.payload.metaData;
        },

    }
})

export default productsSlice.reducer;
export const { setProducts } = productsSlice.actions
