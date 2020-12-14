import { makeStyles } from "@material-ui/core/styles";
import styled from "@emotion/styled";

export const InfoElement = styled.p`
  margin: 0 0 1px 0;
`;

const height = 150;

export const useStyles = makeStyles((theme) => ({
  tablecontainer: {
    padding: 0,
  },
  imageContainer: {
    maxWidth: height,
  },
  image: {
    width: "100%",
    height: "auto",
  },
  tablecontainer: {
    maxWidth: 700,
    margin: "0 auto",
  },
  infoContainer: {
    height: "100%",
    padding: 0,
  },
  searchIconContainer: {
    height: "100%",
  },
  headPictureCellVinal: {
    [theme.breakpoints.down("xs")]: { fontSize: 10, padding: 5 },
  },
  headInfoCellVinal: {
    [theme.breakpoints.down("xs")]: { fontSize: 10, padding: 5 },
  },
  headSettingsCellVinal: {
    [theme.breakpoints.down("xs")]: { fontSize: 10, padding: 5 },
  },
  bodyPictureCellVinal: {
    height: height,
    fontSize: 10,
    [theme.breakpoints.down("xs")]: {
      padding: "0 0 20px 5px",
    },
  },
  bodyInfoCellVinal: {
    height: height,

    [theme.breakpoints.down("xs")]: {
      fontSize: 10,
      padding: "5px 0 0 5px",
    },
  },
  bodySettingsCellVinal: {
    height: height,

    [theme.breakpoints.down("xs")]: { padding: 0, fontSize: 10 },
  },
}));
