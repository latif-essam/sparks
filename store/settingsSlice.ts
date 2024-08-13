import { createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    theme: { dark: false },
  },
  reducers: {
    toggleTheme: (state) => {
      state.theme = { ...state.theme, dark: !state.theme.dark };
    },
  },
});

//

const selectSettings = (state: RootState) => state.settings.theme.dark;
export const selectIsDark = createSelector([selectSettings], (dark) => dark);

export const { toggleTheme } = settingsSlice.actions;
export default settingsSlice.reducer;
