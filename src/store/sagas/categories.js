import axiosInstance from "../../../axios-instance";
import { call, takeEvery, put } from "redux-saga/effects";
import { LOAD_CATEGORIES_SUCCESS } from "../reducers/categories";
import { loadCategories } from "../reducers/categories";

// WORKERS

function* loadCategoriesWorker() {
  try {
    const { data } = yield call(() =>
      axiosInstance.get("/api/catalog/parent_categories/"),
    );

    yield put(LOAD_CATEGORIES_SUCCESS(data.results));
  } catch (err) {
    throw new Error();
  }
}

// WATCHER

export default function* categoriesWatcher() {
  yield takeEvery(loadCategories, loadCategoriesWorker);
}
