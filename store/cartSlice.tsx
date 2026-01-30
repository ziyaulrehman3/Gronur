import { cartItemType } from "@/types/product";
import { createSlice } from "@reduxjs/toolkit";
const cart = createSlice({
  name: "cart",
  initialState: {
    item: [] as cartItemType[],
  },
  reducers: {
    addToCart: (state, actions) => {
      const exit = state.item.find((item) => item.id === actions.payload.id);
      console.log("Exit:", exit, actions);

      if (!exit) {
        state.item.push(actions.payload as cartItemType);
      }
    },
    removeFromCart: (state, actions) => {
      const updatedItems = state.item.filter(
        (item: cartItemType) => item != actions.payload,
      );

      state.item = updatedItems;
    },
    updateToCart: (state, actions) => {
      const updateItem = state.item.map((item) => {
        if (item.id == actions.payload.id) {
          return {
            ...item,
            qty: actions.payload.qty,
          };
        }

        return item;
      });
    },
  },
});

export default cart.reducer;

export const { addToCart, updateToCart, removeFromCart } = cart.actions;
