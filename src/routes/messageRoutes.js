import {Router} from "express"
//  import validate from "../middlewares/validate.js";
// import messagesValidationSchema from "../validations/messageValidate.js"
 const router=Router()
 import { newMessage, getAllQuerries } from "../controllers/query.js";
 /**
 * @swagger
 * /api/v1/messages:
 *   post:
 *     tags:
 *       - messages
 *     summary: Create a new message
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the message sender.
 *               phone:
 *                 type: string
 *                 format: email
 *                 description: Email of the message sender.
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Email of the message sender.
 *               message:
 *                 type: string
 *                 description: Content of the message.
 *             required:
 *               - name
 *               - email
 *               - message
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Message'
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message.
 */

router.post("/messages",newMessage)
/**
 * @swagger
 * /api/v1/messages:
 *   get:
 *     tags:
 *       - messages
 *     summary: Get all messages
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: The unique identifier for the message.
 *                   name:
 *                     type: string
 *                     description: The name of the sender.
 *                   phone:
 *                     type: number
 *                     description: The phone of the sender.
 *                   email:
 *                     type: string
 *                     description: The email of the sender.
 *                   message:
 *                     type: string
 *                     description: The content of the message.
 *       404:
 *         description: Not Found
 */
 router.get("/messages",getAllQuerries);
 export default router
