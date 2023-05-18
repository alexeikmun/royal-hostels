import {
    Body,
    Controller,
    Delete,
    Get,
    Inject,
    Param,
    Post,
    Put,
    UseGuards,
} from '@nestjs/common';
import {
    CreateAdminDto,
    UpdateAdminDto,
} from 'src/admin/infrastructure/dto/admin.dto';
import {
    CreateAdminUseCase,
    DeleteAdminUseCase,
    FindOneAdminUseCase,
    UpdateAdminUseCase,
    FindAdminsUseCase,
} from 'src/admin/application';
import { AdminModel } from 'src/admin/domain/model/admin.model';

import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

import { AdminUsecaseModule } from '../module/admin.usecase.module';
import { UseCaseProxy } from '@shared/infrastructure/usecases-proxy/usecases-proxy';
import { JwtAuthGuard } from 'src/auth/infrastructure/guard/jwtAuth.guard';
import { Roles } from 'src/auth/infrastructure/decorator/roles.decorator';
import { Role } from 'src/auth/domain/enum/role.enum';

@Controller('admin')
@ApiTags('Admin')
export class AdminController {
    constructor(
        @Inject(AdminUsecaseModule.DELETE_ADMIN_USECASES_PROXY)
        private readonly deleteAdminUseCase: UseCaseProxy<DeleteAdminUseCase>,
        @Inject(AdminUsecaseModule.GET_ADMINS_USECASES_PROXY)
        private readonly findAdminsUseCase: UseCaseProxy<FindAdminsUseCase>,
        @Inject(AdminUsecaseModule.GET_ADMIN_USECASES_PROXY)
        private readonly findOneAdminUseCase: UseCaseProxy<FindOneAdminUseCase>,
        @Inject(AdminUsecaseModule.POST_ADMIN_USECASES_PROXY)
        private readonly createAdminUseCase: UseCaseProxy<CreateAdminUseCase>,
        @Inject(AdminUsecaseModule.PUT_ADMIN_USECASES_PROXY)
        private readonly updateAdminUseCase: UseCaseProxy<UpdateAdminUseCase>,
    ) {}
    // @UseGuards(JwtAuthGuard)
    @Post()
    @ApiCreatedResponse({ type: AdminModel })
    async create(@Body() createAdminDto: CreateAdminDto): Promise<AdminModel> {
        return await this.createAdminUseCase
            .getInstance()
            .execute(createAdminDto);
    }

    @Roles(Role.ADMIN)
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async findOne(@Param('id') id: number) {
        return await this.findOneAdminUseCase.getInstance().execute(id);
    }

    @Roles(Role.ADMIN)
    @UseGuards(JwtAuthGuard)
    @Put(':id')
    async update(
        @Param('id') id: number,
        @Body() updateAdminDto: UpdateAdminDto,
    ) {
        return await this.updateAdminUseCase
            .getInstance()
            .execute(id, updateAdminDto);
    }

    @Roles(Role.ADMIN)
    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async remove(@Param('id') id: number) {
        return await this.deleteAdminUseCase.getInstance().execute(id);
    }

    @Roles(Role.ADMIN)
    @UseGuards(JwtAuthGuard)
    @Get()
    async find() {
        return await this.findAdminsUseCase.getInstance().execute();
    }
}
