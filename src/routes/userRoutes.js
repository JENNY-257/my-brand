
import { Router } from "express";
const userRouter= Router()
import { postSignupValues } from "../controllers/userController.js";
/**
 * @swagger
 * "/api/v1/users":
 *  post:
 *     tags:
 *     - signup
 *     summary: user registration
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - userName
 *              - email
 *              - password
 *            properties:
 *              userName:
 *                type: string
 *                default: swagger
 *              email:
 *                type: string
 *                default: swaggerDoc@gmail.com
 *              password:
 *                type: string
 *                default: swagger documentation
 *              
 *     responses:
 *      201:
 *        description: User registered Successfully
 *      400:
 *       description: email Already Taken    
 */
userRouter.post("/",postSignupValues)
export default userRouter