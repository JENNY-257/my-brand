import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: String,
    blogSummary:String,
    content:String,
    image:String,
    likes:{
      type:Number, default:0}
  }
  createdAt: {
    type: Date,
    default: Date.now
   }
  
);

export default mongoose.model("Blog", blogSchema);
