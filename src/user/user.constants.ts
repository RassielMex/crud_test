export const RFC_REGEX: RegExp = /^[A-Z]{4}\d{6}[A-Z0-9]{3}$/;
export const ZIP_COD_REGEX: RegExp = /^\d{5}$/;

export const ERROR_MESSAGE = {
  EMAIL: 'Email invalido',
  RFC: 'RFC en formato invalido',
  ZIP_CODE: 'Código postal invalido',
  MAX_LENGTH: 'Longitud máx 200 caracteres',
  MUST_BE_STRING: 'debe ser string',
};

export const RESPONSE_ERROR = {
  EXISTING_RECORD: 'Usuario ya existe en la base',
  GENERAL_ERROR: 'Algo sucedió en la DB',
  NO_EXISTING_RECORD: 'No se encuentra disponible el usuario con ese ID',
};

export const RESPONSE_SUCCESS = {
  CREATED: 'Usuario creado con éxito',
  DELETED: 'Usuario eliminado',
};
