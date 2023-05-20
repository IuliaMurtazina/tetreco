import categoriesWatcher from "./categories";
import { all, fork } from "redux-saga/effects";
import itemsWatcher from "./items";

export default function* rootSaga() {
  yield all([fork(categoriesWatcher), fork(itemsWatcher)]);
}
