import { Schema,mongoose } from "mongoose";

const schemaComment =  Schema(
  {
    name: String,
    message:String,

    blog: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Blog"
    },
    
  createdAt: {
  
    type: Date,
    default: Date.now
   }
   
  }
  
)
export default mongoose.model("Comments", schemaComment);


