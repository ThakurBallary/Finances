import { combineReducers } from '@reduxjs/toolkit';

import { auth } from 'features/auth';
import { users } from 'features/users';

export const reducer = combineReducers({
  auth,
  users,
});
