import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./userSlice";
import cart from "./cartSlice.js";

let stock = createSlice({
  name: "stock",
  initialState: [10, 12, 14],
});

export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    cart: cart.reducer,
  },
});
