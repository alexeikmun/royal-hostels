import { UserModel } from 'src/user/domain/model/user.model';

export class AdminModel extends UserModel {
    id: number;
    isSuper: boolean;
    createdAt: Date;
    updatedAt: Date;
}
