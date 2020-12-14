import { combineReducers } from "@reduxjs/toolkit";

import books from "features/books/booksSlice";

const rootReducer = combineReducers({
  books,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
