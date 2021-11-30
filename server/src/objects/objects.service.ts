import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op, OrderItem } from 'sequelize';
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

    const {featured, type, kind, priceFrom, priceTo, status, rooms, area, limit, page, squareFrom, squareTo, order, last} = query

    let options: any = {};

    let orderFilter : OrderItem = ['createdAt', 'DESC']

    if (type) {options.type = type}
    console.log(last)
    if (last) {options.id = {[Op.in]: last.split(',')}  }
    if (kind) {options.kind = kind}
    if (status) {options.status = status}
    if (area) {options.area = area}
    if (featured) { options.featured = featured}

    if (priceFrom &&  priceFrom != 'null') {options.price = {[Op.gte]: +priceFrom}}
    if (priceTo &&  priceTo != 'null') {options.price = {[Op.lte]: +priceTo}}
    
    if (priceFrom && priceTo && priceFrom != 'null' && priceTo != 'null') {options.price = {[Op.between]: [+priceFrom, +priceTo]}}

    if (squareFrom &&  squareFrom != 'null') {options.square = {[Op.gte]: +squareFrom}}
    if (squareTo &&  squareTo != 'null') {options.square = {[Op.lte]: +squareTo}}
    
    if (squareFrom && squareTo && squareFrom != 'null' && squareTo != 'null') {options.square = {[Op.between]: [+squareFrom, +squareTo]}}
    console.log(query)


    if (rooms) {

      let roomsFilter = rooms.split(',')

      options.rooms = {[Op.in]: roomsFilter}
    }
    let limitPage = 10
    let offset = 0

    if (page) { offset = limit * (page - 1)}

    if (order) { orderFilter = ['price', order]}
    
    if (limit) { limitPage = limit}

    

    console.log(featured)

    return this.objectsModel.findAndCountAll({
      include: [
        ImageModel
      ],
      where: options,
      limit: limit,
      order: [orderFilter],
      offset: offset
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
