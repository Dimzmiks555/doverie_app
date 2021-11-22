import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { ImageModel } from './entities/image.entity';

@Injectable()
export class ImagesService {

  constructor(
    @InjectModel(ImageModel)
    private imagesModel: typeof ImageModel,
  ) {}

  async create(files, body: CreateImageDto) {
    console.log(files)
    console.log(files.filename)
    console.log('t')
    const object = await this.imagesModel.create({
        src: files.filename,
        object_id: body.id,
        main: false
    })
    return object


  }

  findAll() {
    return `This action returns all images`;
  }

  findOne(id: number) {
    return `This action returns a #${id} image`;
  }

  async update(id: number, updateImageDto: UpdateImageDto) {
    return await this.imagesModel.update(updateImageDto, {where: {id}})
  }

  async remove(id: number) {
    return await this.imagesModel.destroy({where: {id}})
  }
}
