import React from "react";
import { useSelector } from "react-redux";
import { Container } from "@material-ui/core";

import { Menu, Button } from "components";
import {
  selectBooksOrderCompleted,
  selectBooksBasket,
} from "features/books/booksSlice";

import { Form } from "./components";
import { Link } from "react-router-dom";

const Summary = () => {
  const basket = useSelector(selectBooksBasket);
  const orderCompleted = useSelector(selectBooksOrderCompleted);

  const basketIsEmpty = basket.length < 1;

  const orderCompletedBody = (
    <div>
      <p>Twoje zamówienie zostało przyjęte do realizaji</p>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button color="primary" variant="contained">
          Kontynuuj zakupy!
        </Button>
      </Link>
    </div>
  );

  return (
    <div>
      <Menu title="Podsumowanie" />
      <Container maxWidth="lg">
        {orderCompleted ? (
          orderCompletedBody
        ) : basketIsEmpty ? (
          "Twój koszyk jest pusty"
        ) : (
          <Form />
        )}
      </Container>
    </div>
  );
};

export default Summary;
