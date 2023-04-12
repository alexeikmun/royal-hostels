import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common';
import { CreatePropertyDto } from '../dto/create-property.dto';
import { UpdatePropertyDto } from '../dto/update-property.dto';
import {
    CreatePropertyUseCase,
    UpdatePropertyUseCase,
    DeletePropertyUseCase,
    FindOnePropertyUseCase,
} from 'src/property/application';
import { PropertyModel } from 'src/property/domain/model/property.model';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

@Controller('property')
@ApiTags('Property')
export class PropertyController {
    constructor(
        private readonly createPropertyUseCase: CreatePropertyUseCase,
        private readonly updatePropertyUseCase: UpdatePropertyUseCase,
        private readonly deletePropertyUseCase: DeletePropertyUseCase,
        private readonly findOnePropertyUseCase: FindOnePropertyUseCase,
    ) {}

    @Post()
    @ApiCreatedResponse({ type: PropertyModel })
    async create(
        @Body() createPropertyDto: CreatePropertyDto,
    ): Promise<PropertyModel> {
        return await this.createPropertyUseCase.execute(createPropertyDto);
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return await this.findOnePropertyUseCase.execute(id);
    }

    @Put(':id')
    async update(
        @Param('id') id: number,
        @Body() updatePropertyDto: UpdatePropertyDto,
    ) {
        return await this.updatePropertyUseCase.execute(id, updatePropertyDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: number) {
        return await this.deletePropertyUseCase.execute(id);
    }
}
