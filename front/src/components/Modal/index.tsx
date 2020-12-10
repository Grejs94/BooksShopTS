import React from "react";
import Modal from "@material-ui/core/Modal";
import { Link } from "react-router-dom";

import { Button } from "components";

import * as Styles from "./styles";

type Props = {
  modalOpened: boolean;
  setModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
};

const SimpleModal: React.FC<Props> = ({ modalOpened, setModalOpened }) => {
  const handleClose = () => {
    setModalOpened(false);
  };

  const body = (
    <Styles.BodyWrapper>
      <h2 id="simple-modal-title">Twój koszyk jest pusty</h2>
      <p id="simple-modal-description">
        Przed przejściem do podsumowawnia zamówienie proszę o wybranie
        produktów.
      </p>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button color="primary" variant="contained" customVariant="regular">
          Powrót do Sklepu
        </Button>
      </Link>
    </Styles.BodyWrapper>
  );

  return (
    <div>
      <Modal
        open={modalOpened}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
};

export default SimpleModal;
