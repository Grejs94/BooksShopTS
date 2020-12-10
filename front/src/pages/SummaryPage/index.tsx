import React from "react";
import { useSelector } from "react-redux";
import { Container } from "@material-ui/core";
import { Link } from "react-router-dom";

import { Menu, Button } from "components";
import {
  selectBooksOrderCompleted,
  selectBooksBasket,
} from "features/books/booksSlice";

import { Form } from "./components";

const Summary = () => {
  const basket = useSelector(selectBooksBasket);
  const orderCompleted = useSelector(selectBooksOrderCompleted);

  const basketIsEmpty = !basket.length;

  const orderCompletedBody = (
    <div>
      <p>Twoje zamówienie zostało przyjęte do realizaji</p>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button color="primary" variant="contained" customVariant="regular">
          Kontynuuj zakupy!
        </Button>
      </Link>
    </div>
  );

  const Body = () => {
    if (orderCompleted) {
      return orderCompletedBody;
    }

    return basketIsEmpty ? <p>Twój koszyk jest pusty</p> : <Form />;
  };

  return (
    <div>
      <Menu title="Podsumowanie" />
      <Container maxWidth="lg">
        <Body />
      </Container>
    </div>
  );
};

export default Summary;
