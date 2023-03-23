import {UserRole} from './user-role.enum';

export interface User {
  _id?: string;
  email: string;
  firstname: string;
  lastname: string;
  dateRegistration: Date;
  avatar: string;
  passwordHash: string;
  role: UserRole;
}
