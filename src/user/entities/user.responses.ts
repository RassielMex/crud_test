import { IUser } from 'src/user/entities/user.entity';

export interface ICreateUserResponse {
  user?: IUser;
  error: boolean;
  message: string;
}
