import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: '',
  date: '', 
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    create: (state, action) => {
      state.token = action.payload.token;
      state.date = action.payload.date;
    },
  },
});

export const { create } = authSlice.actions;
export default authSlice.reducer;
