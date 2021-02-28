import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type AuthState = {
  pin: string;
};

export const initialState: AuthState = {
  pin: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setPin(state, action: PayloadAction<string>) {
      state.pin = action.payload;
    },
  },
});

export const {setPin} = authSlice.actions;
export const auth = authSlice.reducer;
