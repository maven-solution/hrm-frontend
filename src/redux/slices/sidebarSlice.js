import { createSlice } from "@reduxjs/toolkit";

export const sidebarSlice = createSlice({
  name: "toggleSidebar",
  initialState: false,
  reducers: {
    toggleSidebar: (state) => {
      return !state;
    },
  },
});

export const { toggleSidebar } = sidebarSlice.actions;

export default sidebarSlice.reducer;
