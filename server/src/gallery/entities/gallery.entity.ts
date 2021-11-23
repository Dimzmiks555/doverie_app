
import { Table, Model, Column, DataType, ForeignKey } from "sequelize-typescript";
import { ObjectsModel } from "src/objects/objects.model";

@Table({tableName: 'gallery'})
export class GalleryModel extends Model {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING})
    src: string;

    
}
