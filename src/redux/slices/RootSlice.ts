import { createSlice } from "@reduxjs/toolkit"

const rootSlice = createSlice({
    name: "root",
    initialState: {
        date: "Date",
        distance: "Distance",
        heart_rate: "Heart Rate",
        pace: "Pace",
    },
    reducers: {
        // action is submitted elsewhere - written to state.name
        chooseDate: (state, action) => { state.date = action.payload }, 
        chooseDistance: (state, action) => { state.distance = action.payload },
        chooseHeart: (state, action) => { state.heart_rate = action.payload },
        choosePace: (state, action) => { state.pace = action.payload },
    }   
})

export const reducer = rootSlice.reducer;
export const { chooseDate, chooseDistance, chooseHeart, choosePace } = rootSlice.actions