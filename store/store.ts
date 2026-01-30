import cart from "@/store/cartSlice";
import products from "@/store/productsSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    products,
    cart,
  },
});
