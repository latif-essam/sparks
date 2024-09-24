// store/userSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  fullName: string | null;
  email: string | null;
  isLoggedIn: boolean;
}

const initialState: UserState = {
  fullName: null,
  email: null,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<{ fullName: string; email: string }>) {
      state.fullName = action.payload.fullName;
      state.email = action.payload.email;
      state.isLoggedIn = true;
    },
    setUserFullname(state, action: PayloadAction<{ fullName: string }>) {
      state.fullName = action.payload.fullName;
    },
    setAnonymousUser(state) {
      state.fullName = "Guest";
      state.email = null;
      state.isLoggedIn = false;
    },
    logout(state) {
      state.fullName = null;
      state.email = null;
      state.isLoggedIn = false;
    },
  },
});

export const { setUser, setAnonymousUser, logout, setUserFullname } =
  userSlice.actions;
export default userSlice.reducer;
