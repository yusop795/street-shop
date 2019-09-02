import {
    all,
    takeEvery,
    put
} from "redux-saga/effects";
import * as Actions from "../actions";

function* Test() {
    console.log(222)
    yield takeEvery("@test", ageUpAsync);
}

function* ageUpAsync() {
    console.log(333)
    yield;
    // yield put(Actions.getTest());
}

export default function*() {
    console.log(111)
    yield all([
        Test(),
    ])
}