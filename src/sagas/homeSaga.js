import {
  takeLatest,
  select,
  take,
  put,
  call,
} from 'redux-saga/effects';
import { homeTypes, homeActions } from '../reducers/homeReducer';
import { fetchMap } from './api/home';

export function* fetchMapSaga(location) {
  const polling = true;
  while (polling) {
    yield console.log(polling);
    // const response = yield call(fetchMap, location);
    // polling = false;
    // console.log(response);
    // if (response.data) {
    //   yield put(homeActions.fetchMap(response.data));
    // } else {
    //   console.log(response);
    // }
  }
}

export default function* homeSaga() {
  // yield fork(fetchMapSaga, 'fetchMapSaga');
  // yield takeLatest(homeTypes.FETCH_MAP, fetchMapSaga);
}
