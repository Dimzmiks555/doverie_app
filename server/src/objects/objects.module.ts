import { Module } from '@nestjs/common';
import { ObjectsService } from './objects.service';
import { ObjectsController } from './objects.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ObjectsModel } from './objects.model';

@Module({
  controllers: [ObjectsController],
  providers: [ObjectsService],
  imports: [
    SequelizeModule.forFeature([ObjectsModel])
  ]
})
export class ObjectsModule {} 
