import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import api from "api/index";
import { initialState } from "./helperData";

import { IfetchBooksData, IAddItemToBasket } from "../interfaces/index";

export const booksSlice = createSlice({
  name: "books",
  initialState: initialState,
  reducers: {
    fetchBooksDataStarted: (state) => {
      state.status = "inProgress";
    },
    fetchBooksDataSucceeded: (
      state,
      action: PayloadAction<IfetchBooksData>
    ) => {
      state.data = [...action.payload.data];
      state.status = "succeeded";
    },
    fetchBooksDataFailed: (state) => {
      state.status = "failed";
    },
    addItemToBasket: (state, action: PayloadAction<IAddItemToBasket>) => {
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
  fetchBooksDataSucceeded,
  fetchBooksDataFailed,
  addItemToBasket,
} = booksSlice.actions;

export const fetchBooks = (pageNumber: number) => async (dispatch: any) => {
  dispatch(fetchBooksDataStarted());

  try {
    const data = await api.books.fetchBooks(pageNumber);
    dispatch(fetchBooksDataSucceeded(data.data));
  } catch (error) {
    dispatch(fetchBooksDataFailed());
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
