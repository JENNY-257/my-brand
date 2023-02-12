import { Router } from "express";
const loginRouter=Router();
import { postLoginValues } from "../controllers/loginController.js";

loginRouter.post("/",postLoginValues)
export default loginRouter