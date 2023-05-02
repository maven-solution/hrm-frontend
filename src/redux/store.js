import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./slices/sidebarSlice";
import userReducer from "./slices/userInfoSlice";

export const store = configureStore({
  reducer: {
    toggleSidebar: sidebarSlice,
    user: userReducer,
  },
});
