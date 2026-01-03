import { createSlice } from "@reduxjs/toolkit";

// ✅ Load wishlist from localStorage
const storedWishlist = localStorage.getItem("wishlist")
  ? JSON.parse(localStorage.getItem("wishlist"))
  : [];

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: storedWishlist,
  reducers: {
    addToWishlist: (state, action) => {
      const exists = state.find(
        (item) => item.id === action.payload.id
      );

      if (!exists) {
        state.push(action.payload);
      }

      localStorage.setItem(
        "wishlist",
        JSON.stringify(state)
      );
    },

    removeFromWishlist: (state, action) => {
      const updatedWishlist = state.filter(
        (item) => item.id !== action.payload
      );

      localStorage.setItem(
        "wishlist",
        JSON.stringify(updatedWishlist)
      );
      return updatedWishlist;
    }
  }
});

export const {
  addToWishlist,
  removeFromWishlist
} = wishlistSlice.actions;

export default wishlistSlice.reducer;
