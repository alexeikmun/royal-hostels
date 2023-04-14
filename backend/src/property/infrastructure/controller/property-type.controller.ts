import { Body, Controller, Post } from '@nestjs/common';
import { CreatePropertyTypeDto } from '../dto/create-property-type.dto';
import { CreateTypeUseCase } from 'src/property/application';
import { PropertyTypeModel } from 'src/property/domain/model/property-type.model';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

@Controller('property-type')
@ApiTags('PropertyType')
export class PropertyTypeController {
    constructor(
        private readonly createPropertyTypeUseCase: CreateTypeUseCase,
    ) {}

    @Post()
    @ApiCreatedResponse({ type: PropertyTypeModel })
    async create(
        @Body() createTypeDto: CreatePropertyTypeDto,
    ): Promise<PropertyTypeModel> {
        return await this.createPropertyTypeUseCase.execute(createTypeDto);
    }
}
