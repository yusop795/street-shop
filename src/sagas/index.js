import {
    all,
} from "redux-saga/effects";
import * as HomeSaga from "./homeSaga";

export default function*() {
    console.log(111)
    yield all([
        HomeSaga.test(),
    ])
}