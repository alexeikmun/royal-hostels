export default interface UserModel {
  id: number;
  name: string;
  address: string;
  country: string;
  city: string;
  zipcode: string;
  birthday: Date;
  phone: string;
  email: string;
  role: Role;
  lastLogin?: Date;
  hashRefreshToken?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export enum Role {
  ADMIN = 'ADMIN',
  HOST = 'HOST',
  GUEST = 'GUEST',
}

export type TokenUser = {
  address: string;
  birthday: string;
  city: string;
  country: string;
  createdAt: string;
  email: string;
  hashRefreshToken: string;
  id: number;
  lastLogin: string;
  name: string;
  password: string;
  phone: string;
  role: string;
  updatedAt: string;
  zipcode: string;
};
