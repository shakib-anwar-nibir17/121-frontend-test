const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    searchText: "",
    searchImageFile: null,
};

const searchProductSlice = createSlice({
    name: "searchProduct",
    initialState,
    reducers: {
        setSearchText: (state, action) => {
            state.searchText = action.payload;
        },
        setSearchImage: (state, action) => {
            state.searchImageFile = action.payload;
        }
    },
});

export const { setSearchText, setSearchImage } = searchProductSlice.actions;
export default searchProductSlice.reducer;
