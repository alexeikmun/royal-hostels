import { UserRepository } from 'src/user/infrastructure/repository/user.repository';
import {
    IJwtService,
    IJwtServicePayload,
} from '../domain/adapters/jwt.interface';
import { IBcryptService } from '../domain/adapters/bcrypt.interface';
import { ConfigService } from '@nestjs/config';

export class LoginUseCases {
    constructor(
        private readonly config: ConfigService,
        private readonly jwtTokenService: IJwtService,
        private readonly userRepository: UserRepository,
        private readonly bcryptService: IBcryptService,
    ) {}

    async getCookieWithJwtToken(email: string) {
        const payload: IJwtServicePayload = { email };
        const secret = this.config.get<string>('JWT_SECRET');
        const expiresIn = this.config.get<number>('JWT_EXPIRATION_TIME') + 's';
        const token = this.jwtTokenService.createToken(
            payload,
            secret,
            expiresIn,
        );
        return `Authentication=${token}; HttpOnly; Path=/; Max-Age=${this.config.get<number>(
            'JWT_EXPIRATION_TIME',
        )}`;
    }

    async getCookieWithJwtRefreshToken(email: string) {
        const payload: IJwtServicePayload = { email };
        const secret = this.config.get<string>('JWT_REFRESH_TOKEN_SECRET');
        const expiresIn =
            this.config.get<string>('JWT_REFRESH_TOKEN_EXPIRATION_TIME') + 's';
        const token = this.jwtTokenService.createToken(
            payload,
            secret,
            expiresIn,
        );
        await this.setCurrentRefreshToken(email, token);
        const cookie = `Refresh=${token}; HttpOnly; Path=/; Max-Age=${this.config.get<string>(
            'JWT_REFRESH_TOKEN_EXPIRATION_TIME',
        )}`;
        return cookie;
    }

    async validateUserForLocalStragtegy(email: string, pass: string) {
        const user = await this.userRepository.findOneByEmail(email);
        if (!user) {
            return null;
        }
        const match = await this.bcryptService.compare(pass, user.password);
        if (user && match) {
            await this.updateLoginTime(user.email);
            const { password: _, ...result } = user;
            return result;
        }
        return null;
    }

    async validateUserForJWTStragtegy(email: string) {
        const user = await this.userRepository.findOneByEmail(email);
        if (!user) {
            return null;
        }
        return user;
    }

    async updateLoginTime(email: string) {
        await this.userRepository.updateLastLogin(email);
    }

    async setCurrentRefreshToken(email: string, refreshToken: string) {
        const currentHashedRefreshToken = await this.bcryptService.hash(
            refreshToken,
        );
        await this.userRepository.updateRefreshToken(
            email,
            currentHashedRefreshToken,
        );
    }

    async getUserIfRefreshTokenMatches(id: number, refreshToken: string) {
        const user = await this.userRepository.findOne(id);
        if (!user) {
            return null;
        }

        const isRefreshTokenMatching = await this.bcryptService.compare(
            refreshToken,
            user.hashRefreshToken,
        );
        if (isRefreshTokenMatching) {
            return user;
        }

        return null;
    }
}
