import {
  takeEvery,
  put,
  delay,
} from 'redux-saga/effects';
import { testTypes, testAction } from '../reducers/testReducer';

export default function* testSaga() {
  yield takeEvery(testTypes.UPDATE_TEXT, testAction.updateText);
  yield takeEvery(testTypes.UPDATE_TEXT, testAction.updateNumIncrement);
  yield takeEvery(testTypes.UPDATE_TEXT, testAction.updateNumDecrement);
}
