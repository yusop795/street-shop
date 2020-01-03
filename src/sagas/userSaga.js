import { takeEvery, takeLatest, put, call } from "redux-saga/effects";
import { userTypes, userAction } from "../reducers/userReducer";

function isEmpty(value) {
  if (value !== "" && value !== undefined && value !== null) {
    return false;
  } else {
    return true;
  }
}
export function* validationFormSaga(action) {
  console.log("validationFrom", action);
  if (!isEmpty(action.value.value)) {
    console.log("it does has values!", action.value.value);
    if (isEmpty(action.value.type)) {
      console.log("form 작성 끝", action.value.type);
    } else {
      yield put({
        type: "CEHCKED_SIGNUP_FORM",
        addBy: {
          next: action.next,
          value: action.value.value
        },
        name: action.value.type
      });
    }
  } else {
    console.log("no values!!!!");
    yield put({
      type: "DISABLED_SIGNUP_FORM",
      addBy: {
        type: "ERROR",
        message: "알맞게 입력해 주세요"
      }
    });
  }
  // const response = yield call(fetchMap, location);
  // if (response.data) {
  //   yield put({ type: homeTypes.FETCH_MAP_SUCCESS, payload: response.data });
  // } else {
  //   console.log(response);
  // }
}

export function* signUpUserSaga(value) {
  console.log("put user!");
}

export default function* userSaga() {
  yield takeEvery(userTypes.SELECT_USER, validationFormSaga);
}
