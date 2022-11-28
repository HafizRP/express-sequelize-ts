import { User, UserCreateDTO } from "../models/user.model";

export const getUsers = (options: any) => {
  return User.findAll(options);
};

export const getUser = (user: User) => {
  return User.findOne({ where: { ...user } });
};

export const getUserById = (userId: number) => {
  return User.findByPk(userId);
};

export const createUser = async (dto: UserCreateDTO) => {
  return User.create({ ...dto });
};

export const updateUser = async (id: number, payload: { name: string }) => {
  return User.update(payload, { where: { id: id } });
};

export const deleteUser = (userId: number) => {
  return User.destroy({ where: { id: userId } });
};
