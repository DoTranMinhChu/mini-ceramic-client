import { createSlice } from '@reduxjs/toolkit';


export default createSlice({
    name: 'cartList',
    initialState: [
        { product: {_id:1}, quantity: 1 }
    ],
    reducers: {
        addToCart: (state, action) => {
            let index = -1;
            let prevProduct = state.filter((item) => console.log(item.product));

            if (prevProduct.length > 0) {
                index = state.findIndex((item) => item._id === action.payload._id);
                state[index].quantity = state[index].quantity + 1;
            } else {
                state.push({ product: action.payload, quantity: 1 })
            }

        },
    }
})

