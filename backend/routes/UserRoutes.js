import express from "express";
import RegisterUser from "../controllers/RegisterUser.js";
import LoginUser from "../controllers/LoginUser.js";
import { getAccesToken, stkPush } from "../controllers/mpesaController.js";
const router = express.Router();

router.route("/register").post(RegisterUser);

router.route("/login").post(LoginUser);

router.post("/stkPush", getAccesToken, stkPush);

export default router;
