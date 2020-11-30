import { makeStyles } from "@material-ui/core/styles";
import styled from "@emotion/styled";

export const InfoElement = styled.p`
  margin: 0 0 1px 0;
`;

const elementWidth = 100;

// export const useStyles = makeStyles((theme) => ({
//   button: {
//     margin: theme.spacing(1),
//     marginBottom: 0,

//     [theme.breakpoints.down("xs")]: {
//       fontSize: "8px",
//       lineHeight: "15px",
//       margin: "3px 3px 0",
//     },

export const useStyles = makeStyles((theme) => ({
  imageContainer: {
    maxWidth: elementWidth,
  },
  image: {
    width: "100%",
    height: "auto",
  },
  tablecontainer: {
    maxWidth: 700,
    margin: "0 auto",
  },
  pictureCell: {
    width: 100,
  },
  infoContainer: {
    height: elementWidth,
    padding: 0,
  },
  infoCell: { padding: 0 },
  tableCell: {},
}));
