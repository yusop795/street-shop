import {
  all,
  takeLatest,
} from 'redux-saga/effects';
import testSaga from './testSaga';
import homeSaga, { fetchMapSaga } from './homeSaga';


export default function* () {
  yield all([
    testSaga(),
    homeSaga(),
  ]);
}
