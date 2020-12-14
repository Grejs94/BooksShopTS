import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { Menu, Modal, Button } from "components";
import { selectBooksBasket } from "features/books/booksSlice";

import * as Styles from "./styles";
import { Message, BooksTable } from "./components";

const BasketPage = () => {
  let history = useHistory();
  const booksBasket = useSelector(selectBooksBasket);

  const isBasketEmpty = !booksBasket.length;

  const [modalOpened, setModalOpened] = React.useState(false);

  const handleClick = () => {
    if (isBasketEmpty) {
      setModalOpened(true);
    } else {
      history.push("/SummaryPage");
    }
  };

  return (
    <>
      <Menu title="Koszyk" />
      <Styles.Container maxWidth="md">
        {isBasketEmpty ? <Message /> : <BooksTable />}
        <Styles.ButtonContainer>
          <Button
            handleClick={handleClick}
            color="primary"
            variant="contained"
            customVariant="regular"
          >
            Dalej
          </Button>
        </Styles.ButtonContainer>
        <Modal modalOpened={modalOpened} setModalOpened={setModalOpened} />
      </Styles.Container>
    </>
  );
};

export default BasketPage;
