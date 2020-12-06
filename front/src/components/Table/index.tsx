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

import { IconsList, SettingsIcon } from "./components";
import { useStyles, InfoElement } from "./styles";

interface IBook {
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

  const classes = useStyles();

  const newRows = basket.map((book: IBook) => {
    const {
      author,
      title,
      pages,
      price,
      currency,
      cover_url,
      id,
      value,
    } = book;
    return {
      author,
      title,
      pages,
      price,
      currency,
      cover_url,
      id,
      value,
    };
  });

  return (
    <TableContainer component={Paper} className={classes.tablecontainer}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" className={classes.headPictureCellVinal}>
              Zdjęcia
            </TableCell>
            <TableCell align="center" className={classes.headInfoCellVinal}>
              Informacje
            </TableCell>
            <TableCell
              align="right"
              className={classes.headSettingsCellVinal}
            />
          </TableRow>
        </TableHead>
        <TableBody>
          {newRows.map((row: IBook) => (
            <TableRow key={row.id}>
              <TableCell
                component="th"
                scope="row"
                className={classes.bodyPictureCellVinal}
              >
                <div className={classes.imageContainer}>
                  <img
                    className={classes.image}
                    src={row.cover_url}
                    alt="zdjęcie"
                  />
                </div>
              </TableCell>
              <TableCell align="left" className={classes.bodyInfoCellVinal}>
                <div className={classes.infoContainer}>
                  <InfoElement>{`Autor: ${row.author}`}</InfoElement>
                  <InfoElement>{`Tytuł: ${row.title}`}</InfoElement>
                  <InfoElement>{`Stron: ${row.pages}`}</InfoElement>
                  <InfoElement>{`Cena: ${row.price} ${row.currency}`}</InfoElement>
                  <div>
                    <IconsList value={row.value} id={row.id} />
                  </div>
                </div>
              </TableCell>
              <TableCell
                align="right"
                className={classes.bodySettingsCellVinal}
              >
                <div className={classes.searchIconContainer}>
                  <SettingsIcon id={row.id} />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
