import { configureStore } from '@reduxjs/toolkit';
import landingPageSlice from "./redux/slice/landingPageSlice";


const store = configureStore({
    reducer: {
        landingPage: landingPageSlice
    }
});

export default store;