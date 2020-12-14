import React from "react";
import { withStyles } from "@material-ui/core/styles";

interface Props {
  styles: any;
  element: any;
  children: any;
  handleClick: any;
}

const CreateCustomMaterialUlInput: React.FC<Props> = ({
  styles,
  element,
  children,
  handleClick,
  ...rest
}) => {
  const StyledElement = withStyles(styles)(element);

  return (
    <StyledElement onClick={handleClick} {...rest}>
      {children}
    </StyledElement>
  );
};

export default CreateCustomMaterialUlInput;
