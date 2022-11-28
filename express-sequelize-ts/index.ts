import "reflect-metadata";
import "dotenv/config";

import express, { Application, Request, Response } from "express";
import { connection } from "./src/models";
import { authRoutes, userRoutes } from "./src/routes";

const app: Application = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use("/auth", authRoutes);
app.use("/users", userRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello TS & Express");
});

app.listen(port, async () => {
  await connection.sync({ force: true });
});

export default app;
