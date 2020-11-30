import { createSlice } from "@reduxjs/toolkit";

import api from "api";

interface InitialState {
  data: object[];
  basket: any[];
  status: string;
}

const initialState: InitialState = {
  data: [],
  basket: [],
  status: "iddle",
};

export const booksSlice = createSlice({
  name: "books",
  initialState: initialState,
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
        : [...state.basket, item];
    },
  },
});

export const {
  fetchBooksDataStarted,
  fetchBooksDataDataSucceeded,
  fetchBooksDataDataFailed,
  addItemToBasket,
} = booksSlice.actions;

export const fetchBooks = (pageNumber: number) => async (dispatch: any) => {
  dispatch(fetchBooksDataStarted());

  try {
    const data = await api.books.fetchBooks(pageNumber);
    dispatch(fetchBooksDataDataSucceeded(data.data));
  } catch (error) {
    dispatch(fetchBooksDataDataFailed());
  }
};
export const selectBooksData = (state: any) => state.books.data;
export const selectBooksBasket = (state: any) => state.books.basket;

interface Item {
  author: string;
  cover_url: string;
  currency: string;
  id: number;
  pages: number;
  price: number;
  title: string;
  value: number;
}

export const selectBooksBasketValue = (state: any) =>
  state.books.basket.reduce((acc: number, item: Item) => acc + item.value, 0);

export const selectBooksFetchStatus = (state: any) => state.books.status;

export default booksSlice.reducer;
