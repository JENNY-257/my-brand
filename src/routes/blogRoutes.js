import {Router} from "express"
import passport from "passport"
// import session from "express-session"
import { createBlog, getAllBlogs, getSingleBlog, deleteBlog, updateBlog ,updateBlogLikes} from "../controllers/blog.js"
// import cloudinary from "../utils/cloudinary.js"
import upload from "../utils/multer.js"
import validate from "../middlewares/validate.js"
import blogValidationSchema from "../validations/blogValidate.js"
import { getCommentsByBlog } from "../controllers/commentCont.js"

// import { isLoggedIn } from "../middlewares/isLogedin.js"
const router = Router()

// create blog

router.post("/",passport.authenticate('jwt', {session: false}),upload.single("image"),validate( blogValidationSchema),createBlog)
router.get("/:id/comments",getCommentsByBlog)
//read all blogs
router.get("/",getAllBlogs)

//read single blog
router.get("/:id",getSingleBlog)

//delete single blog
router.delete("/:id",deleteBlog)

//update blog
router.put("/:id",upload.single("image"),updateBlog)
// get all messages
router.post("/:id/likes",updateBlogLikes)
export default router