import React from "react";
import ButtonMaterial from "@material-ui/core/Button";

import * as Styles from "./styles";

type Props = {
  handleClick?: any;
  variant: any;
  children: string;
  color: any;
  customVariant: "short" | "long" | "settings" | "regular";
};

const Button: React.FC<Props> = ({
  children,
  customVariant,
  handleClick = () => {},
  ...rest
}) => {
  const components = {
    short: (
      <Styles.ShortButton onClick={handleClick} {...rest}>
        {children}
      </Styles.ShortButton>
    ),
    long: (
      <Styles.LongButton onClick={handleClick} {...rest}>
        {children}
      </Styles.LongButton>
    ),
    settings: (
      <Styles.SettingsButton onClick={handleClick} {...rest}>
        {children}
      </Styles.SettingsButton>
    ),
    regular: (
      <ButtonMaterial onClick={handleClick} {...rest}>
        {children}
      </ButtonMaterial>
    ),
  };

  return components[customVariant];
};

export default Button;
