import { createSlice } from '@reduxjs/toolkit';


const cartsSlice = createSlice({
    name: 'cartList',
    initialState: [
        // {product:... , quantity: ...}
    ]
    ,
    reducers: {
        addToCart: (state, action) => {
            let index = -1;
            const newProduct = action.payload;
            let prevProduct = state.filter((item) => item.product.id === newProduct.id);

            if (prevProduct.length > 0) {
                index = state.findIndex((item) => item.product.id === newProduct.id);
                state[index].quantity = state[index].quantity + 1;
            } else {
                state.push({ product: action.payload, quantity: 1 })
            }

        },
    }
})

export default cartsSlice.reducer;
export const { addToCart } = cartsSlice.actions

