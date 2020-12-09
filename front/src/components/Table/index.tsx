import React from "react";
import { useSelector } from "react-redux";
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

import { selectBooksBasket } from "features/books/booksSlice";
import { showPrice } from "utils/showPrice";

import { IconsList, SettingsIcon } from "./components";
import * as Styles from "./styles";

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
    <Styles.TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <Styles.TableCellHead align="center">Zdjęcia</Styles.TableCellHead>
            <Styles.TableCellHead align="center">
              Informacje
            </Styles.TableCellHead>
            <Styles.TableCellHead align="right" />
          </TableRow>
        </TableHead>
        <TableBody>
          {newRows.map((row: IBook) => (
            <TableRow key={row.id}>
              <Styles.TableCellBodyPicture component="th" scope="row">
                <Styles.ImageContainer>
                  <Styles.Image src={row.cover_url} alt="zdjęcie" />
                </Styles.ImageContainer>
              </Styles.TableCellBodyPicture>
              <Styles.TableCellBodyInfo align="left">
                <Styles.InfoContainer>
                  <Styles.InfoElement>{`Autor: ${row.author}`}</Styles.InfoElement>
                  <Styles.InfoElement>{`Tytuł: ${row.title}`}</Styles.InfoElement>
                  <Styles.InfoElement>{`Stron: ${row.pages}`}</Styles.InfoElement>
                  <Styles.InfoElement>{`Cena: ${showPrice(row.price)} ${
                    row.currency
                  }`}</Styles.InfoElement>
                  <div>
                    <IconsList value={row.value} id={row.id} />
                  </div>
                </Styles.InfoContainer>
              </Styles.TableCellBodyInfo>
              <Styles.TableCellBodySettings align="right">
                <Styles.SearchIconContainer>
                  <SettingsIcon id={row.id} />
                </Styles.SearchIconContainer>
              </Styles.TableCellBodySettings>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Styles.TableContainer>
  );
}
