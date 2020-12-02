import React from "react";
import { useSelector } from "react-redux";

import { Menu, Table } from "components";
import { selectBooksBasket } from "features/books/booksSlice";

import * as Styles from "./styles";

import { Message } from "./components";

const BasketPage = () => {
  const BooksBasket = useSelector(selectBooksBasket);
  return (
    <>
      <Menu title="Koszyk" />
      <Styles.Container>
        {BooksBasket.length > 0 ? <Table /> : <Message />}
      </Styles.Container>
    </>
  );
};

export default BasketPage;
