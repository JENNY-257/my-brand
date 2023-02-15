import { Router } from "express";
import {removeComment} from "../controllers/commentCont.js";
// import validate from "../middlewares/validate.js";


const commentRouter = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Comment:
 *       type: object
 *       required:
 *         - id
 *         - blog
 *         - name
 *         - comment
 *       properties:
 *         id:
 *           type: string
 *           description: The unique identifier for the comment.
 *         blog:
 *           type: object
 *           description: The blog associated with the comment.
 *           properties:
 *             id:
 *               type: string
 *               description: The unique identifier for the blog.
 *             title:
 *               type: string
 *               description: The title of the blog.
 *             content:
 *               type: string
 *               description: The content of the blog.
 *             summary:
 *               type: string
 *               description: The summary of the blog.
 *             image:
 *               type: file
 *               description: The image of the blog.
 *         name:
 *           type: string
 *           description: The name of the commenter.
 *         comment:
 *           type: string
 *           description: The text of the comment.
 *
 * "/api/v1/comments/:id":
 *   delete:
 *     tags:
 *       - comments
 *     summary: Delete a comment by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: The unique ID of the comment to delete
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A success message.
 *       404:
 *         description: Not Found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: An error message.
 */
commentRouter.delete("/:id", removeComment);

export default commentRouter;






// import express from "express";

// import {
//   storeComment,
//   getCommentsPerPost,
// } from "../controllers/commentCont.js";
// import validate from "../middlewares/Validate.js";

// const router = express();

// router.post("/:id/comments", validate("comment"), storeComment);
// router.get("/:id/comments", getCommentsPerPost);

// export default router;



















