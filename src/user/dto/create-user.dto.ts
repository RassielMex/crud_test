import { IsEmail, IsString, Matches, MaxLength } from 'class-validator';
import {
  ERROR_MESSAGE,
  RFC_REGEX,
  ZIP_COD_REGEX,
} from 'src/user/user.constants';
import { getErrorMessageTemplate } from 'src/user/user.helper';

export class CreateUserDto {
  @IsString({
    message: (arg) =>
      getErrorMessageTemplate(arg, ERROR_MESSAGE.MUST_BE_STRING),
  })
  @MaxLength(200, {
    message: ERROR_MESSAGE.MAX_LENGTH,
  })
  name: string;

  @IsString({
    message: (arg) =>
      getErrorMessageTemplate(arg, ERROR_MESSAGE.MUST_BE_STRING),
  })
  @IsEmail({}, { message: ERROR_MESSAGE.EMAIL })
  email: string;

  @IsString({
    message: (arg) =>
      getErrorMessageTemplate(arg, ERROR_MESSAGE.MUST_BE_STRING),
  })
  @Matches(RFC_REGEX, { message: ERROR_MESSAGE.RFC })
  rfc: string;

  @IsString({
    message: (arg) =>
      getErrorMessageTemplate(arg, ERROR_MESSAGE.MUST_BE_STRING),
  })
  @Matches(ZIP_COD_REGEX, { message: ERROR_MESSAGE.ZIP_CODE })
  zipCode: string;
}
