import { createMuiTheme } from "@material-ui/core/styles";

import { colors, media, css, themeCss } from "./variables";

export const theme = {
  colors,
  media,
  css,
  themeCss,
};

export const themeMaterial = createMuiTheme(theme);
