import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSaga";
import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer, {
  reducerPrefix as CATEGORIES_REDUCER_PREFIX,
} from "./reducers/categories";
import itemsReducer, {
  reducerPrefix as ITEMS_REDUCER_PREFIX,
} from "./reducers/items";
import uiReducer, { reducerPrefix as UI_REDUCER_PREFIX } from "./reducers/ui";
import { createWrapper } from "next-redux-wrapper";

export const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    reducer: {
      [CATEGORIES_REDUCER_PREFIX]: categoriesReducer,
      [ITEMS_REDUCER_PREFIX]: itemsReducer,
      [UI_REDUCER_PREFIX]: uiReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(sagaMiddleware),
    devTools: true,
  });

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export const wrapper = createWrapper(makeStore);
