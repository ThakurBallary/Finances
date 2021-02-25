import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from './types';

export type UsersState = {
  isLoading: boolean;
  users: User[];
  error: string;
};

export const initialState: UsersState = {
  isLoading: false,
  users: [],
  error: '',
};

const authSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    getUsers(state) {
      state.isLoading = true;
      state.error = '';
    },
    setUsers(state, action: PayloadAction<User[]>) {
      state.isLoading = false;
      state.users = action.payload;
    },
    setError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { getUsers, setUsers, setError } = authSlice.actions;
export const users = authSlice.reducer;
