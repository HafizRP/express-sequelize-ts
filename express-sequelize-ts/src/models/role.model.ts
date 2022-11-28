import { Column, Model, Table, DataType, HasMany } from "sequelize-typescript";
import { User } from "./user.model";

@Table({ timestamps: false, tableName: "roles" })
export class Role extends Model {
  @Column({ type: DataType.STRING })
  role!: string;

  @HasMany(() => User)
  users!: User[];
}
