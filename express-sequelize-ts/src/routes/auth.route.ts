import { Router } from "express";
import { signIn, signUp } from "../controllers/auth.controller";
import { signToken } from "../helpers/auth.helper";
import { validateBody } from "../middlewares";
import { UserCreateDTO } from "../models/user.model";

const router = Router();

router.get("/", signIn);

router.post("/signup", [validateBody(UserCreateDTO)], signUp);

export const authRoutes = router;
