import React from "react";
import { Container } from "@material-ui/core";

import { Menu } from "components";
import { Form } from "./components";

const Summary = () => {
  return (
    <div>
      <Menu title="Podsumowanie zamówienia" />
      <Container maxWidth="lg">
        <Form />
      </Container>
    </div>
  );
};

export default Summary;
