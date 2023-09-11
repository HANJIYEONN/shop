import { createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: { name: "kim", age: 17 },
  reducers: {
    changeName(state, action) {
      state.name = "john";
    },
    changeAge(state, action) {
      state.age += 1;
    },
  },
});

export let { changeName, changeAge } = user.actions;

export default user;
