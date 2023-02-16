import mongoose from "mongoose";

const mesagesSchema = new mongoose. Schema(
  {
    name:String,
    phone:String,
    email: String,
    message:String

    
  },
  
);

export default  mongoose.model("messages",  mesagesSchema);
