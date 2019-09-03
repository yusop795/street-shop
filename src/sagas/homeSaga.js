import {
    takeEvery,
    put,
    delay
} from "redux-saga/effects";
import { testAction } from "../actions";

export function* test() {
    console.log(222)
    yield takeEvery(testAction.type.GET_TEST, testAsync);
}

export function* testAsync() {
    yield delay(1000)
    console.log(333, testAction)
    yield put(testAction.setTest('bbb'));
}