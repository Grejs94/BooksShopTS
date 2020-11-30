import React from "react";
import { useSelector } from "react-redux";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

import { selectBooksBasket } from "features/books/booksSlice";

import { useStyles, InfoElement } from "./styles";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

interface Book {
  author: string;
  cover_url: string;
  currency: string;
  id: number;
  pages: number;
  price: number;
  title: string;
  value: number;
}

export default function BasicTable() {
  const basket = useSelector(selectBooksBasket);
  console.log(basket);

  const classes = useStyles();

  const newRows = basket.map((book: Book) => {
    const { author, title, pages, price, currency, cover_url, id } = book;
    return {
      author,
      title,
      pages,
      price,
      currency,
      cover_url,
      id,
    };
  });

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];

  return (
    <TableContainer component={Paper} className={classes.tablecontainer}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={(classes.pictureCell, classes.tableCell)}>
              Pictures
            </TableCell>
            <TableCell
              align="left"
              className={(classes.infoCell, classes.tableCell)}
            >
              Info
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {newRows.map((row: Book) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                <div className={classes.imageContainer}>
                  <img
                    className={classes.image}
                    src={row.cover_url}
                    alt="zdjęcie"
                  />
                </div>
              </TableCell>
              <TableCell
                align="left"
                className={(classes.infoCell, classes.tableCell)}
              >
                <div className={classes.infoContainer}>
                  <InfoElement>{`Author: ${row.author}`}</InfoElement>
                  <InfoElement>{`Title: ${row.title}`}</InfoElement>
                  <InfoElement>{`Pages: ${row.pages}`}</InfoElement>
                  <InfoElement>{`Price: ${row.price} ${row.currency}`}</InfoElement>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
