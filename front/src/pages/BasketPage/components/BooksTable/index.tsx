import React from "react";
import {
  Table as MaterialTable,
  TableBody,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

import Data from "./data";
import * as Styles from "./styles";

export default function BooksTable() {
  return (
    <Styles.TableContainer component={Paper}>
      <MaterialTable aria-label="simple table">
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
          <Data />
        </TableBody>
      </MaterialTable>
    </Styles.TableContainer>
  );
}
