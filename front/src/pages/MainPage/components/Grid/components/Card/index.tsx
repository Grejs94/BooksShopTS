import React, { FC } from "react";
import {
  Card as CardMaterial,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";

import { useStyles } from "./styles.js";

interface Book {
  book: {
    author: string;
    cover_url: string;
    id: number;
    pages: number;
    price: number;
    title: string;
  };
  handleClick: (book: object) => void;
}

const Card: FC<Book> = ({ book, handleClick }) => {
  const classes = useStyles();

  const { cover_url, title, author, pages } = book;

  return (
    <CardMaterial className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={cover_url}
          title="Contemplative Reptile"
        />
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
    </CardMaterial>
  );
};

export default Card;
