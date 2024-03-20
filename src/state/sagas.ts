import {all, fork} from 'redux-saga/effects';
import AuthSagas from './auth/sagas.ts';
import UserSagas from './user/sagas.ts';
import BrandSagas from './brand/sagas.ts';

export function* Sagas() {
  yield all([fork(AuthSagas), fork(UserSagas), fork(BrandSagas)]);
}
