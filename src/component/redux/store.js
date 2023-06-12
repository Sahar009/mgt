import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../redux/features/Auth/AuthSlice'



export const store = configureStore({
    reducer: {
        auth :authReducer,
    }
})