import { configureStore } from "@reduxjs/toolkit";
import myColorSlice from "./colorSlice";

export const myStore = configureStore({
    reducer: {
        color: myColorSlice,
    },
});