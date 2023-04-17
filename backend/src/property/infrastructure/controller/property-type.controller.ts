import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreatePropertyTypeDto } from '../dto/create-property-type.dto';
import { CreateTypeUseCase } from 'src/property/application';
import { PropertyTypeModel } from 'src/property/domain/model/property-type.model';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

import { PropertyProxyModule } from '../property-proxy/property-proxy.module';
import { UseCaseProxy } from '../property-proxy/usecases-proxy';

@Controller('property-type')
@ApiTags('PropertyType')
export class PropertyTypeController {
    constructor(
        @Inject(PropertyProxyModule.POST_TYPE_USECASES_PROXY)
        private readonly createPropertyTypeUseCase: UseCaseProxy<CreateTypeUseCase>,
    ) {}

    @Post()
    @ApiCreatedResponse({ type: PropertyTypeModel })
    async create(
        @Body() createTypeDto: CreatePropertyTypeDto,
    ): Promise<PropertyTypeModel> {
        return await this.createPropertyTypeUseCase
            .getInstance()
            .execute(createTypeDto);
    }
}
