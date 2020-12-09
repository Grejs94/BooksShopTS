import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Button } from "components";
import { selectBooksBasket } from "features/books/booksSlice";

import * as Styles from "./styles";

export default function SimpleModal() {
  const BooksBasket = useSelector(selectBooksBasket);

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    if (BooksBasket.length > 0) {
      return;
    } else {
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <Styles.BodyWrapper>
      <h2 id="simple-modal-title">Twój koszyk jest pusty</h2>
      <p id="simple-modal-description">
        Przed przejściem do podsumowawnia zamówienie proszę o wybranie
        produktów.
      </p>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button color="primary" variant="contained">
          Powrót do Sklepu
        </Button>
      </Link>
    </Styles.BodyWrapper>
  );

  return (
    <div>
      <Button handleClick={handleOpen} color="primary" variant="contained">
        Dalej
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
