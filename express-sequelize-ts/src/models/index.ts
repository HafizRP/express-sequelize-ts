import { Sequelize } from "sequelize-typescript";
import { Role } from "./role.model";
import { User } from "./user.model";
import { env } from "process";

export const connection = new Sequelize({
  dialect: "mariadb",
  host: env["DB_HOST"],
  username: env["DB_USERNAME"],
  password: env["DB_PASSWORD"],
  database: env["DATABASE"],
  logging: false,
  models: [User, Role],
});

export * from "./role.model";
export * from "./user.model";
