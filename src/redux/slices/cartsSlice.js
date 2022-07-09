import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';


const cartsSlice = createSlice({
    name: 'cartList',
    initialState: [
        /*
        {   
            id:...
            shop:....,
            products:[
                {
                    product:...,
                    quantity:...
                },
                {
                    product:...,
                    quantity:...
                }
            ]
        },
        {
            id:...
            shop:....,
            products:[
                {
                    product:...,
                    quantity:...
                },
                {
                    product:...,
                    quantity:...
                }
            ]
        }
        */

    ]
    ,
    reducers: {
        addToCart: (state, action) => {
            const { payload } = action;
            const product = payload;
            const shop = payload.shop;
            const indexShop = state.findIndex((item) => item.shop.id === shop.id);
            if (indexShop < 0) {
                state.push({
                    id: uuidv4(),
                    shop: shop,
                    products: [
                        {
                            product: product,
                            quantity: 1
                        }
                    ]
                })
                return;
            }
            const listProductInShop = state[indexShop].products;
            const indexProductInShop = listProductInShop.findIndex((item) => item.product.id === product.id);
            if (indexProductInShop < 0) {
                state[indexShop].products.push({
                    product: product,
                    quantity: 1
                })
                return;
            }
            state[indexShop].products[indexProductInShop].quantity += 1;


        },
        removeToCart: (state, action) => {
            const product = action.payload;
            const shop = product.shop;
            const indexShop = state.findIndex((item) => item.shop.id === shop.id);
            const listProductInShop = state[indexShop].products;
            const indexProductInShop = listProductInShop.findIndex((item) => item.product.id === product.id);
            state[indexShop].products.splice(indexProductInShop, 1);
            if (state[indexShop].products.length <= 0) {
                state.splice(indexShop, 1);
            }

        },
        changeQuantityProductInCart: (state, action) => {
            const { product, change } = action.payload;
            const shop = product.shop;
            const indexShop = state.findIndex((item) => item.shop.id === shop.id);
            const listProductInShop = state[indexShop].products;
            const indexProductInShop = listProductInShop.findIndex((item) => item.product.id === product.id);
            state[indexShop].products[indexProductInShop].quantity += change;
            if (state[indexShop].products[indexProductInShop].quantity <= 0) {
                state[indexShop].products.splice(indexProductInShop, 1);
            }
            if (state[indexShop].products.length <= 0) {
                state.splice(indexShop, 1);
            }

        },
        removeCartById: (state, action) => {
            const { id } = action.payload;
            console.log('id : ',id)
            const index = state.findIndex((item) => item.id === id);
            console.log('index : ',index)
            state.splice(index,1);
        }

    }
})

export default cartsSlice.reducer;
export const { addToCart, removeToCart, changeQuantityProductInCart , removeCartById} = cartsSlice.actions

