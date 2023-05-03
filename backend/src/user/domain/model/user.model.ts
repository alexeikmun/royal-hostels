import { Role } from 'src/auth/domain/enum/role.enum';

export class UserModel {
    id: number;
    name: string;
    address: string;
    country: string;
    city: string;
    zipcode: string;
    birthday: Date;
    contactNumber: string;
    email: string;
    role: Role;
    lastLogin?: Date;
    createdAt: Date;
    updatedAt: Date;
}
