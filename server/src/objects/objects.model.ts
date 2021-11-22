import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { ImageModel } from "src/images/entities/image.entity";

@Table({tableName: 'objects'})
export class ObjectsModel extends Model {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING})
    type: string;

    @Column({type: DataType.STRING})
    kind: string;

    @Column({type: DataType.STRING})
    city: string;

    @Column({type: DataType.STRING})
    street: string;

    @Column({type: DataType.STRING})
    house: string;

    @Column({type: DataType.STRING})
    flat: string;

    @Column({type: DataType.STRING})
    area: string;

    @Column({type: DataType.INTEGER})
    rooms: number;

    @Column({type: DataType.STRING})
    description: string;

    @Column({type: DataType.INTEGER})
    price: number;

    @Column({type: DataType.INTEGER})
    square: number;
    
    @Column({type: DataType.STRING, defaultValue: '1'})
    status: string;

    @Column({type: DataType.BOOLEAN, defaultValue: false})
    featured: boolean;

    @HasMany(() => ImageModel)
    images: ImageModel[];

};