import { Table, Model, Column, DataType, ForeignKey } from "sequelize-typescript";
import { ObjectsModel } from "src/objects/objects.model";

@Table({tableName: 'images'})
export class ImageModel extends Model {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(() => ObjectsModel)
    @Column({type: DataType.INTEGER})
    object_id: number;

    @Column({type: DataType.STRING})
    src: string;

    @Column({type: DataType.BOOLEAN})
    main: boolean;

    
}
