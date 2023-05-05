import { UserModel } from 'src/user/domain/model/user.model';

export class GuestModel extends UserModel {
    id: number;
    createdAt: Date;
    updatedAt: Date;
}
