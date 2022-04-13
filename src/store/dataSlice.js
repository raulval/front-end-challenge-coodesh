import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "data",
  initialState: {
    data: [],
  },
  reducers: {
    getData(state, { payload }) {
      return { ...state, data: payload };
    },
  },
});

export const { getData } = slice.actions;

export const selectData = (state) => state.user;

export default slice.reducer;
