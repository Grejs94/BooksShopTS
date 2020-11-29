import { createSlice } from "@reduxjs/toolkit";

import api from "api";

export const booksSlice = createSlice({
  name: "books",
  initialState: {
    data: [],
    basket: [],
    status: "iddle",
  },
  reducers: {
    fetchBooksDataStarted: (state) => {
      state.status = "inProgress";
    },
    fetchBooksDataDataSucceeded: (state, action) => {
      state.data = [...action.payload.data];
      state.status = "succeeded";
    },
    fetchBooksDataDataFailed: (state) => {
      state.status = "failed";
    },
    addItemToBasket: (state, action) => {
      const { id } = action.payload;
      const isInBasket = state.basket.find((item) => item.id === id);

      const item = { ...action.payload, value: 1 };

      state.basket = isInBasket
        ? state.basket.map((basketItem) =>
            basketItem.id === id
              ? {
                  ...basketItem,
                  value: basketItem.value + 1,
                }
              : basketItem
          )
        : state.basket.push(item);
    },
  },
});

export const {
  fetchBooksDataStarted,
  fetchBooksDataDataSucceeded,
  fetchBooksDataDataFailed,
  addItemToBasket,
  setData,
} = booksSlice.actions;

export const fetchBooks = (pageNumber) => async (dispatch) => {
  dispatch(fetchBooksDataStarted());

  try {
    const data = await api.books.fetchBooks(pageNumber);
    dispatch(fetchBooksDataDataSucceeded(data.data));
  } catch (error) {
    dispatch(fetchBooksDataDataFailed());
  }
};
export const selectBooksData = (state) => state.books.data;
export const selectBooksBasket = (state) => state.books.basket;
export const selectBooksBasketValue = (state) =>
  state.books.basket.reduce((acc, item) => acc + item.value, 0);

export const selectBooksFetchStatus = (state) => state.books.status;

export default booksSlice.reducer;
