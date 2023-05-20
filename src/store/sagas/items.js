import axiosInstance from "../../../axios-instance";
import { call, takeEvery, put } from "redux-saga/effects";
import {
  CHANGE_SORTING,
  LOAD_ITEMS_SUCCESS,
  SET_COUNT_OF_ITEMS,
  loadCountOfItems,
  sortItems,
} from "../reducers/items";
import { loadItems, loadMoreItems } from "../reducers/items";

// WORKERS

function* loadItemsWorker({ payload }) {
  try {
    // if(payload.ordering)
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

function* loadMoreItemsWorker({ payload }) {
  try {
    const { data } = yield call(() =>
      axiosInstance.get(`/api/catalog/?${payload}`),
    );

    yield put(LOAD_ITEMS_SUCCESS(data.results));
    yield put(SET_COUNT_OF_ITEMS(data.count));
  } catch (err) {
    throw new Error();
  }
}

function* loadCountOfItemsWorker() {
  try {
    const { data } = yield call(() => axiosInstance.get("/api/catalog/"));
    yield put(SET_COUNT_OF_ITEMS(data.count));
  } catch (err) {
    throw new Error();
  }
}

function* sortItemsWorker({ payload }) {
  try {
    yield put(CHANGE_SORTING(payload));
    const { data } = yield call(() =>
      axiosInstance.get(`/api/catalog/?ordering=${payload}`),
    );
    yield put(LOAD_ITEMS_SUCCESS(data.results));
  } catch (err) {
    throw new Error();
  }
}

// WATCHER

export default function* itemsWatcher() {
  yield takeEvery(loadItems, loadItemsWorker);
  yield takeEvery(loadMoreItems, loadMoreItemsWorker);
  yield takeEvery(loadCountOfItems, loadCountOfItemsWorker);
  yield takeEvery(sortItems, sortItemsWorker);
}
