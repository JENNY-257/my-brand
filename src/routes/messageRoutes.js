import {Router} from "express"
//  import validate from "../middlewares/validate.js";
// import messagesValidationSchema from "../validations/messageValidate.js"
 const router=Router()
 import { newMessage, getAllQuerries } from "../controllers/query.js";

router.post("/messages",newMessage)
 router.get("/messages",getAllQuerries);
 export default router
