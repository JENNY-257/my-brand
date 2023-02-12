import { Router } from "express";
import { addComment, removeComment} from "../controllers/commentCont.js";
// import validate from "../middlewares/validate.js";


const router = Router();

// router.get("/", getComment);

router.post("/:id/comments",addComment);

router.delete("/:id", removeComment);

export default router;






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



















