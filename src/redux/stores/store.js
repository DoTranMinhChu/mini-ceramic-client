import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../slices/productsSlice'
import userReducer from '../slices/usersSlice'
import cartReducer from '../slices/cartsSlice'
import commonReducer from '../slices/commonSlice'
const rootReducer = {
    product: productReducer,
    user: userReducer,
    cart: cartReducer,
    common: commonReducer
}
export default configureStore({
    reducer: rootReducer,
})