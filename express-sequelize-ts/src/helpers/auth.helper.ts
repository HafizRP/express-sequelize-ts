import jwt from "jsonwebtoken";
import { env } from "process";

export const signToken = (payload: {
  sub: number;
  user: string | undefined;
}) => {
  return jwt.sign(payload, `${env["JWT_SECRET"]}`, { expiresIn: "24h" });
};
