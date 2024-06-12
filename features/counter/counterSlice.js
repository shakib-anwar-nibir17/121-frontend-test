const { createSlice } = require("@reduxjs/toolkit");

// initial state
const initialState = {
    count: 0,
};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state, action) => {
            state.count++;
        },
        decrement: (state, action) => {
            state.count--;
        },
        reset: (state, action) => {
            state.count = initialState.count;
        },
    },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;