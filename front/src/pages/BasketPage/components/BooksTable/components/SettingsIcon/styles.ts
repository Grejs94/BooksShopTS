import styled from "@emotion/styled";
import {
  MenuItem as MaterialMenuItem,
  IconButton as MaterialIconButton,
} from "@material-ui/core";

import { theme } from "assets/theme";

const { media, font } = theme;

export const MenuItem = styled(MaterialMenuItem)`
  ${media.sm} {
    font-size: ${font.size.xs};
    padding: 0 8px;
    min-height: 18px;
  }
`;

export const IconButton = styled(MaterialIconButton)`
  min-width: 0;
  padding: 5px 5px 0 0;
`;
