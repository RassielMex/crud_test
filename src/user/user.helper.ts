import { ValidationArguments } from 'class-validator';

export const getErrorMessageTemplate = (
  arg: ValidationArguments,
  message: string,
) => `${arg.property} ${message}`;
