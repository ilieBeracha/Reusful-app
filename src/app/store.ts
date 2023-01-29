import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import ProductsSlice from "./ProductsSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice,
        products: ProductsSlice
    }
})