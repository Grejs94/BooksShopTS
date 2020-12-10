import styled from "@emotion/styled";

import { theme } from "assets/theme";

const { colors } = theme;

export const BodyWrapper = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  width: 400px;
  background-color: ${colors.white};
  border: 2px solid ${colors.black};
  box-shadow: 0px 0px 6px 0.5px ${colors.black};
  padding: 16px 32px 24px;
`;
