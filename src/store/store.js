import {configureStore} from '@reduxjs/toolkit';
import {carReducer, userReducer} from "./slices";

let store = configureStore({
    reducer: {
        user: userReducer,
        car: carReducer,
    }
});

export {store}