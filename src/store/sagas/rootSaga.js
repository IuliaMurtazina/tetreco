import categoriesWatcher from "./categories";
import { all, fork } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([fork(categoriesWatcher)]);
}
