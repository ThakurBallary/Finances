import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type AuthState = {
  token: string;
};

export const initialState: AuthState = {
  token: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
  },
});

export const { setToken } = authSlice.actions;
export const auth = authSlice.reducer;
