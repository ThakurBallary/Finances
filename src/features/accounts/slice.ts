import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Account} from './types';

export type AccountsState = {
  accounts: Account[];
};

export const initialState: AccountsState = {
  accounts: [
    {
      balance: 12345.67,
      bank: 'ABC',
      branch: 'Avenue Street',
      isActive: true,
      name: 'Mark',
      number: '012345678901',
    },
    {
      balance: 12345.67,
      bank: 'DEF',
      branch: 'Park Lakers',
      isActive: true,
      name: 'Alex',
      number: '012345678902',
    },
  ],
};

const accountsSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {
    setAccount(state, action: PayloadAction<Account>) {
      const index = state.accounts.findIndex(
        (account) => account.number === action.payload.number,
      );
      if (index < 0) {
        state.accounts.push(action.payload);
      } else {
        state.accounts.splice(index, 1, action.payload);
      }
    },
  },
});

export const {setAccount} = accountsSlice.actions;
export const accounts = accountsSlice.reducer;
