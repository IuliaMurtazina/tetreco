import { createSlice, createAction, current } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

export const reducerPrefix = "ui";

// ACTIONS

// REDUCER

const initialState = {
  isAuthPopupOpen: false,
  authMode: "",
};

const uiSlice = createSlice({
  name: reducerPrefix,
  initialState,
  reducers: {
    SET_IS_AUTH_POPUP_OPEN: (state, action) => {
      state.isAuthPopupOpen = true;
      state.authMode = action.payload;
    },
    SET_IS_AUTH_POPUP_CLOSE: (state) => {
      state.isAuthPopupOpen = false;
    },
  },

  // extraReducers: (builder) => {
  //   builder.addCase(HYDRATE, (state, action) => {
  //     return {
  //       ...state,
  //       ...action.payload[reducerPrefix],
  //       currentPage: state.currentPage,
  //       view: state.view,
  //     };
  //   });
  // },
});

export const { SET_IS_AUTH_POPUP_OPEN, SET_IS_AUTH_POPUP_CLOSE } =
  uiSlice.actions;
export default uiSlice.reducer;
