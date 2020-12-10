import { createMuiTheme } from "@material-ui/core/styles";

import { colors, media, font } from "./variables";

export const theme = {
  colors,
  media,
  font,
};

export const themeMaterial = createMuiTheme(theme);
