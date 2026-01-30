import { products } from "@/constants/products";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products,
};

const productsSlice = createSlice({
  name: "products",
  initialState,

  reducers: {},
});

export default productsSlice.reducer;
