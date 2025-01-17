const { createSlice } = require("@reduxjs/toolkit");



// initial state
const initialState = {
    favItems: [],
};

const favouriteSlice = createSlice({
    name: "favourite",
    initialState,
    reducers: {
        add: (state, action) => {
            // const items = localStorage.getItem('favItems') !== null ? JSON.parse(localStorage.getItem('favItems')) : []
            console.log("action", action);
            const newItem = action.payload;
            const existingItem = state.favItems.find(item => item.product_name === newItem.product_name);
            if (!existingItem) {
                state.favItems.push(newItem);
            }
            localStorage.setItem("favItems", JSON.stringify(state.favItems.map(item => item)));
        },
        remove: (state, action) => {
            const removeItem = action.payload;
            const existingItem = state.favItems.find(item => item.product_name === removeItem.product_name);
            if (existingItem) {
                state.favItems = state.favItems.filter(item => item.product_name != removeItem.product_name)
            }
            localStorage.setItem("favItems", JSON.stringify(state.favItems.map(item => item)));
        },
        get: (state, action) => {
            if (typeof window !== 'undefined') {
                state.favItems = localStorage.getItem('favItems') !== null ? JSON.parse(localStorage.getItem('favItems')) : [];
            }
        },

        reset: (state, action) => {
            state.favItems = initialState.favItems;
        },
    },
});

export const { add, remove, reset, get } = favouriteSlice.actions;
export default favouriteSlice.reducer;