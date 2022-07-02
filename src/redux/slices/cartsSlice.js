import { createSlice } from '@reduxjs/toolkit';


const cartsSlice = createSlice({
    name: 'cartList',
    initialState: [
        // {product:... , quantity: ...}
    ]
    ,
    reducers: {
        addToCart: (state, action) => {
            const newProduct = action.payload;
            const prevProduct = state.filter((item) => item.product.id === newProduct.id);
            if (prevProduct.length > 0) {
                const index = state.findIndex((item) => item.product.id === newProduct.id);
                state[index].quantity = state[index].quantity + 1;
            } else {
                state.push({ product: action.payload, quantity: 1 })
            }

        },
        removeToCart: (state, action) => {
            const removeProduct = action.payload;
            const index = state.findIndex((item) => item.product.id === removeProduct.id);
            state.splice(index, 1);
        },
        changeQuantityProductInCart: (state, action) => {
            const { product, change } = action.payload;
            const index = state.findIndex((item) => item.product.id === product.id);
            state[index].quantity += change;
            if (state[index].quantity <= 0) state.splice(index, 1);
        }
    }
})

export default cartsSlice.reducer;
export const { addToCart, removeToCart, changeQuantityProductInCart } = cartsSlice.actions

