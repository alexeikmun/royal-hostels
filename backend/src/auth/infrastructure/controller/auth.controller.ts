import {
    Body,
    Headers,
    Controller,
    Get,
    Inject,
    Post,
    Req,
    Request,
    UseGuards,
} from '@nestjs/common';
import {
    ApiBearerAuth,
    ApiBody,
    ApiExtraModels,
    ApiOperation,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';

import { UseCaseProxy } from '@shared/infrastructure/usecases-proxy/usecases-proxy';

import {
    IsAuthenticatedUseCases,
    LoginUseCases,
    LogoutUseCases,
} from 'src/auth/application';
import { JwtAuthGuard } from '../guard/jwtAuth.guard';
import JwtRefreshGuard from '../guard/jwtRefresh.guard';
import { LocalGuard } from '../guard/local.guard';
import { AuthUsecasesModule } from '../module/auth.usecase.module';
import { AuthLoginDto } from '../dto/auth.dto';
import { IsAuthDto } from '../dto/isAuth.dto';
import { ExceptionsService } from '@shared/infrastructure/service/exceptions.service';
import { LogoutDto } from '../dto/logout.dto';

@Controller('auth')
@ApiTags('auth')
@ApiResponse({
    status: 401,
    description: 'No authorization token was found',
})
@ApiResponse({ status: 500, description: 'Internal error' })
export class AuthController {
    constructor(
        @Inject(AuthUsecasesModule.LOGIN_USECASES_PROXY)
        private readonly loginUsecaseProxy: UseCaseProxy<LoginUseCases>,
        @Inject(AuthUsecasesModule.LOGOUT_USECASES_PROXY)
        private readonly logoutUsecaseProxy: UseCaseProxy<LogoutUseCases>,
        @Inject(AuthUsecasesModule.IS_AUTHENTICATED_USECASES_PROXY)
        private readonly isAuthUsecaseProxy: UseCaseProxy<IsAuthenticatedUseCases>,
        private readonly exceptionService: ExceptionsService,
    ) {}

    @Post('login')
    @ApiBearerAuth()
    @UseGuards(LocalGuard)
    @ApiBody({ type: AuthLoginDto })
    @ApiOperation({ description: 'login' })
    async login(@Body() auth: AuthLoginDto, @Request() request: any) {
        const accessToken = await this.loginUsecaseProxy
            .getInstance()
            .createJwtToken(auth.email);

        const accessTokenCookie = await this.loginUsecaseProxy
            .getInstance()
            .getCookieWithJwtToken(accessToken);

        const refreshToken = await this.loginUsecaseProxy
            .getInstance()
            .createJwtRefreshToken(auth.email);

        const refreshTokenCookie = this.loginUsecaseProxy
            .getInstance()
            .getCookieWithJwtRefreshToken(refreshToken);

        request.res.setHeader('Set-Cookie', [
            accessTokenCookie,
            refreshTokenCookie,
        ]);
        return { accessToken, refreshToken };
    }

    @Post('logout')
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @ApiBody({ type: LogoutDto })
    @ApiOperation({ description: 'logout' })
    async logout(@Body() auth, @Request() request: any) {
        const cookie = await this.logoutUsecaseProxy
            .getInstance()
            .execute(auth.email);
        request.res.setHeader('Set-Cookie', cookie);
        return 'Logout successful';
    }

    @Post('is-authenticated')
    @ApiBearerAuth()
    @ApiBody({ type: IsAuthDto })
    @UseGuards(JwtAuthGuard)
    async isAuthenticated(@Body() auth: IsAuthDto) {
        const user = await this.isAuthUsecaseProxy
            .getInstance()
            .execute(auth.email);

        if (!user) {
            this.exceptionService.notFoundException({
                message: 'User not found',
            });
        }
        return { user };
    }

    @Post('refresh')
    @UseGuards(JwtRefreshGuard)
    @ApiBearerAuth()
    async refresh(@Body() auth, @Request() request: any) {
        const accessToken = await this.loginUsecaseProxy
            .getInstance()
            .createJwtToken(auth.email);

        const accessTokenCookie = await this.loginUsecaseProxy
            .getInstance()
            .getCookieWithJwtToken(accessToken);

        const refreshToken = await this.loginUsecaseProxy
            .getInstance()
            .createJwtRefreshToken(auth.email);

        const refreshTokenCookie = this.loginUsecaseProxy
            .getInstance()
            .getCookieWithJwtRefreshToken(refreshToken);

        request.res.setHeader('Set-Cookie', [
            accessTokenCookie,
            refreshTokenCookie,
        ]);
        return { accessToken, refreshToken };
    }
}
