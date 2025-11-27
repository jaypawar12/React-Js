import { createSlice } from "@reduxjs/toolkit";
import type { bikeState } from "../../Types/BikeForm";

const initialState: bikeState = {
    bikes: []
};

export const bikeSlice = createSlice({
    name: "bikeRegistion",
    initialState,
    reducers: {
        addNewBike: (state, action) => {
            state.bikes.push(action.payload);
            localStorage.setItem('bikes', JSON.stringify(state.bikes));
        },
        deleteBike: (state, action) => {
            const id = action.payload;
            state.bikes = state.bikes.filter((bike) => bike.id !== id)
            localStorage.setItem('bikes', JSON.stringify(state.bikes));
        },

        fetchBikes: (state) => {
            state.bikes = JSON.parse(localStorage.getItem('bikes') || "[]");
        }
    }
});

export const { addNewBike, deleteBike, fetchBikes } = bikeSlice.actions;
export default bikeSlice.reducer;
