import { UserCreateDTO } from "../models/user.model";
import { validate, validateOrReject } from "class-validator";
import {
  ClassConstructor,
  instanceToPlain,
  plainToInstance,
} from "class-transformer";
import { NextFunction, Request, Response } from "express";

export const userValidator = async (body: UserCreateDTO) => {
  const dtoObj = plainToInstance(UserCreateDTO, body, {
    excludeExtraneousValues: true,
    exposeUnsetFields: false,
  });

  const errors = await validateOrReject(dtoObj, {
    skipMissingProperties: false,
  });

  if (Array.isArray(errors)) throw errors;

  return dtoObj;
};

export const validateBody =
  (cls: ClassConstructor<unknown>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const dto: any = plainToInstance(cls, req.body, {
      excludeExtraneousValues: true,
      exposeUnsetFields: false,
    });

    const errors = await validate(dto, {
      skipMissingProperties: false,
    });

    if (Array.isArray(errors) && errors.length)
      return res.status(400).send({ statusCode: 400, message: errors });

    res.locals.dto = instanceToPlain(dto);

    next();
  };
