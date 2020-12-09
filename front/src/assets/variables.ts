type Media = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
};

export const media: Media = {
  xs: "@media (max-width: 480px)",
  sm: "@media (max-width: 576px)",
  md: "@media (max-width: 768px)",
  lg: "@media (max-width: 992px)",
  xl: "@media (max-width: 1200px)",
  xxl: "@media (max-width: 1600px)",
};

type ThemeCss = {
  xs_text: string;
  md_text: string;
};

export const themeCss: ThemeCss = {
  xs_text: "10px",
  md_text: "12px",
};

type Css = {
  xs_text: string;
  md_text: string;
};

export const css: Css = {
  xs_text: `font-size: ${themeCss.xs_text};`,
  md_text: `font-size: ${themeCss.md_text};`,
};

type Colors = {
  black: string;
  white: string;
};

export const colors: Colors = {
  black: "black",
  white: "white",
};
