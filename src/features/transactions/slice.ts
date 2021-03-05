import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Transaction} from './types';

export type TransactionsState = {
  transactions: Transaction[];
};

export const initialState: TransactionsState = {
  transactions: [
    {
      accountNumber: '012345678901',
      amount: 511846,
      date: '2021-01-01 11:11:11',
      id: '1614279758360',
      isActive: true,
      title: 'AA',
    },
    {
      accountNumber: '012345678901',
      amount: -14568,
      date: '2021-01-21 18:44:19',
      id: '1614279758361',
      isActive: true,
      mode: 'GPay',
      title: 'BB',
    },
    {
      accountNumber: '012345678902',
      amount: 811846,
      date: '2021-02-04 16:58:23',
      id: '1614279758362',
      isActive: true,
      title: 'AB',
    },
    {
      accountNumber: '012345678902',
      amount: -44568,
      date: '2021-02-08 09:01:56',
      id: '1614279758363',
      isActive: true,
      mode: 'NetBanking',
      title: 'BC',
    },
  ],
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    setTransaction(state, action: PayloadAction<Transaction>) {
      const index = state.transactions.findIndex(
        (transaction) => transaction.id === action.payload.id,
      );
      console.log(action.payload);

      if (index < 0) {
        state.transactions.push(action.payload);
      } else {
        state.transactions.splice(index, 1, action.payload);
      }
    },
  },
});

export const {setTransaction} = transactionsSlice.actions;
export const transactions = transactionsSlice.reducer;
