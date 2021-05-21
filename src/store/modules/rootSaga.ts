import { Saga } from '@redux-saga/types';
import { all, takeLatest } from 'redux-saga/effects';

import cart from './cart/sagas';

export default function* rootSaga(): Generator {
  return yield all([cart]);
}
