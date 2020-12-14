import { makeStyles } from "@material-ui/core/styles";
import styled from "@emotion/styled";
import { MenuItem as MaterialMenuItem } from "@material-ui/core";

import { theme } from "assets/theme";

const { media, css } = theme;

export const MenuItem = styled(MaterialMenuItem)`
  ${media.sm} {
    ${css.md_text}
    padding: 0 8px;
    min-height: 18px;
  }
`;

export const useStyles = makeStyles((theme) => ({
  button: {
    minWidth: 0,
    padding: "5px 5px 0 0",
  },
}));
