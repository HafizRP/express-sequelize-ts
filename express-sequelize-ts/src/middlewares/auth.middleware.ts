import { NextFunction, Request, Response } from "express";
import { env } from "process";
import jwt from "jsonwebtoken";
import { tokenExpiredIn } from "../configs/auth.configs";

export const signToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const payload = {};
  const token = jwt.sign(payload, `${env["TOKEN_SECRETKEY"]}`, {
    expiresIn: tokenExpiredIn,
  });

  res.locals.accessToken = token;

  next();
};
