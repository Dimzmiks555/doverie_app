import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateGalleryDto } from './dto/create-gallery.dto';
import { UpdateGalleryDto } from './dto/update-gallery.dto';
import { GalleryModel } from './entities/gallery.entity';

@Injectable()
export class GalleryService {
  constructor(
    @InjectModel(GalleryModel)
    private galleryModel: typeof GalleryModel,
  ) {}

  async create(files, body: CreateGalleryDto) {
    console.log(files)
    console.log(files.filename)
    console.log('t')
    const object = await this.galleryModel.create({
        src: files.filename
    })
    return object


  }

  async findAll() {
    return await this.galleryModel.findAll()
  }

  findOne(id: number) {
    return `This action returns a #${id} gallery`;
  }

  async update(id: number, updateGalleryDto: UpdateGalleryDto) {
    return await this.galleryModel.update(updateGalleryDto, {where: {id}})
  }

  async remove(id: number) {
    return await this.galleryModel.destroy({where: {id}})
  }
}
