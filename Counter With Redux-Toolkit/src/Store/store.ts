import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/Counter/counterSlice";

export const store = configureStore({
    reducer: counterSlice
});

export type RootState = ReturnType<typeof store.getState>