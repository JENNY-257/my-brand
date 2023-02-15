
import express from "express"
import mongoose from "mongoose"
import passport from "passport"
import { ExtractJwt, Strategy } from "passport-jwt"
import { userSchema } from "./models/User.js";
import bodyParser from 'body-parser';
import userRouter from "./routes/userRoutes.js";
import blogRouter from "./routes/blogRoutes.js"
import messageRoutes from "./routes/messageRoutes.js"
import commentRouter from "./routes/commentRoutes.js"
import loginRouter from "./routes/loginRoutes.js";
import cors from "cors";
import options from "../api-docs.js";
import swaggerJSDoc from "swagger-jsdoc"
import swaggerUi from "swagger-ui-express"
// import swaggerDocs from '../swagger.js';
mongoose.set('strictQuery', false);


const app = express()
// app.use(express.json())
// app.use(router)
const specs = swaggerJSDoc(options)  

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs,  { explorer: true }))

app.use(cors())
app.use(
  bodyParser.json({
    limit: '50mb',
  }),
);
mongoose
	.connect("mongodb+srv://admin:vmQRzg2k2kQt1nDb@cluster0.oiwfu8m.mongodb.net/blogs?retryWrites=true&w=majority", { useNewUrlParser: true })
	.then(() => {

const secretKey = 'secretKey'
		const jwtOptions = {
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			// secretOrKey: process.env.JWT_SECRET
			secretOrKey: secretKey
		  };
		  passport.use(new Strategy(jwtOptions, function(jwt_payload, done) {
			// Check if the user exists in the database
			userSchema.findOne({id: jwt_payload.id}, function(err, user) {
			  if (err) {
				return done(err, false);
			  }
			  if (user) {
				return done(null, user);
			  } else {
				return done(null, false);
			  }
			});
		  }));

		app.listen(5000, () => {
			console.log("Server has started!")
			// swaggerDocs(app, 5000)
		})
	})
	
app.use(express.json())
app.use("/api/v1/users",userRouter);
app.use("/api/v1/blogs",blogRouter);
app.use("/api/v1",messageRoutes);
app.use("/api/v1/comments",commentRouter);
app.use("/api/v1/login",loginRouter)


export default app













    

