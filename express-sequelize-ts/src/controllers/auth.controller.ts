import { Request, Response } from "express";
import { User, UserCreateDTO } from "../models";
import * as argon from "argon2";
import jwt from "jsonwebtoken";
import { env } from "process";
import { tokenExpiredIn } from "../configs";

export const signIn = async (req: Request, res: Response) => {
  try {
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
};

export const signUp = async (req: Request, res: Response) => {
  try {
    const body: UserCreateDTO = res.locals.dto;

    const password = await argon.hash(body.password);

    const user: User = await User.create({
      name: body.name,
      password,
    });

    const token = jwt.sign({ name: user.name }, `${env["JWT_SECRET"]}`, {
      expiresIn: tokenExpiredIn,
    });

    delete user.password;

    res.cookie("accessToken", token);
    res.status(200).send({ statusCode: 200, data: user });
  } catch (error) {
    res.status(500).send({ statusCode: 500, message: error });
  }
};
