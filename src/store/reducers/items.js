import { createSlice, createAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

export const reducerPrefix = "items";

// ACTIONS

export const loadItems = createAction(`${reducerPrefix}/LOAD_ITEMS`);
export const loadMoreItems = createAction(`${reducerPrefix}/LOAD_MORE_ITEMS`);
export const loadCountOfItems = createAction(
  `${reducerPrefix}/LOAD_COUNT_OF_ITEMS`,
);
export const sortItems = createAction(`${reducerPrefix}/SORT_ITEMS`);

// REDUCER

const initialState = {
  items: [],
  count: 0,
  PER_PAGE: 50,
  sort: "",
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
    CHANGE_SORTING: (state, action) => {
      state.sort = action.payload;
    },

    extraReducers: {
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload,
        };
      },
    },
  },
});

export const { LOAD_ITEMS_SUCCESS, SET_COUNT_OF_ITEMS, CHANGE_SORTING } =
  itemsSlice.actions;
export default itemsSlice.reducer;
