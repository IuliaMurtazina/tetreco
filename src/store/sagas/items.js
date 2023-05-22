import axiosInstance from "../../../axios-instance";
import { call, takeEvery, put } from "redux-saga/effects";
import {
  CHANGE_ORDERING,
  LOAD_ITEMS_LOADING,
  LOAD_ITEMS_SUCCESS,
  SET_COUNT_OF_ITEMS,
} from "../reducers/items";
import { loadItems } from "../reducers/items";

// WORKERS

function* loadItemsWorker({ payload }) {
  try {
    if (payload.ordering) {
      yield put(CHANGE_ORDERING(payload.ordering));
    }
    const { data } = yield call(() =>
      axiosInstance.get("/api/catalog/", {
        params: {
          ...payload,
        },
      }),
    );

    yield put(LOAD_ITEMS_SUCCESS(data.results));
    yield put(SET_COUNT_OF_ITEMS(data.count));
  } catch (err) {
    throw new Error();
  }
}

// WATCHER

export default function* itemsWatcher() {
  yield takeEvery(loadItems, loadItemsWorker);
}
