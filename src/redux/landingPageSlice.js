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
   expenses: [] // Array to store all expenses
  }, 
};

const landingPageSlice = createSlice({
  name: "landingPage",
  initialState,
  reducers: {
    setUserName: (state, action) => {
      state.budget.name = action.payload;
    },

    setBudget: (state, action) => {
      state.budget.totalBudget = action.payload;
    },

    setCategories: (state, action) => {
      // console.log(action.payload)
      const { food, travel, utilities, others } = action.payload;
      state.budget.category.food = food;
      state.budget.category.travel = travel;
      state.budget.category.utilities = utilities;
      state.budget.category.others = others;

      //console.log("Updated state:", state.budget.category);
    },

    backButton: (state, action) => {
      const { name, totalBudget, category } = action.payload;
      state.budget.name = name;
      state.budget.totalBudget = totalBudget;
      state.budget.category = category;
    },

    addExpense: (state, action) => {
      const {name, category, amount} = action.payload;
      state.budget.expenses.push({name, category, amount})

      // //update category total
      state.budget.category[category] -= parseFloat(amount)
    },

    deleteExpense: (state, action) => {
      const {name, category, amount} = action.payload
      
      const index = state.budget.expenses.findIndex((expense) => expense.name === name && 
      expense.category === category && expense.amount === amount);
      console.log("index", index);

      if(index !== -1){
        state.budget.expenses.splice(index, 1);
        state.budget.category[category] += parseFloat(amount); // Restore the budget for the category
        // console.log(state.budget.category[category])
      }
    },

    // filterExpenseData: (state, action) => {

    // }
  },
});

export const { setUserName, setBudget, setCategories, addExpense, deleteExpense, backButton } = landingPageSlice.actions;
export default landingPageSlice.reducer;
