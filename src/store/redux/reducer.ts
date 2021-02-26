import { combineReducers } from '@reduxjs/toolkit';

import { auth } from 'features/auth';
import { accounts } from 'features/accounts';
import { transactions } from 'features/transactions';

export const reducer = combineReducers({
  auth,
  accounts,
  transactions,
});
