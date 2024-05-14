/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface AuthState {
  token: string | null; // Adjusted to allow `null`
}

// Define the initial state using that type
const initialState: AuthState = {
  token: null, // Adjusted to match type definition
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetState: () => initialState,
    setRefreshToken: (state, action: PayloadAction<{ access_token: string }>) => {
      const { access_token: accessToken } = action.payload;
      state.token = accessToken;
    },
  },
});

export const { setRefreshToken, resetState } = authSlice.actions;
export default authSlice.reducer