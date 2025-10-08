import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
    count: 0
};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
            toast.success(`Count increased to ${state.count}`, {
                position: "top-right",
                autoClose: 1500,
            });
        },
        decrement: (state) => {
            if (state.count > 1) {
                state.count -= 1;
                toast.info(`Count decreased to ${state.count}`, {
                    position: "top-right",
                    autoClose: 1500,
                });
            } else {
                toast.warning("Count cannot go below 1", {
                    position: "top-right",
                    autoClose: 1500,
                });
            }
        },
        reset: (state) => {
            state.count = 0;
            toast.error("Counter reset to 0", {
                position: "top-right",
                autoClose: 1500,
            });
        },
    },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
