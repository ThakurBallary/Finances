import {AppState} from 'store/redux';

export const allActiveTransactions = (state: AppState) =>
  state.transactions.transactions.filter((transaction) => transaction.isActive);

export const transactions = (state: AppState, number: string) =>
  state.transactions.transactions.filter(
    (transaction) =>
      transaction.accountNumber === number && transaction.isActive,
  );

export default {
  allActiveTransactions,
  transactions,
};
