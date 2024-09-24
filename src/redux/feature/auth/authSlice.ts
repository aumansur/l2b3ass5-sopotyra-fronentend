import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

type TUser = {
  role: string;
  email: string;
  iat: number;
  exp: number;
};

type TAuthsState = {
  user: null | TUser;
  token: null | string;
};

const initialState: TAuthsState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentToken = (state: RootState) => state.auth.token;
export const selectCurrentUser = (state: RootState) => state.auth.user;
