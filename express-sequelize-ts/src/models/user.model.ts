import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";

import { IsString, IsNotEmpty } from "class-validator";
import { Expose } from "class-transformer";
import { Role } from "./role.model";

@Table({ timestamps: true, tableName: "users" })
export class User extends Model {
  @Column({ type: DataType.STRING, allowNull: false })
  name?: string;

  @Column({ type: DataType.STRING, allowNull: false })
  password?: string;

  @ForeignKey(() => Role)
  @Column({ type: DataType.INTEGER })
  roleId?: number;

  @BelongsTo(() => Role)
  role?: Role;
}

export class UserCreateDTO {
  @IsString({})
  @IsNotEmpty()
  @Expose()
  public name!: string;

  @IsString()
  @IsNotEmpty()
  @Expose()
  public password!: string;
}
