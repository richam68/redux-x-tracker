import { configureStore } from '@reduxjs/toolkit';
import budgetSlice from "./BudgetSlice";
import transactionTableSlice from "./TransactionTableSlice"
import filterTableSlice from './filterTableSlice';
import expenseSlice from "./ExpenseSlice"

const store = configureStore({
    reducer: {
        budgetPage: budgetSlice,
        trasanctionTable: transactionTableSlice,
        filterPage: filterTableSlice,
        expenseSlice : expenseSlice
    }
});

export default store;