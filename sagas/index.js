import {fork} from 'redux-saga/effects';

import items from './items';
import user from './user';
import itemsLatest from './itemsLatest';
import itemsEvery from './itemsEvery';

export default function* rootSaga() {
  yield fork(items);
  yield fork(user);
  yield fork(itemsLatest);
  yield fork(itemsEvery);
}
