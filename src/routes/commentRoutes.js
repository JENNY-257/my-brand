import { Router } from "express";
import { addComment, removeComment} from "../controllers/commentCont.js";
// import validate from "../middlewares/validate.js";


const router = Router();

// router.get("/", getComment);

router.post("/:id/comments",addComment);

router.delete("/:id", removeComment);

export default router;