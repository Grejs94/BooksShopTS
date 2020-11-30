import { configureStore } from "@reduxjs/toolkit";

import books from "features/books/booksSlice";

// export default configureStore({
//   reducer: { books },
// });

const store = configureStore({
  reducer: { books },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
