import React from "react";

import * as Styles from "./styles";

interface Props {}

const Message: React.FC<Props> = () => {
  return <Styles.Wrapper>Twój koszyk jest pusty!</Styles.Wrapper>;
};

export default Message;
