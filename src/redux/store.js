import { configureStore } from '@reduxjs/toolkit';
import budgetSlice from "./BudgetSlice";
import transactionTableSlice from "./TransactionTableSlice"
import filterTableSlice from './filterTableSlice';

const store = configureStore({
    reducer: {
        budgetPage: budgetSlice,
        trasanctionTable: transactionTableSlice,
        filterPage: filterTableSlice
    }
});

export default store;