import React from "react";
import Container from "@material-ui/core/Container";

import { Menu, Table } from "components";

const BasketPage = () => {
  return (
    <>
      <Menu title="Koszyk" />
      <Container maxWidth="md">
        <Table />
      </Container>
    </>
  );
};

export default BasketPage;
