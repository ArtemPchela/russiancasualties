import { combineReducers, configureStore } from '@reduxjs/toolkit';
import casualtiesSlice from "./features/byCasualtiesSlice";
import byDateCasualtiesSlice from "./features/byDateSlice";

const rootReducer = combineReducers({
    casualties: casualtiesSlice,
    byCasualties: byDateCasualtiesSlice,
});

export const store = configureStore({
    reducer: rootReducer,
});
