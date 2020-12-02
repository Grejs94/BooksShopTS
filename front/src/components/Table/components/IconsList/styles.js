import styled from "@emotion/styled";

import { theme } from "assets/theme";

const { media, css } = theme;

export const Wrapper = styled.div`
  display: flex;
  justify-content: left;
  padding: 10px;

  ${media.sm} {
    padding: 14px 10px 0 14px;
  }
`;

export const Input = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 25px;
  height: 25px;
  border: none;
  padding: 0;
  ${css.md_text}

  ${media.sm} {
    margin: 0;
    ${css.xs_text}
  }
`;
