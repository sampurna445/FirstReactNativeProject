import {call, put, takeLatest} from 'redux-saga/effects';
import {itemsActions} from '../features/items/itemsSlice';
import {ApiHelper} from '../helpers';

const {requestLatest, success, failure} = itemsActions;

function callGetRequest(url, data, headers) {
  return ApiHelper.get(url, data, headers);
}

function* watchRequest(action) {
  const {payload} = action;

  try {
    let response;

    response = yield call(callGetRequest, payload.url, {});

    yield put(success(response));
  } catch (ex) {
    yield put(failure(err?.message));
  }
}

export default function* root() {
  yield takeLatest(requestLatest, watchRequest);
}
