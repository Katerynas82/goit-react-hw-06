import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    searchStr: "",
  },
  reducers: {
    searchContact: (state, action) => {
      state.searchStr = action.payload;
    },
  },
});

export const { searchContact } = filtersSlice.actions;
export const selectSearchStr = (state) => state.filters.searchStr;
export default filtersSlice.reducer;


