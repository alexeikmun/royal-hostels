import { UserModel } from 'src/user/domain/model/user.model';
import { FullUserModel } from 'src/user/domain/model/full.user.model';
import { UserRepository } from 'src/user/infrastructure/repository/user.repository';

export class IsAuthenticatedUseCases {
    constructor(private readonly adminUserRepo: UserRepository) {}

    async execute(id: number): Promise<UserModel> {
        const user: FullUserModel = await this.adminUserRepo.findOne(id);
        const { password: _, ...info } = user;
        return info;
    }
}
