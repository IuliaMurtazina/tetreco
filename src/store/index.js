import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSaga";
import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer, {
  reducerPrefix as CATEGORIES_REDUCER_PREFIX,
} from "./reducers/categories";
import itemsReducer, {
  reducerPrefix as ITEMS_REDUCER_PREFIX,
} from "./reducers/items";
import { createWrapper } from "next-redux-wrapper";

export const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    reducer: {
      [CATEGORIES_REDUCER_PREFIX]: categoriesReducer,
      [ITEMS_REDUCER_PREFIX]: itemsReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(sagaMiddleware),
    devTools: true,
  });

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export const store = makeStore();
export const wrapper = createWrapper(makeStore);
