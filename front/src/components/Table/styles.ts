import styled from "@emotion/styled";
import {
  TableCell as MaterialTableCell,
  TableContainer as MaterialTableContainer,
} from "@material-ui/core";

import { theme } from "assets/theme";

const { media } = theme;

let cellHeight = 150;

export const SearchIconContainer = styled.div`
  height: 100%;
`;

export const InfoContainer = styled.div`
  height: 100%;
  padding: 0;
`;

export const ImageContainer = styled.div`
  max-width: ${cellHeight}px;
`;

export const TableCellBodyPicture = styled(MaterialTableCell)`
  height: ${cellHeight}px;
  font-size: 10px;

  ${media.sm} {
    padding: 0 0 20px 5px;
  }
`;
export const TableCellBodyInfo = styled(MaterialTableCell)`
  height: ${cellHeight}px;

  ${media.sm} {
    font-size: 10px;
    padding: 5px 0 0 5px;
  }
`;

export const TableCellBodySettings = styled(MaterialTableCell)`
  height: ${cellHeight}px;

  ${media.xs} {
    font-size: 10px;
    padding: 0;
  }
`;

export const TableCellHead = styled(MaterialTableCell)`
  ${media.xs} {
    font-size: 10px;
    padding: 5px;
  }
`;

export const TableContainer = styled<any>(MaterialTableContainer)`
max-width: 700px,
margin: 0 auto,
padding: 0,
`;

export const InfoElement = styled.p`
  margin: 0 0 1px 0;
`;

export const Image = styled.img`
width: 100%;
height: auto";
`;
