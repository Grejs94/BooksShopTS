import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import {
  addItemToBasket,
  selectBooksFetchStatus,
  selectBooksData,
  setOrderCompleted,
} from "features/books/booksSlice";
import { BasketItem } from "interfaces/books";

import { Card } from "./components/index";

export default function SpacingGrid() {
  const dispatch = useDispatch();
  const status = useSelector(selectBooksFetchStatus);

  const data = useSelector(selectBooksData);

  const handleclick = (item: BasketItem) => {
    dispatch(addItemToBasket(item));
    dispatch(setOrderCompleted(false));
  };

  if (status === "failed") {
    return <div>"Fetching data error..."</div>;
  }

  if (status === "inProgress") {
    return <CircularProgress />;
  }

  if (!data) {
    return null;
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          {data.map((book: BasketItem) => {
            return (
              <Grid key={book.id} item>
                <Card book={book} handleClick={() => handleclick(book)} />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}
