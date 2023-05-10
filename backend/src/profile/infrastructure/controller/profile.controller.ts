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
import { CreateProfileDto, UpdateProfileDto } from '../dto/profile.dto';
import {
    CreateProfileUseCase,
    DeleteProfileUseCase,
    FindOneProfileUseCase,
    UpdateProfileUseCase,
    FindProfilesUseCase,
} from 'src/profile/application';
import { ProfileModel } from 'src/profile/domain/model/profile.model';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

import { ProfileUsecaseModule } from '../module/profile.usecase.module';
import { UseCaseProxy } from '@shared/infrastructure/usecases-proxy/usecases-proxy';

@Controller('profile')
@ApiTags('Profile')
export class ProfileController {
    constructor(
        @Inject(ProfileUsecaseModule.DELETE_PROFILE_USECASES_PROXY)
        private readonly deleteProfileUseCase: UseCaseProxy<DeleteProfileUseCase>,
        @Inject(ProfileUsecaseModule.GET_PROFILES_USECASES_PROXY)
        private readonly findProfilesUseCase: UseCaseProxy<FindProfilesUseCase>,
        @Inject(ProfileUsecaseModule.GET_PROFILE_USECASES_PROXY)
        private readonly findOneProfileUseCase: UseCaseProxy<FindOneProfileUseCase>,
        @Inject(ProfileUsecaseModule.POST_PROFILE_USECASES_PROXY)
        private readonly createProfileUseCase: UseCaseProxy<CreateProfileUseCase>,
        @Inject(ProfileUsecaseModule.PUT_PROFILE_USECASES_PROXY)
        private readonly updateProfileUseCase: UseCaseProxy<UpdateProfileUseCase>,
    ) {}

    @Post()
    @ApiCreatedResponse({ type: ProfileModel })
    async create(
        @Body() createProfileDto: CreateProfileDto,
    ): Promise<ProfileModel> {
        return await this.createProfileUseCase
            .getInstance()
            .execute(createProfileDto);
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return await this.findOneProfileUseCase.getInstance().execute(id);
    }

    @Put(':id')
    async update(
        @Param('id') id: number,
        @Body() updateProfileDto: UpdateProfileDto,
    ) {
        return await this.updateProfileUseCase
            .getInstance()
            .execute(id, updateProfileDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: number) {
        return await this.deleteProfileUseCase.getInstance().execute(id);
    }

    @Get()
    async find() {
        return await this.findProfilesUseCase.getInstance().execute();
    }
}
