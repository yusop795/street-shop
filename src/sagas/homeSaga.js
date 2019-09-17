import {
  takeEvery,
  put,
  delay,
} from 'redux-saga/effects';
import { testTypes, testActions } from '../actions/test';

export function* testAsync() {
  yield delay(1000);
  console.log(333, testActions);
  yield put(testActions.setTest('bbb'));
}

export function* test() {
  console.log(222, testTypes.GET_TEST);
  yield takeEvery(testTypes.GET_TEST, testAsync);
}
