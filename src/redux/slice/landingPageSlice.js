import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  budget: {
    name: "",
    totalBudget: "",
    // categories: [
    //   { category: "food", amount: '' },
    //   { category: "travel" , amount: ''},
    //   { category: "utilities", amount: '' },
    //   { category: "others", amount: '' },
    // ],
    category: {
      food: 0,
      travel: 0,
      utilities: 0,
      others: 0,
    },
  }, 
};

const landingPageSlice = createSlice({
  name: "landingPage",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.budget.name = action.payload.name;
    },

    setBudget: (state, action) => {
      state.budget.totalBudget = action.payload.totalBudget;
    },

    setCategory: (state, action) => {
      const { category, amount } = action.payload;
      state.budget.category[category] = amount || 0;
    },
  },
});

export const { setName, setBudget, setCategory } = landingPageSlice.actions;
export default landingPageSlice.reducer;
