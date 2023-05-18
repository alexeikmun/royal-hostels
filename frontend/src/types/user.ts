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
  createdAt: Date;
  updatedAt: Date;
}

export enum Role {
  ADMIN = 'ADMIN',
  HOST = 'HOST',
  GUEST = 'GUEST',
}
