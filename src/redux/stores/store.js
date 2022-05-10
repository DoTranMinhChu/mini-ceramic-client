import {configureStore} from '@reduxjs/toolkit'
import productsSlice from '../slices/productsSlice'
import cartsSlice from '../slices/cartsSlice'

export default configureStore({
    reducer:{
        productList: productsSlice.reducer,
        cartList: cartsSlice.reducer
    }
})