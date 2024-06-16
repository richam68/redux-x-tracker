import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterStatus: "All",
};

const filterPageSlice = createSlice({
  name: "filterPage",
  initialState,
  reducers: {
    changeFilterStatus: (state, action) => {
      console.log("mnas dma dsm a");
      state.filterStatus = action.payload;
    },
  },
});

export const { changeFilterStatus } = filterPageSlice.actions;

export default filterPageSlice.reducer;
