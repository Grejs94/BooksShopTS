import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import {
  addItemToBasket,
  selectBooksFetchStatus,
  selectBooksData,
} from "features/books/booksSlice";

import { Card } from "./components/index";

interface Book {
  author: string;
  cover_url: string;
  currency: string;
  id: number;
  pages: number;
  price: number;
  title: string;
}

export default function SpacingGrid() {
  const dispatch = useDispatch();
  const status = useSelector(selectBooksFetchStatus);

  const data = useSelector(selectBooksData);

  const handleclick = (item: Book) => {
    dispatch(addItemToBasket(item));
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
          {data.map((book: Book) => {
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
