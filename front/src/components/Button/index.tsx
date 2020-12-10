import React from "react";
import CreateCustomMaterialUlComponent from "utils/CreateCustomMaterialUlComponent";
import ButtonMaterial from "@material-ui/core/Button";
import * as Styles from "./styles";

type Props = {
  handleClick?: any;
  styles?: any;
  children: any;
  customVariant?: string;
  color?: string;
  variant?: string;
  type?: string;
  disabled?: boolean;
};

const Button: React.FC<Props> = ({
  handleClick,
  customVariant,
  disabled,
  ...rest
}) => (
  <CreateCustomMaterialUlComponent
    handleClick={handleClick}
    element={ButtonMaterial}
    styles={
      customVariant === "short"
        ? Styles.shortButton
        : customVariant === "long"
        ? Styles.longButton
        : customVariant === "settings"
        ? Styles.settings
        : {}
    }
    {...rest}
  />
);

export default Button;
