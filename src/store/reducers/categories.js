import { createSlice, createAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

export const reducerPrefix = "categories";

// ACTIONS

export const loadCategories = createAction(`${reducerPrefix}/LOAD_CATEGORIES`);

// REDUCER

const initialState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: reducerPrefix,
  initialState,
  reducers: {
    LOAD_CATEGORIES_SUCCESS: (state, action) => {
      state.categories = action.payload;
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

export const { LOAD_CATEGORIES_SUCCESS } = categoriesSlice.actions;
export default categoriesSlice.reducer;
