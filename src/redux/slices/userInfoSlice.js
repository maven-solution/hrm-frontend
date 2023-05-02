import { login } from "@/api/auth";
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const userLogin = createAsyncThunk("user/login", async (info) => {
  const response = await login(info);
  if (response.status === 200) {
    return response;
  } else {
    throw new Error(data.message);
  }
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    loggedIn: false,
    token: "",
  },
  reducers: {
    setUser: (state, action) => {
      state.loggedIn = true;
      state.token = action.payload.token;
    },
    clearUser: (state) => {
      state.loggedIn = false;
      state.token = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.fulfilled, (state, action) => {
        state.loggedIn = true;
        state.token = action.payload.token;
      })
      .addCase(userLogin.rejected, (state, action) => {
        console.error(action.error);
      });
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
