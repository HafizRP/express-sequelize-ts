import { Router, Request, Response } from "express";
import { createUser, getUserById, getUsers } from "../controllers";
import { userValidator } from "../middlewares";

const router = Router();

// router.get("/", async (req: Request, res: Response) => {
//   try {
//     const users = await getUsers({ raw: true });
//     if (Array.isArray(users))
//       return res.status(404).send({ status: false, message: "Data not found" });

//     res.status(200).send({ status: true, data: users });
//   } catch (error) {
//     res.status(500).send({ status: false, message: error });
//   }
// });

// router.get(
//   "/:userId",
//   async (req: Request<{ userId: number }>, res: Response) => {
//     try {
//       const user = await getUserById(req.params.userId);
//       if (!user)
//         return res
//           .status(404)
//           .send({ status: false, message: "User not found" });

//       res.status(200).send({ status: true, data: user });
//     } catch (error) {}
//   }
// );

// router.post("/", async (req: Request, res: Response) => {
//   try {
//     const dto = await userValidator(req.body);
//     const user = await createUser(dto);
//     res.status(201).send({ status: true, data: user });
//   } catch (error) {
//     res.status(500).send({ status: false, message: error });
//   }
// });

export const userRoutes = router;
