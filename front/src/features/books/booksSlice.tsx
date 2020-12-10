import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import api from "api/index";

import { initialState } from "./helperData";
import { IAddItemToBasket, IfetchBooksData } from "../interfaces/index";

export const booksSlice = createSlice({
  name: "books",
  initialState: initialState,
  reducers: {
    setOrderCompleted: (state) => {
      state.orderCompleted = true;
    },
    setOrderNotCompleted: (state) => {
      state.orderCompleted = false;
    },
    incrementValue: (state, action) => {
      state.basket = state.basket.map((item) => ({
        ...item,
        value: item.id === action.payload ? item.value + 1 : item.value,
      }));
    },
    decrementValue: (state, action) => {
      state.basket = state.basket.map((item) => ({
        ...item,
        value:
          item.id === action.payload && item.value > 1
            ? item.value - 1
            : item.value,
      }));
    },
    deleteItem: (state, action) => {
      state.basket = state.basket.filter((item) => item.id !== action.payload);
    },
    setValue: (state, action) => {
      if (action.payload.value < 1) {
        return;
      }

      state.basket = state.basket.map((item) => ({
        ...item,
        value:
          item.id === action.payload.id
            ? parseInt(action.payload.value)
            : item.value,
      }));
    },
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
      state.sendStatus = "failed";
    },
    sendFormStarted: (state) => {
      state.sendStatus = "inProgress";
    },
    sendFormSucceeded: (state) => {
      state.sendStatus = "succeeded";
    },
    sendFormFailed: (state) => {
      state.sendStatus = "failed";
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
    cleanBasket: (state) => {
      state.basket = [];
    },
  },
});

export const {
  fetchBooksDataStarted,
  fetchBooksDataSucceeded,
  fetchBooksDataFailed,
  sendFormStarted,
  sendFormSucceeded,
  sendFormFailed,
  addItemToBasket,
  incrementValue,
  decrementValue,
  deleteItem,
  setValue,
  setOrderCompleted,
  setOrderNotCompleted,
  cleanBasket,
} = booksSlice.actions;

export const sendForm = (data: object) => async (dispatch: any) => {
  dispatch(sendFormStarted());

  try {
    await api.books.sendOrder(data);
    dispatch(sendFormSucceeded());
  } catch (error) {
    dispatch(sendFormFailed());
  }
};

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
export const selectBooksOrderCompleted = (state: any) =>
  state.books.orderCompleted;

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
