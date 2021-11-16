import { Module } from '@nestjs/common';
import { ImagesService } from './images.service';
import { ImagesController } from './images.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ImageModel } from './entities/image.entity';

@Module({
  controllers: [ImagesController],
  providers: [ImagesService],
  imports: [
    SequelizeModule.forFeature([ImageModel])
  ]
})
export class ImagesModule {}
