import {
    Body,
    Controller,
    Delete,
    Get,
    Inject,
    Param,
    Post,
    Put,
} from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from '../dto/user.dto';
import {
    CreateUserUseCase,
    DeleteUserUseCase,
    FindOneUserUseCase,
    UpdateUserUseCase,
    FindUsersUseCase,
} from 'src/user/application';
import { UserModel } from 'src/user/domain/model/user.model';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

import { UserUsecaseModule } from '../module/user.usecase.module';
import { UseCaseProxy } from '@shared/infrastructure/usecases-proxy/usecases-proxy';

@Controller('user')
@ApiTags('User')
export class UserController {
    constructor(
        @Inject(UserUsecaseModule.DELETE_USER_USECASES_PROXY)
        private readonly deleteUserUseCase: UseCaseProxy<DeleteUserUseCase>,
        @Inject(UserUsecaseModule.GET_USERS_USECASES_PROXY)
        private readonly findUsersUseCase: UseCaseProxy<FindUsersUseCase>,
        @Inject(UserUsecaseModule.GET_USER_USECASES_PROXY)
        private readonly findOneUserUseCase: UseCaseProxy<FindOneUserUseCase>,
        @Inject(UserUsecaseModule.POST_USER_USECASES_PROXY)
        private readonly createUserUseCase: UseCaseProxy<CreateUserUseCase>,
        @Inject(UserUsecaseModule.PUT_USER_USECASES_PROXY)
        private readonly updateUserUseCase: UseCaseProxy<UpdateUserUseCase>,
    ) {}

    @Post()
    @ApiCreatedResponse({ type: UserModel })
    async create(
        @Body() createUserDto: CreateUserDto,
    ): Promise<UserModel> {
        return await this.createUserUseCase
            .getInstance()
            .execute(createUserDto);
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return await this.findOneUserUseCase.getInstance().execute(id);
    }

    @Put(':id')
    async update(
        @Param('id') id: number,
        @Body() updateUserDto: UpdateUserDto,
    ) {
        return await this.updateUserUseCase
            .getInstance()
            .execute(id, updateUserDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: number) {
        return await this.deleteUserUseCase.getInstance().execute(id);
    }

    @Get()
    async find() {
        return await this.findUsersUseCase.getInstance().execute();
    }
}
