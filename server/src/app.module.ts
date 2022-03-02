import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ObjectsModel } from './objects/objects.model';
import { ObjectsModule } from './objects/objects.module';
import { ImagesModule } from './images/images.module';
import { ImageModel } from './images/entities/image.entity';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { GalleryModule } from './gallery/gallery.module';
import { GalleryModel } from './gallery/entities/gallery.entity';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'doverie',
      models: [ObjectsModel, ImageModel, GalleryModel],
      autoLoadModels: true,
      synchronize: true,
      sync: { alter: true },
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
    }),
    ObjectsModule,
    ImagesModule,
    GalleryModule,
  ],
})
export class AppModule {}
