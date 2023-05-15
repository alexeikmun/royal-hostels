import { UserModel } from 'src/user/domain/model/user.model';
import { FullUserModel } from 'src/user/domain/model/full.user.model';
import { UserRepository } from 'src/user/infrastructure/repository/user.repository';

export class IsAuthenticatedUseCases {
    constructor(private readonly adminUserRepo: UserRepository) {}

    async execute(email: string): Promise<UserModel> {
        const user: FullUserModel = await this.adminUserRepo.findOneByEmail(
            email,
        );
        if (!user) {
            return null;
        }
        return this.removePassword(user);
    }

    private removePassword(user: FullUserModel): UserModel {
        delete user.password;
        return user as UserModel;
    }
}
