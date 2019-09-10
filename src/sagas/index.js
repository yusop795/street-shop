import {
  all,
} from 'redux-saga/effects';
import * as homeSaga from './homeSaga';

export default function* () {
  console.log(111);
  yield all([
    homeSaga.test(),
  ]);
}
