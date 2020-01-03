import { all, takeLatest } from "redux-saga/effects";
import testSaga from "./testSaga";
import homeSaga, { fetchMapSaga } from "./homeSaga";
import userSaga, { validationFormSaga } from "./userSaga";

export default function*() {
  yield all([testSaga(), homeSaga(), userSaga()]);
}
