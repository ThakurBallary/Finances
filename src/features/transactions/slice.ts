import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Transaction} from './types';

export type TransactionsState = {
  error: string;
  isLoading: boolean;
  transactions: Transaction[];
};

export const initialState: TransactionsState = {
  error: '',
  isLoading: false,
  transactions: [
    {
      accountNumber: '012345678901',
      amount: '511846',
      date: '2021-01-01 11:11:11',
      id: '1614279758360',
      name: 'AA',
    },
    {
      accountNumber: '012345678901',
      amount: '-14568',
      date: '2021-01-21 18:44:19',
      id: '1614279758360',
      mode: 'GPay',
      name: 'BB',
    },
    {
      accountNumber: '012345678902',
      amount: '811846',
      date: '2021-02-04 16:58:23',
      id: '1614279758360',
      name: 'AB',
    },
    {
      accountNumber: '012345678902',
      amount: '-44568',
      date: '2021-02-08 09:01:56',
      id: '1614279758360',
      mode: 'NetBanking',
      name: 'BC',
    },
  ],
};

const authSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    getTransactions(state) {
      state.isLoading = true;
      state.error = '';
    },
    setTransactions(state, action: PayloadAction<Transaction[]>) {
      state.isLoading = false;
      state.transactions = action.payload;
    },
    setError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {getTransactions, setTransactions, setError} = authSlice.actions;
export const transactions = authSlice.reducer;
