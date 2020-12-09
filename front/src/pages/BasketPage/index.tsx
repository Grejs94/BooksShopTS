import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Menu, Table, Modal } from "components";
import { selectBooksBasket } from "features/books/booksSlice";

import * as Styles from "./styles";
import { Message } from "./components";

const BasketPage = () => {
  const BooksBasket = useSelector(selectBooksBasket);

  const notEmpty = BooksBasket.length > 0;

  return (
    <>
      <Menu title="Koszyk" />
      <Styles.Container maxWidth="md">
        {notEmpty ? <Table /> : <Message />}
        <Styles.ButtonContainer>
          {notEmpty ? (
            <Link to="/SummaryPage" style={{ textDecoration: "none" }}>
              <Modal />
            </Link>
          ) : (
            <Modal />
          )}
        </Styles.ButtonContainer>
      </Styles.Container>
    </>
  );
};

export default BasketPage;
