import styled from "@emotion/styled";
import { Container as MaterialContainer } from "@material-ui/core";

import { theme } from "assets/theme";

const { media } = theme;

export const Container = styled(MaterialContainer)`
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
