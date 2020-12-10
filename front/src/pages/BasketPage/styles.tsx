import styled from "@emotion/styled";

import { theme } from "assets/theme";

const { media } = theme;

export const Container = styled.div`
  width: 100%;
  display: block;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;

  ${media.xs} {
    margin: 0 auto;
    padding: 0;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin: 20px;
  justify-content: center;
`;
