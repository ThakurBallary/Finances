import {AppState} from 'store/redux';

export const accounts = (state: AppState) => state.accounts.accounts;

export const activeAccounts = (state: AppState) =>
  state.accounts.accounts.filter((account) => account.isActive);

export const account = (state: AppState, number: string) =>
  state.accounts.accounts.find((e) => e.number === number);

export default {
  accounts,
  activeAccounts,
  account,
};
