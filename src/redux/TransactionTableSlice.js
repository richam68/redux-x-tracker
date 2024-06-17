import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expenses: [],

};

const transactionTableSlice = createSlice({
  name: "trasanctionTable",
  initialState,
  reducers: {
    addExpense: (state, action) => {
      const { name, category, amount } = action.payload;
      state.expenses.push({ name, category, amount });

    //   //update category total
    //   state.budget.category[category] -= amount;
    },

    deleteExpense: (state, action) => {
      const { name, category, amount } = action.payload;

      const index = state.expenses.findIndex(
        (expense) =>
          expense.name === name &&
          expense.category === category &&
          expense.amount === amount
      );
      console.log("index", index);

      if (index !== -1) {
        state.expenses.splice(index, 1);
        // state.budget.category[category] += amount; // Restore the budget for the category
        // console.log(state.budget.category[category])
      }
    },
  },
});

export const { addExpense, deleteExpense } = transactionTableSlice.actions;

export default transactionTableSlice.reducer;
