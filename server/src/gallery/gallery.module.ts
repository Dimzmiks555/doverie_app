import { Module } from '@nestjs/common';
import { GalleryService } from './gallery.service';
import { GalleryController } from './gallery.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { GalleryModel } from './entities/gallery.entity';

@Module({
  controllers: [GalleryController],
  providers: [GalleryService],
  imports: [
    SequelizeModule.forFeature([GalleryModel])
  ]
})
export class GalleryModule {}
