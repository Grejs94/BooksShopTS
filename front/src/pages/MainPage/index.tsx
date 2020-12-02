import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container } from "@material-ui/core";

import { Menu } from "components";
import { fetchBooks } from "features/books/booksSlice";

import { Grid } from "./components/index";

const MainPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks(1));
  }, []);

  return (
    <>
      <Container maxWidth="lg">
        <Menu title="Lista książek" />
        <Grid />
      </Container>
    </>
  );
};

export default MainPage;
