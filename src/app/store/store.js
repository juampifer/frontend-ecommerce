import { configureStore, createSlice } from "@reduxjs/toolkit";
import { productsSlice } from "../(features)/products/slices/productSlice";
import { cartSlice } from "../(features)/cart/slices/cartSlice";

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    cart: cartSlice.reducer,
  },
});