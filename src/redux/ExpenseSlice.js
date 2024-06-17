import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  amount: 0,
  category: {
    food: 0,
    travel: 0,
    utilities: 0,
    others: 0,
  },
};

const expenseSlice = createSlice({
  name: "expenseSlice",
  initialState,
  reducers: {
    incrementExpense: (state, action) => {
     
      const { amount, selectedCategory } = action.payload;
      state.amount += amount;
      state.category[selectedCategory] += amount;
     
    },
  },
});

export const { incrementExpense } = expenseSlice.actions;
export default expenseSlice.reducer;
