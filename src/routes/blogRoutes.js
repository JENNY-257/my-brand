/**
 * @swagger
 * tags:
 *   name: Blogs
 *   description: Blogs  api
 * /api/v1/blogs:
 *   get:
 *     summary: Get all blogs
 *     tags: [Blogs]
 *     responses:
 *       200:
 *         description: Blog Retrieved
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: integer
 * */

import {Router} from "express"
import passport from "passport"
// import session from "express-session"
import { createBlog, getAllBlogs, getSingleBlog, deleteBlog, updateBlog ,updateBlogLikes} from "../controllers/blog.js"
// import cloudinary from "../utils/cloudinary.js"
import upload from "../utils/multer.js"
import validate from "../middlewares/validate.js"
import blogValidationSchema from "../validations/blogValidate.js"
import { getCommentsByBlog,addComment} from "../controllers/commentCont.js"

// import { isLoggedIn } from "../middlewares/isLogedin.js"
const blogRouter = Router()



// create blog

/**
 * @swagger
 * "/api/v1/blogs":
 *  post:
 *     tags:
 *     - Blogs
 *     summary: Create a Blog
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - title
 *              - content
 *              - image
 *            properties:
 *              id:
 *                type: number and vowels
 *                default: 23sldf3353453e
 *              title:
 *                type: string
 *                default: football trends
 *              content:
 *                type: string
 *                default: we can play very well
 *              image:
 *                type: file
 *                default: jane.jpg
 *     responses:
 *      200:
 *        description: (blog)
 *      404:
 *        description: Please provide all required details
 *      
 *        
 */

blogRouter.post("/",passport.authenticate('jwt', {session: false}),upload.single("image"),validate( blogValidationSchema),createBlog)

/**
 * @swagger
 * components:
 *   schemas:
 *     Comment:
 *       type: object
 *       required:
 *         - blog
 *         - name
 *         - comment
 *       properties:
 *         blog:
 *           type: string
 *           description: The unique identifier of the associated blog.
 *         name:
 *           type: string
 *           description: The name of the commenter.
 *         comment:
 *           type: string
 *           description: The comment text.
 *
 * /api/v1/blogs/{id}/comments:
 *   post:
 *     tags:
 *       - comments
 *     summary: Create a new comment for a blog
 *     parameters:
 *       - name: id
 *         in: path
 *         description: The unique id of the blog
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Comment object to be created
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Comment'
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Comment'
 *       404:
 *         description: comment not found 
 */
blogRouter.post("/:id/comments",addComment);
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
 *         - message
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
 *             image:
 *               type: file
 *               description: The image of the blog.
 *         name:
 *           type: string
 *           description: The name of the commenter.
 *         message:
 *           type: string
 *           description: The comment text.
 *
 * /api/v1/blogs/{id}/comments:
 *   get:
 *     tags:
 *       - comments
 *     summary: Get comments by blog ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: The unique identifier for the blog.
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Comment'
 */
blogRouter.get("/:id/comments",getCommentsByBlog)
//read all blogs
blogRouter.get("/",getAllBlogs)
//read single blog
/**
 * @swagger
 * /api/v1/blogs/:id:
 *   get:
 *     tags:
 *       - Blogs
 *     summary: Get blog by id
 *     parameters:
 *       - name: id
 *         in: path
 *         description: The unique id of the blog
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
 *                 id:
 *                   type: string
 *                   description: The unique identifier for the blog.
 *                 title:
 *                   type: string
 *                   description: The title of the blog.
 *                 content:
 *                   type: string
 *                   description: The content of the blog.
 *                 image:
 *                   type: file
 *                   description: The image of the blog.
 *       404:
 *         description: Not Found
 */
blogRouter.get("/:id",getSingleBlog)

//delete single blog

/**
 * @openapi
 * '/api/v1/blogs/:id':
 *  delete:
 *     tags:
 *     - Blogs
 *     summary: Remove blog by id
 *     parameters:
 *      - name: id
 *        in: path
 *        description: The unique id of the blog
 *        required: true
 *     responses:
 *      200:
 *        description: Removed
 *      404:
 *        description: Not Found
 */
blogRouter.delete("/:id",deleteBlog)

//update blog
/**
 * @swagger
 * /api/v1/blogs/:id:
 *   put:
 *     tags:
 *       - Blogs
 *     summary: Update blog by id
 *     parameters:
 *       - name: id
 *         in: path
 *         description: The unique id of the blog
 *         required: true
 *         schema:
 *           type: string
 *       - name: body
 *         in: body
 *         description: The updated content of the blog
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             title:
 *               type: string
 *               description: The updated title of the blog.
 *             content:
 *               type: string
 *               description: The updated content of the blog.
 *             image:
 *               type: file
 *               description: The updated image of the blog.
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The unique identifier for the blog.
 *                 title:
 *                   type: string
 *                   description: The updated title of the blog.
 *                 content:
 *                   type: string
 *                   description: The updated content of the blog.
 *                 image:
 *                   type: file
 *                   description: The updated image of the blog.
 *       404:
 *         description: Not Found
 */
blogRouter.put("/:id",upload.single("image"),updateBlog)
// post likes
/**
 * @swagger
 * /api/v1/blogs/{id}/likes:
 *   post:
 *     tags:
 *       - Blogs
 *     summary: Update the number of likes for a blog
 *     parameters:
 *       - name: id
 *         in: path
 *         description: The unique id of the blog to update likes for
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
 *                 likes:
 *                   type: number
 *                   description: The updated number of likes for the blog.
 *       404:
 *         description: Not Found
 */
blogRouter.post("/:id/likes",updateBlogLikes)
export default blogRouter