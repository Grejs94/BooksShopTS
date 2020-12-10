import React, { FC } from "react";
import {
  CardActionArea,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";

import { DataItem } from "interfaces/books";

import * as Styles from "./styles";

type Props = {
  book: Required<DataItem>;
  handleClick: (book: object) => void;
};

const Card: FC<Props> = ({ book, handleClick }) => {
  const { cover_url, title, author, pages } = book;
  return (
    <Styles.CardMaterial>
      <CardActionArea>
        <Styles.CardMedia image={cover_url} title="Contemplative Reptile" />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h4">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {`Autor: ${author}`}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {`Liczba stron: ${pages}`}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={handleClick}>
          DODAJ DO KOSZYKA
        </Button>
      </CardActions>
    </Styles.CardMaterial>
  );
};

export default Card;
