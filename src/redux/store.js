import { configureStore } from '@reduxjs/toolkit';
import landingPageSlice from "./landingPageSlice";
import filterTableSlice from './filterTableSlice';

const store = configureStore({
    reducer: {
        landingPage: landingPageSlice,
        filterPage: filterTableSlice
    }
});

export default store;