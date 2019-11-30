import {
  takeEvery,
  put,
  call,
} from 'redux-saga/effects';
import { homeTypes, homeActions } from '../reducers/homeReducer';
import { fetchMap } from './api/home';

export function* fetchMapSaga(location) {
  const response = yield call(fetchMap, location);
  if (response.data) {
    yield put({ type: homeTypes.FETCH_MAP_SUCCESS, payload: response.data });
  } else {
    console.log(response);
  }
}

export default function* homeSaga() {
  yield takeEvery(homeTypes.FETCH_MAP, fetchMapSaga);
}
