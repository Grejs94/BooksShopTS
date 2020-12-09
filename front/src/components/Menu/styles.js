import styled from "@emotion/styled";
import { Toolbar as MaterialToolbar } from "@material-ui/core";

const GrowingDiv = styled.div`
  flex-grow: 1;
  margin-bottom: 40px;
`;

const Toolbar = styled(MaterialToolbar)`
  margin-bottom: 40px;
`;

export default {
  GrowingDiv,
  Toolbar,
};
