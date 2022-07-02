import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../slices/productsSlice'
import userReducer from '../slices/usersSlice'
import cartReducer from '../slices/cartsSlice'
const rootReducer = {
    product: productReducer,
    user: userReducer,
    cart: cartReducer
}
export default configureStore({
    reducer: rootReducer,
})