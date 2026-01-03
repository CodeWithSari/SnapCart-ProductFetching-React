import { createSlice } from "@reduxjs/toolkit";

// Load cart from localStorage
const storedCart = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const cartSlice = createSlice({
  name: "cart",
  initialState: storedCart,
  reducers: {
    addToCart: (state, action) => {
      const exists = state.find(
        (item) => item.id === action.payload.id
      );

      if (!exists) {
        state.push(action.payload);
      }

      localStorage.setItem("cart", JSON.stringify(state));
    },

    removeFromCart: (state, action) => {
      const updatedCart = state.filter(
        (item) => item.id !== action.payload
      );

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    },

    clearCart: () => {
      localStorage.removeItem("cart");
      return [];
    }
  }
});

export const {
  addToCart,
  removeFromCart,
  clearCart
} = cartSlice.actions;

export default cartSlice.reducer;
