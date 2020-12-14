import React from "react";
import { useDispatch } from "react-redux";

import {
  incrementValue,
  decrementValue,
  setValue,
} from "features/books/booksSlice";
import { Button } from "components";

import * as Styles from "./styles";

interface Props {
  value: number;
  id: number;
}

const IconsList: React.FC<Props> = ({ value, id }) => {
  const dispatch = useDispatch();

  const handleDecrement = () => {
    if (value === 1) {
      return;
    }

    dispatch(decrementValue(id));
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setValue({ id: id, value: e.target.value }));
  };

  return (
    <Styles.Wrapper>
      <Button
        handleClick={handleDecrement}
        color="primary"
        customVariant="short"
        variant="contained"
      >
        -
      </Button>
      <Styles.Input value={value} onChange={handleOnChange} />
      <Button
        handleClick={() => dispatch(incrementValue(id))}
        color="primary"
        variant="contained"
        customVariant="short"
      >
        +
      </Button>
    </Styles.Wrapper>
  );
};

export default IconsList;
