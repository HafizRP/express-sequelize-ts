import { Request, Response } from "express";

export const ServerResponse =
  (statusCode: number, payload: any) => (Req: Request, Res: Response) => {
    if (statusCode >= 400) {
      Res.status(statusCode).send({
        statusCode: statusCode,
        message: payload,
      });
    } else {
      Res.status(statusCode).send({ statusCode: statusCode, data: payload });
    }
  };

export type ResponseBody = {
  statusCode: number;
  message?: any;
  data?: any;
};

export interface ValidateReq extends Request {
  dto?: any;
}
