import { createSlice, createAction, current } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

export const reducerPrefix = "items";

// ACTIONS

export const loadItems = createAction(`${reducerPrefix}/LOAD_ITEMS`);
export const loadMoreItems = createAction(`${reducerPrefix}/LOAD_MORE_ITEMS`);
export const loadCountOfItems = createAction(
  `${reducerPrefix}/LOAD_COUNT_OF_ITEMS`,
);
export const orderingItems = createAction(`${reducerPrefix}/ORDERING_ITEMS`);

// REDUCER

const initialState = {
  items: [],
  count: 0,
  PER_PAGE: 50,
  ordering: "",
  currentPage: 1,
  view: true,
};

const itemsSlice = createSlice({
  name: reducerPrefix,
  initialState,
  reducers: {
    LOAD_ITEMS_SUCCESS: (state, action) => {
      state.items = action.payload;
    },
    SET_COUNT_OF_ITEMS: (state, action) => {
      state.count = action.payload;
    },
    CHANGE_ORDERING: (state, action) => {
      state.ordering = action.payload;
    },
    SET_NEW_PAGE: (state, action) => {
      state.currentPage = action.payload;
    },
    SET_VIEW_MODE_LIST: (state, action) => {
      state.view = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      return {
        ...state,
        ...action.payload[reducerPrefix],
        currentPage: state.currentPage,
        view: state.view,
      };
    });
  },
});

export const {
  LOAD_ITEMS_LOADING,
  LOAD_ITEMS_SUCCESS,
  SET_COUNT_OF_ITEMS,
  CHANGE_ORDERING,
  SET_NEW_PAGE,
  SET_VIEW_MODE_LIST,
} = itemsSlice.actions;
export default itemsSlice.reducer;
