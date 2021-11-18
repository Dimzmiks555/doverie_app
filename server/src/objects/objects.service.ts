import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ImageModel } from 'src/images/entities/image.entity';
import { CreateObjectDto } from './dto/create-object.dto';
import { GetObjectsDto } from './dto/get-object.dto';
import { UpdateObjectDto } from './dto/update-object.dto';
import { ObjectsModel } from './objects.model';

@Injectable()
export class ObjectsService {
  constructor(
    @InjectModel(ObjectsModel)
    private objectsModel: typeof ObjectsModel,
  ) {}

  async create(createObjectDto: CreateObjectDto) {
    const object = await this.objectsModel.create(createObjectDto)
    return object
  }

  async findAll(query: GetObjectsDto): Promise<Object> {

    const {featured} = query

    let options: any = {
    };

    if (featured) {options.featured = true}
    console.log(featured)

    return this.objectsModel.findAndCountAll({
      include: [
        ImageModel
      ],
      where: options,
      order: [['createdAt', 'DESC']]
    });
  }

  async findOne(id: number) {
    return this.objectsModel.findOne({where: {id}, 
      include: [
        ImageModel
      ]})
  }

  async update(id: number, updateObjectDto: UpdateObjectDto) {
    const object = await this.objectsModel.update(updateObjectDto, {where: {id}})
    return object
  }

  async remove(id: number) {
    return `This action removes a #${id} object`;
  }
}