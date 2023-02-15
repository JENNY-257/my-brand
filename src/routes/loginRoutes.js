import { Router } from "express";
const loginRouter=Router();
import { postLoginValues } from "../controllers/loginController.js";
/**
 * @swagger
 * "/api/v1/login":
 *  post:
 *     tags:
 *     - login
 *     summary: user login
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - email
 *              - password
 *            properties:
 *              email:
 *                type: string
 *                default: email@gmail.com
 *              password:
 *                type: string
 *                default: email123
 *              
 *     responses:
 *      200:
 *        description: login successfull
 *      400:
 *        description: user doesn't exist
 *      403:
 *        description: password is invalid
 *      
 */
 
loginRouter.post("/", postLoginValues)
export default loginRouter