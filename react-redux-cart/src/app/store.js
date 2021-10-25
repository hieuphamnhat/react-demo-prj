import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "../features/cart/cartSlice";
import rootReducer from '../reducers';
import evenoddReducer from '../features/evenodd/evenoddSlice';
const store = configureStore({
    reducer: {
        cart: cartReducer,
        root: rootReducer,
        evenodd: evenoddReducer,
    }
})
export default store