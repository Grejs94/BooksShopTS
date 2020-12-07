import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Button } from "components";

import { selectBooksBasket } from "features/books/booksSlice";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal() {
  const BooksBasket = useSelector(selectBooksBasket);

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
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
    <div style={modalStyle} className={classes.paper}>
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
    </div>
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
