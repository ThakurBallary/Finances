import {combineReducers} from '@reduxjs/toolkit';

import {auth} from 'features/auth';
import {accounts} from 'features/accounts';
import {localisation} from 'features/localisation';
import {themes} from 'features/themes';
import {transactions} from 'features/transactions';

export const reducer = combineReducers({
  auth,
  accounts,
  localisation,
  themes,
  transactions,
});
