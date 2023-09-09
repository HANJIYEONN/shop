import { configureStore, createSlice } from "@reduxjs/toolkit";

//useState와 비슷
let user = createSlice({
  name: "user",
  initialState: "kim",
  reducers : {
    changeName(state){
      return 'john ' + state
    }
  }
});

export let {changeName} = user.actions

let stock = createSlice({
  name: "stock",
  initialState: [10, 12, 14],
});

let cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    addCount: (state, action) => {
      const itemId = action.payload; // Assuming you pass the item's ID as payload
      const itemToUpdate = state.find((item) => item.id === itemId);
      if (itemToUpdate) {
        itemToUpdate.count += 1;
      }
    },
  },
});

export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    cart: cart.reducer,
  },
});
