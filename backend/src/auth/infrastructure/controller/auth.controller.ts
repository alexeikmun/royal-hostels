import {
    Body,
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
import { LocalGuard } from '../guard/login.guard';
import { AuthUsecasesModule } from '../module/auth.usecase.module';
import { AuthLoginDto } from '../dto/auth.dto';

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
    ) {}

    @Post('login')
    @ApiBearerAuth()
    // LocalGuard is not working properly
    // TODO: conect LocalGuard with LocalStrategy
    @UseGuards(LocalGuard)
    @ApiBody({ type: AuthLoginDto })
    @ApiOperation({ description: 'login' })
    async login(@Body() auth: AuthLoginDto, @Request() request: any) {
        const accessTokenCookie = await this.loginUsecaseProxy
            .getInstance()
            .getCookieWithJwtToken(auth.email);
        const refreshTokenCookie = await this.loginUsecaseProxy
            .getInstance()
            .getCookieWithJwtRefreshToken(auth.email);
        request.res.setHeader('Set-Cookie', [
            accessTokenCookie,
            refreshTokenCookie,
        ]);
        return 'Login successful';
    }

    @Post('logout')
    @UseGuards(JwtAuthGuard)
    @ApiOperation({ description: 'logout' })
    async logout(@Request() request: any) {
        const cookie = await this.logoutUsecaseProxy.getInstance().execute();
        request.res.setHeader('Set-Cookie', cookie);
        return 'Logout successful';
    }

    @Get('is-authenticated')
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @ApiOperation({ description: 'is_authenticated' })
    async isAuthenticated(@Req() request: any) {
        const user = await this.isAuthUsecaseProxy
            .getInstance()
            .execute(request.user.email);
        return { user };
    }

    @Get('refresh')
    @UseGuards(JwtRefreshGuard)
    @ApiBearerAuth()
    async refresh(@Req() request: any) {
        const accessTokenCookie = await this.loginUsecaseProxy
            .getInstance()
            .getCookieWithJwtToken(request.user.email);
        request.res.setHeader('Set-Cookie', accessTokenCookie);
        return 'Refresh successful';
    }
}
