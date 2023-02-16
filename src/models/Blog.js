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
  
);

export default mongoose.model("Blog", blogSchema);
