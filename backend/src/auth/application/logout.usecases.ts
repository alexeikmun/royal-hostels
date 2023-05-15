import { UserRepository } from 'src/user/infrastructure/repository/user.repository';

export class LogoutUseCases {
    constructor(private readonly userRepository: UserRepository) {}

    async execute(email: string): Promise<string[]> {
        await this.userRepository.deleteRefreshToken(email);
        return [
            'Authentication=; HttpOnly; Path=/; Max-Age=0',
            'Refresh=; HttpOnly; Path=/; Max-Age=0',
        ];
    }
}
