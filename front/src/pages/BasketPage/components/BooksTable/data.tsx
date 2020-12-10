import React from "react";
import { useSelector } from "react-redux";
import { TableRow } from "@material-ui/core";

import { showPrice } from "utils/showPrice";
import { selectBooksBasket } from "features/books/booksSlice";

import { IconsList, SettingsIcon } from "./components";
import * as Styles from "./styles";

const Data = () => {
  const basket = useSelector(selectBooksBasket);

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

  return basket.map((row: IBook) => (
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
  ));
};

export default Data;
