import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Account } from './types';

export type AccountsState = {
  accounts: Account[];
  error: string;
  isLoading: boolean;
};

export const initialState: AccountsState = {
  accounts: [
    {
      bank: 'ABC',
      branch: 'Avenue Street',
      name: 'Mark',
      number: '012345678901',
    },
    {
      bank: 'DEF',
      branch: 'Park Lakers',
      name: 'Alex',
      number: '012345678902',
    },
  ],
  error: '',
  isLoading: false,
};

const authSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {
    getAccounts(state) {
      state.isLoading = true;
      state.error = '';
    },
    setAccounts(state, action: PayloadAction<Account[]>) {
      state.isLoading = false;
      state.accounts = action.payload;
    },
    setError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { getAccounts, setAccounts, setError } = authSlice.actions;
export const accounts = authSlice.reducer;
