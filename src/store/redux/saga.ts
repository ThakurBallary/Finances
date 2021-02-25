import { all, fork } from 'redux-saga/effects';

import { usersSaga } from 'features/users';

export function* AppSaga() {
  yield all([fork(usersSaga)]);
}
