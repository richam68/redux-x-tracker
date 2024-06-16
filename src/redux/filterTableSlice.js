import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterStatus: "All",
};

const filterPageSlice = createSlice({
  name: "filterPage",
  initialState,
  reducers: {
    changeFilterStatus: (state, action) => {
      state.filterStatus = action.payload;
    },
  },
});

export const { changeFilterStatus } = filterPageSlice.actions;

export default filterPageSlice.reducer;
