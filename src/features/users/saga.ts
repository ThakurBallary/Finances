import { call, put, takeLatest } from 'redux-saga/effects';
import { getUsers, setUsers, setError } from './slice';
import * as api from './api';
import { AxiosResponse } from 'axios';
import { User } from './types';

function* getUsersSaga() {
  try {
    const response: AxiosResponse<User[]> = yield call(api.getUsers);
    yield put(setUsers(response.data));
  } catch (e) {
    setError(e.message);
  }
}

export function* usersSaga() {
  yield takeLatest(getUsers, getUsersSaga);
}
