export const composeValidators = (...validators: any[]) => (value: string) =>
  validators.reduce((error, validator) => error || validator(value), undefined);

export function isRequired(value: string): string | undefined {
  return value ? undefined : "Required";
}

export function isValidEmail(value: string): string | undefined {
  return /\S+@\S+\.\S+/.test(value) ? undefined : "Invalid Email";
}

export function isValidZip_code(value: string): string | undefined {
  return /\d{2}-\d{3}/.test(value) ? undefined : "Invalid Email";
}

export function isValidFirstName(value: string): string | undefined {
  return value.length >= 4
    ? undefined
    : "firstname length must be at least 4 characters long";
}

export function isValidLastName(value: string): string | undefined {
  return value.length >= 5
    ? undefined
    : "firstname length must be at least 5 characters long";
}
