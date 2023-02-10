import express from "express"
import router from "./routes/blogRoutes.js"
 export const application=()=>{
    const app=express()
    app.use(express.json())
    // app.use("/api/v1/users",userRouter);
    app.use("/api/v1/blogs",router);
    // app.use("/api/v1",messageRoutes);
    // app.use("/api/v1",router);
    return app
}
