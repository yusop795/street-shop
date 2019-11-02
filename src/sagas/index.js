import {
  all,
} from 'redux-saga/effects';
import * as homeSaga from './homeSaga';

export default function* () {
  yield all([
    homeSaga.test(),
  ]);
}
