import * as React from "react";
import { FieldRenderProps } from "react-final-form";

import * as Styles from "./styles";

interface TextInputProps extends FieldRenderProps<string, any> {
  /**
   * The type of the input to be used for the type attribute
   */
  type?: string;
  /**
   * The label text to be shown for the input
   */
  label?: string;
  /**
   * If you would like an ID to be assigned to the input
   */
  id?: string;
  /**
   * Is the input required to for form submission
   */
  required?: boolean;
}
export const TextInput: React.FC<TextInputProps> = ({
  label,
  input,
  type,
  meta,
}) => {
  const { name } = input;
  return (
    <Styles.FieldContainer>
      <label htmlFor={name}>{label}</label>
      <input type={type} {...input} />
      {meta.error && meta.touched && <span>{meta.error}</span>}
    </Styles.FieldContainer>
  );
};
