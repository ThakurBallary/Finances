import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Transaction} from './types';

export type TransactionsState = {
  transactions: Transaction[];
};

export const initialState: TransactionsState = {
  transactions: [],
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    setTransaction(state, action: PayloadAction<Transaction>) {
      const index = state.transactions.findIndex(
        (transaction) => transaction.id === action.payload.id,
      );
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
