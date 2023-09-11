import { createSlice } from "@reduxjs/toolkit";

let cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, title: "White and Black", count: 2 },
    { id: 2, title: "Grey Yordan", count: 1 },
  ],
  reducers: {
    addCount: (state, action) => {
      const itemId = action.payload; // Assuming you pass the item's ID as payload
      const itemToUpdate = state.find((item) => item.id === itemId);
      if (itemToUpdate) {
        itemToUpdate.count += 1;
      }
    },
    addCart: (state, action) => {
      const item = action.payload;
      state.push(action.payload);
    },
  },
});

export let { addCount, addCart } = cart.actions;

export default cart;
