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
import { CreatePropertyDto, UpdatePropertyDto } from '../dto/property.dto';
import {
    CreatePropertyUseCase,
    UpdatePropertyUseCase,
    DeletePropertyUseCase,
    FindOnePropertyUseCase,
    FindPropertiesUseCase,
} from 'src/property/application';
import { PropertyModel } from 'src/property/domain/model/property.model';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

import { PropertyUsecaseModule } from '../module/property.usecase.module';
import { UseCaseProxy } from '@shared/infrastructure/usecases-proxy/usecases-proxy';

@Controller('property')
@ApiTags('Property')
export class PropertyController {
    constructor(
        @Inject(PropertyUsecaseModule.DELETE_PROPERTY_USECASES_PROXY)
        private readonly deletePropertyUseCase: UseCaseProxy<DeletePropertyUseCase>,
        @Inject(PropertyUsecaseModule.GET_PROPERTIES_USECASES_PROXY)
        private readonly findPropertiesUseCase: UseCaseProxy<FindPropertiesUseCase>,
        @Inject(PropertyUsecaseModule.GET_PROPERTY_USECASES_PROXY)
        private readonly findOnePropertyUseCase: UseCaseProxy<FindOnePropertyUseCase>,
        @Inject(PropertyUsecaseModule.POST_PROPERTY_USECASES_PROXY)
        private readonly createPropertyUseCase: UseCaseProxy<CreatePropertyUseCase>,
        @Inject(PropertyUsecaseModule.PUT_PROPERTY_USECASES_PROXY)
        private readonly updatePropertyUseCase: UseCaseProxy<UpdatePropertyUseCase>,
    ) {}

    @Post()
    @ApiCreatedResponse({ type: PropertyModel })
    async create(
        @Body() createPropertyDto: CreatePropertyDto,
    ): Promise<PropertyModel> {
        return await this.createPropertyUseCase
            .getInstance()
            .execute(createPropertyDto);
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return await this.findOnePropertyUseCase.getInstance().execute(id);
    }

    @Put(':id')
    async update(
        @Param('id') id: number,
        @Body() updatePropertyDto: UpdatePropertyDto,
    ) {
        return await this.updatePropertyUseCase
            .getInstance()
            .execute(id, updatePropertyDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: number) {
        return await this.deletePropertyUseCase.getInstance().execute(id);
    }

    @Get()
    async find() {
        return await this.findPropertiesUseCase.getInstance().execute();
    }
}
