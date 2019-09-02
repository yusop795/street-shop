import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from 'redux-saga'
import Router from "./router"
import reducer, { initializeState } from "./reducers";
import rooSaga from "./sagas"

import * as serviceWorker from './serviceWorker';

const sagaMiddleware = createSagaMiddleware()
/* store 생성 */
const store = createStore(
    reducer, // action to handle
    initializeState,
    composeWithDevTools(applyMiddleware(sagaMiddleware)) // composeWithDevTools : DevTools 미들웨어
  );
sagaMiddleware.run(rooSaga)
const rootElement = document.getElementById("root");

ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>,
rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
